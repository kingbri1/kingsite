import { Image } from 'astro:assets';
import type { Photo, RenderImageContext, RenderImageProps } from 'react-photo-album';
import { ColumnsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/columns.css';

import { type GalleryImage } from '../utils/clientImages';

interface Props {
  images: GalleryImage[];
  onPhotoClick: (index: number) => void;
}

// function renderNextjsImage(
//   { alt, title, sizes }: RenderImageProps,
//   { photo, width, height }: RenderImageContext
// ) {
//   return (
//     <img
//       src={photo.src}
//       alt={alt || 'Gallery Post'}
//       width={width || photo.width}
//       height={height || photo.height}
//       title={title}
//       sizes={sizes}
//     />
//   );
// }

export default function ManamiPhotoAlbum({ images, onPhotoClick }: Props) {
  return (
    <div className="lg:max-h-75v overflow-scroll">
      <ColumnsPhotoAlbum
        columns={(containerWidth) => (containerWidth < 640 ? 1 : 2)}
        photos={images.map((image): Photo => {
          return {
            src: image.src,
            width: image.width,
            height: image.height,
            alt: image.title || undefined
          };
        })}
        onClick={({ index }) => onPhotoClick(index)}
      />
    </div>
  );
}
