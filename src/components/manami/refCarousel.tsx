import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Inline } from "yet-another-react-lightbox/plugins";
import type { GalleryImage } from "../utils/clientImages";
import ManamiLightbox from "./lightbox";

interface Props {
  images: GalleryImage[];
}

export default function ManamiRefCarousel({ images }: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Lambda function to update index based on if the lightbox is open
  const updateIndex = (when: boolean) => {
    return (event: { index: number }) => {
      if (when === open) {
        setIndex(event.index);
      }
    };
  };

  return (
    <>
      <Lightbox
        index={index}
        slides={images}
        plugins={[Inline]}
        styles={{
          container: {
            backgroundColor: "#1b2532",
          },
        }}
        on={{
          view: updateIndex(false),
          click: () => setOpen(true),
        }}
        carousel={{
          finite: true,
        }}
        inline={{
          style: {
            width: "100%",
            maxWidth: "1080px",
            aspectRatio: "3/2",
            margin: "0 auto",
            cursor: "pointer",
          },
        }}
      />
      <ManamiLightbox
        images={images}
        index={index}
        open={open}
        onClose={() => setOpen(false)}
        onView={() => updateIndex(true)}
      />
    </>
  );
}
