import ExifReader from 'exifreader';
import fs from 'fs';
import path from 'path';
import probe from 'probe-image-size';

export interface GalleryImage {
  src: string;
  width: number;
  height: number;
  title?: string;
  artist?: GalleryArtistInfo;
}

export interface GalleryArtistInfo {
  title: string;
  artist: string;
  socialMedia: string;
  socialLink?: string;
}

export function getImagesFromFolder(folderPath: string) {
  const directory = path.join(process.cwd(), 'public', folderPath);
  const files = fs.readdirSync(directory);

  const images = files.map((file): GalleryImage => {
    const filePath = path.join(directory, file);
    const fileBuffer = fs.readFileSync(filePath);
    const dimensions = probe.sync(fileBuffer);
    const metadata = ExifReader.load(fileBuffer);

    let artistInfo: GalleryArtistInfo | undefined;

    if (metadata.ImageDescription) {
      try {
        artistInfo = JSON.parse(metadata.ImageDescription.description);
      } catch {
        artistInfo = undefined;
      }
    }

    return {
      src: `/${folderPath}/${file}`,
      width: dimensions?.width || 1,
      height: dimensions?.height || 1,
      title: artistInfo?.title,
      artist: artistInfo
    };
  });

  return images;
}
