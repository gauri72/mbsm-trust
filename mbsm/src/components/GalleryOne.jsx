const GalleryOne = () => {
  const instagramLinks = [
    "https://www.instagram.com/reel/C6u_ex2NMvd/?igsh=ejRwdTRpc3RjOWY4",
    "https://www.instagram.com/reel/C8UewAdsBnP/?igsh=MTAyNGg4MTRpcnliYg==",
    "https://www.instagram.com/reel/C9fQ2hdMiD8/?igsh=MWRiY2l5M3V0c2NvMQ==",
    "https://www.instagram.com/reel/DG-weBlse_k/?igsh=MWpxMTBlM2x2cndqZQ==",
    "https://www.instagram.com/reel/DHfSL5mzCZr/?igsh=MTRkbml6eDNlaHRmMQ==",
    "https://www.instagram.com/reel/DHx4BYzsv4i/?igsh=MWc2enZsOWRsZWNmaA==",
  ];

  const galleryImages = [
    "one.png",
    "two.png",
    "three.png",
    "four.png",
    "five.png",
    "six.png",
  ];

  return (
    <div className='gallery'>
      <div className='gallery__inner'>
        <div className='gallery__slider'>
          {galleryImages.map((image, index) => (
            <div key={`first-${index}`} className='gallery__single'>
              <img src={`assets/images/gallery/${image}`} alt='Image_inner' />
              <a
                href={instagramLinks[index]}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='View on Instagram'
              >
                <i className='fa-brands fa-instagram' />
              </a>
            </div>
          ))}
          {galleryImages.map((image, index) => (
            <div key={`second-${index}`} className='gallery__single'>
              <img src={`assets/images/gallery/${image}`} alt='Image_inner' />
              <a
                href={instagramLinks[index]}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='View on Instagram'
              >
                <i className='fa-brands fa-instagram' />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryOne;
