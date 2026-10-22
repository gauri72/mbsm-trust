// Finds the point a square crop should centre on, using Apple's Vision framework.
// Faces win (group photos should keep people's faces); otherwise the
// attention-based saliency model picks what draws the eye.
//
// usage: swift scripts/focus.swift <image>...
// prints one JSON object per line: {"file": ..., "x": 0-1, "y": 0-1, "source": "faces"|"saliency"|"center"}
// (x, y measured from the top-left)
import Foundation
import Vision

func union(_ boxes: [CGRect]) -> CGRect? {
    guard var box = boxes.first else { return nil }
    for b in boxes.dropFirst() { box = box.union(b) }
    return box
}

for path in CommandLine.arguments.dropFirst() {
    let url = URL(fileURLWithPath: path)
    let handler = VNImageRequestHandler(url: url, options: [:])
    let faces = VNDetectFaceRectanglesRequest()
    let saliency = VNGenerateAttentionBasedSaliencyImageRequest()
    try? handler.perform([faces, saliency])

    var box: CGRect? = nil
    var source = "center"
    let faceBoxes = (faces.results ?? []).filter { $0.confidence > 0.6 }.map { $0.boundingBox }
    if let f = union(faceBoxes) {
        box = f
        source = "faces"
    } else if let s = union((saliency.results?.first?.salientObjects ?? []).map { $0.boundingBox }) {
        box = s
        source = "saliency"
    }

    let x = box.map { $0.midX } ?? 0.5
    // Vision's origin is bottom-left; flip to top-left
    let y = box.map { 1 - $0.midY } ?? 0.5
    let name = (path as NSString).lastPathComponent
    print("{\"file\": \"\(name)\", \"x\": \(String(format: "%.3f", x)), \"y\": \(String(format: "%.3f", y)), \"source\": \"\(source)\"}")
}
