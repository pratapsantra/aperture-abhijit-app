import React, { useEffect, useState } from 'react';
import './ImageGallery.css'; // Assuming you have CSS classes like .grid, .card, .span-1, .c-1, etc.
import imageList from "../../JsonData/ImageName.json";
import { RowsPhotoAlbum, MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Video from "yet-another-react-lightbox/plugins/video";

import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

type Photo = {
  src: string;
  width: number;
  height: number;
  key: string;
  alt: string;
  title: string;
  // href: string;
  label: string;
  description?: string
};

function ImageGallery() {

  const [photos, setPhotos] = useState<Photo[]>()
  const [index, setIndex] = useState(-1);

  // Function to load image and get size
  const loadImageInfo = (imageName: string): Promise<Photo> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = `/Image-gallery/${imageName}`;
      img.onload = () => {
        resolve({
          src: `./Image-gallery/${imageName}`,
          width: img.naturalWidth,
          height: img.naturalHeight,
          key: imageName,
          alt: imageName,
          title: `Title for ${imageName}`,
          // href: `/gallery/${imageName}`,
          label: `Label for ${imageName}`,
          
        });
      };
    });
  };
  // Load all images and create photos array

  useEffect(() => {
    Promise.all(imageList?.map(item => loadImageInfo(item["Image-name"])))
      .then(result => {
        const photos = result.map((item, index) => ({
          src: item.src,
          width: item?.width,
          height: item?.height,
          key: String(index + 1),
          alt: `Photo ${index + 1}`,
          title: `Photo ${index + 1} Title`,
          // href: `/gallery/${item["Image-name"]}`,
          label: `Label ${index + 1}`,
          description:
            `Photo description\n ${index + 1} Title`,
        }));
        setPhotos(photos)
        // console.log("index-----", photos[0])
      });
  }, []);

  return (

    <section className='working-time-section'>
      <div className='inner-container'>
        <div className='heading-container'>
          <div className='heading-text-container'>
            <h3>Image Gallery</h3>
          </div>
        </div>
      </div>
      {photos && photos?.length > 0 ? (
        <MasonryPhotoAlbum
          photos={photos}
          onClick={({ index }) => setIndex(index)}
          render={{
            extras: (_, { photo, index }) => (
              <div className='title-show'>
                <h4>{photo?.title}</h4>
              </div>
            ),
          }}
        />
      ) : null}

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}

      />

    </section>
  );
};

export default ImageGallery;
