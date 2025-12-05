export interface GalleryImage {
  src: string;
  width: number;
  height: number;
  title: string | null;
  artist: GalleryArtistInfo | null;
  thumbnail: string;
}

export interface GalleryArtistInfo {
  title: string;
  artist: string;
  socialMedia: string;
  socialLink: string | null;
}
