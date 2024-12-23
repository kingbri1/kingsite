import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { DiscordButton, GithubButton } from '@/components/index/socials';
import { Separator } from '@/components/utils/misc';
import ferriteLogo from '@/public/Ferrite.png';

export default function FerriteLanding() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Ferrite" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kingbri.dev/ferrite" />
        <meta
          property="og:description"
          content="An app that makes torrent searching easier on iOS"
        />
        <meta name="Description" content="An app that makes torrent searching easier on iOS" />
        <meta
          property="og:image"
          content="https://avatars1.githubusercontent.com/u/8082010?s=460&u=6f29bfc7183955182abe0625dc1cc8054db0f2b9&v=4"
        />
        <meta name="theme-color" content="#d47355" />
        <link rel="icon" type="image/png" href="/Ferrite.png" />
        <title>Ferrite | Home</title>
      </Head>
      <div className="flex-col relative justify-center flex min-h-screen items-center tracking-wide">
        <div className="hidden md:block">
          <Separator />
        </div>
        <div className="flex-col text-center">
          <div className="p-5 lg:p-0">
            <Image
              src={ferriteLogo}
              alt="The Ferrite app icon"
              className="m-auto rounded-2xl w-32 lg:w-auto h-32 lg:h-auto"
            />
          </div>

          <p className="text-whitesmoke font-header text-4xl lg:text-6xl lg:leading-relaxed font-bold tracking-wide">
            Ferrite
          </p>
          <p className="mt-4 font-paragraph text-whitesmoke text-lg lg:text-2xl px-3 lg:px-0">
            A media searcher and debrid manager for iOS.
          </p>
        </div>
        <div className="mt-8 lg:mt-12 mb-16 inline-flex flex-col justify-center items-center">
          <a href="https://github.com/bdashore3/Ferrite/releases" target="_blank" rel="noreferrer">
            <button className="text-lg lg:text-xl rounded-md px-3 py-1 lg:py-2 duration-500 text-whitesmoke border-solid border-2 border-whitesmoke hover:text-black hover:bg-whitesmoke">
              Download
            </button>
          </a>
          <ul className="mt-12 lg:mt-8 flex items-center">
            <GithubButton />
            <DiscordButton />
          </ul>
        </div>
        <footer className="text-center max-w-screen">
          © 2024-present kingbri |&nbsp;
          <span>
            <Link href="ferrite/privacy_policy" className="text-blue-300 underline">
              Privacy Policy
            </Link>
          </span>
        </footer>
      </div>
    </>
  );
}
