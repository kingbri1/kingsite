import { useState } from "react";
import { type GalleryImage } from "@/components/utils/clientImages";
import ManamiPhotoAlbum from "./photoAlbum";
import ManamiLightbox from "./lightbox";

interface Props {
  images: GalleryImage[];
}

export default function ManamiGallery({ images }: Props) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <h2 className="text-blue-300">Gallery</h2>
      <ManamiPhotoAlbum images={images} onPhotoClick={setIndex} />
      <ManamiLightbox images={images} index={index} onClose={() => setIndex(-1)} />
    </>
  );
}
