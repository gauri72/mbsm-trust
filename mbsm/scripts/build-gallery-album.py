#!/usr/bin/env python3
"""Build a gallery album manifest + thumbnails from a folder of photos/videos.

Usage (from mbsm/):
  python3 scripts/build-gallery-album.py "our gallery/projects/projects-1" school-kit-distribution \
      --press IMG-20260804-WA0002.jpg IMG-20260805-WA0000.jpg

- Reads media from public/assets/images/<folder>/
- Writes small JPEG thumbnails to public/assets/images/<folder>/thumbs/
  (video posters are grabbed with macOS `qlmanage`)
- Finds a focus point per item for square tiles (scripts/focus.swift: faces, else
  Apple's attention-based saliency model; newspaper clippings keep their headline)
- Writes src/components/our-gallery/albums/<slug>.json, sorted by date
  (taken from WhatsApp-style names like IMG-20260718-WA0003.jpg; undated files go last)
"""
import argparse
import json
import re
import shutil
import subprocess
import tempfile
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
IMAGES = ROOT / "public" / "assets" / "images"
ALBUMS = ROOT / "src" / "components" / "our-gallery" / "albums"
THUMB_SIZE = 720
NAME_RE = re.compile(r"(\d{4})(\d{2})(\d{2})-WA(\d+)")


def sort_key(name):
    m = NAME_RE.search(name)
    if not m:
        return ("9", 0, name)
    return (f"{m[1]}-{m[2]}-{m[3]}", int(m[4]), name)


def media_date(name):
    m = NAME_RE.search(name)
    return f"{m[1]}-{m[2]}-{m[3]}" if m else None


def video_info(path):
    def md(attr):
        out = subprocess.run(["mdls", "-raw", "-name", attr, str(path)], capture_output=True, text=True).stdout
        return None if out in ("", "(null)") else float(out)

    return md("kMDItemDurationSeconds")


def save_thumb(img, dest):
    img = ImageOps.exif_transpose(img).convert("RGB")
    img.thumbnail((THUMB_SIZE, THUMB_SIZE), Image.LANCZOS)
    img.save(dest, "JPEG", quality=78, optimize=True, progressive=True)
    return img.size


def find_focus(thumbs, items):
    paths = [str(thumbs / Path(item["thumb"]).name) for item in items]
    out = subprocess.run(["swift", str(ROOT / "scripts" / "focus.swift"), *paths], capture_output=True, text=True, check=True)
    focus = {}
    for line in out.stdout.splitlines():
        row = json.loads(line)
        focus[row["file"]] = [row["x"], row["y"]]
    return focus


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("folder", help="folder inside public/assets/images")
    ap.add_argument("slug", help="album slug (output json name)")
    ap.add_argument("--press", nargs="*", default=[], help="files that are newspaper clippings")
    ap.add_argument("--top", nargs="*", default=[], help="files whose square tile should show the top (posters, banners)")
    args = ap.parse_args()

    src = IMAGES / args.folder
    thumbs = src / "thumbs"
    thumbs.mkdir(exist_ok=True)
    files = sorted(
        (p.name for p in src.iterdir() if p.suffix.lower() in (".jpg", ".jpeg", ".png", ".webp", ".mp4")),
        key=sort_key,
    )

    items = []
    with tempfile.TemporaryDirectory() as tmp:
        for name in files:
            path = src / name
            is_video = path.suffix.lower() == ".mp4"
            thumb_name = Path(name).stem + ".jpg"
            item = {
                "src": f"{args.folder}/{name}",
                "thumb": f"{args.folder}/thumbs/{thumb_name}",
                "type": "video" if is_video else "photo",
                "date": media_date(name),
            }
            if is_video:
                subprocess.run(["qlmanage", "-t", "-s", "1280", "-o", tmp, str(path)], capture_output=True)
                poster = Path(tmp) / f"{name}.png"
                with Image.open(poster) as im:
                    w, h = save_thumb(im, thumbs / thumb_name)
                duration = video_info(path)
                if duration:
                    item["duration"] = round(duration)
            else:
                with Image.open(path) as im:
                    w, h = save_thumb(im, thumbs / thumb_name)
                if name in args.press:
                    item["type"] = "press"
            item["width"], item["height"] = w, h
            items.append(item)
            print(f"{item['type']:5} {item['date']} {name}")

    focus = find_focus(thumbs, items)
    for item in items:
        if item["type"] == "press" or Path(item["src"]).name in args.top:
            item["focus"] = [0.5, 0]
        else:
            item["focus"] = focus.get(Path(item["thumb"]).name, [0.5, 0.5])

    ALBUMS.mkdir(exist_ok=True)
    out = ALBUMS / f"{args.slug}.json"
    out.write_text(json.dumps(items, indent=2) + "\n")
    print(f"\n{len(items)} items -> {out.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
