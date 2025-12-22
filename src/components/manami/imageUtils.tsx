import type { ReactNode } from "react";
import type { GalleryArtistInfo } from "../utils/clientImages";

export function getImageDescription(artistInfo: GalleryArtistInfo): ReactNode {
  return (
    <p>
      By {artistInfo.artist} on{" "}
      {artistInfo.socialLink ? (
        <a
          href={artistInfo.socialLink}
          target="_blank"
          rel="noreferrer noopener"
          className="text-blue-300 underline"
        >
          {artistInfo.socialMedia}
        </a>
      ) : (
        artistInfo.socialMedia
      )}
    </p>
  );
}
