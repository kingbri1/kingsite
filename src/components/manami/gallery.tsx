import { useState } from "react";
import { type GalleryImage } from "@/components/utils/clientImages";
import { ColumnsPhotoAlbum, type Photo } from "react-photo-album";
import "react-photo-album/columns.css";
import ManamiLightbox from "./lightbox";

interface Props {
  images: GalleryImage[];
}

export default function ManamiGallery({ images }: Props) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="overflow-scroll lg:max-h-[75vh]">
        <ColumnsPhotoAlbum
          columns={(containerWidth) => (containerWidth < 640 ? 1 : 2)}
          photos={images.map((image): Photo => {
            return {
              src: image.thumbnail,
              width: image.width,
              height: image.height,
              alt: image.title || undefined,
            };
          })}
          onClick={({ index }) => setIndex(index)}
        />
      </div>
      <ManamiLightbox
        images={images}
        index={index}
        open={index >= 0}
        onClose={() => setIndex(-1)}
      />
    </>
  );
}
