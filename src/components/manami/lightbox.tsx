import { ReactNode } from 'react';
import Lightbox, { SlideImage } from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Download from 'yet-another-react-lightbox/plugins/download';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';

import { GalleryArtistInfo, GalleryImage } from '../utils/images';

interface Props {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
}

function getDescription(artistInfo: GalleryArtistInfo): ReactNode {
  return (
    <p>
      By {artistInfo.artist} on{' '}
      {artistInfo.socialLink ? (
        <a
          href={artistInfo.socialLink}
          target="_blank"
          rel="noreferrer noopener"
          className="text-blue-300 underline">
          {artistInfo.socialMedia}
        </a>
      ) : (
        artistInfo.socialMedia
      )}
    </p>
  );
}

export default function ManamiLightbox({ images, index, onClose }: Props) {
  return (
    <Lightbox
      slides={images.map(({ src, title, artist }): SlideImage => {
        return {
          src: src,
          title: title,
          description: artist ? getDescription(artist) : ''
        };
      })}
      carousel={{
        padding: '64px'
      }}
      open={index >= 0}
      index={index}
      close={onClose}
      plugins={[Fullscreen, Zoom, Captions, Download]}
    />
  );
}
