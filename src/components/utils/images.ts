import ExifReader from "exifreader";
import fs from "fs";
import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";
import type { GalleryArtistInfo, GalleryImage } from "./clientImages";

export async function getImagesFromAssets(folderPath: string) {
  const assets = import.meta.glob<ImageMetadata>("/src/assets/**/*", {
    eager: true,
    import: "default",
  });

  // This doesn't look too optimized, maybe make a collections enum or separate functions instead
  const imageModules = Object.entries(assets).filter(([filePath]) =>
    filePath.includes(`/src/assets/${folderPath}/`)
  );

  const imagePromises = imageModules.map(async ([filePath, imageModule]): Promise<GalleryImage> => {
    const relPath = filePath.replace(/^\//, "");
    const fileBuffer = fs.readFileSync(relPath);
    const isAnimated = fileBuffer.includes(Buffer.from("acTL"));
    const metadata = ExifReader.load(fileBuffer);

    let artistInfo: GalleryArtistInfo | undefined;

    if (metadata.ImageDescription) {
      try {
        artistInfo = JSON.parse(metadata.ImageDescription.description);
      } catch {
        artistInfo = undefined;
      }
    }

    const imageResult = await getImage({
      src: imageModule,
    });

    return {
      src: isAnimated ? imageModule.src : imageResult.src,
      width: imageModule.width,
      height: imageModule.height,
      title: artistInfo?.title ?? null,
      artist: artistInfo ?? null,
      thumbnail: imageResult.src,
    };
  });

  return await Promise.all(imagePromises);
}
