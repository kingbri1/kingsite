import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { DiscordButton, GithubButton } from '@/components/index/socials';
import { Separator } from '@/components/utils/misc';
import fileBridgeLogo from '@/public/FileBridge.png';
import downloadAppStoreLogo from '@/public/DownloadAppStore.svg';

export default function FileBridgeLanding() {
  return (
    <>
      <Head>
        <meta property="og:title" content="FileBridge" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kingbri.dev/filebridge" />
        <meta
          property="og:description"
          content="An app that makes iOS cable file transfer easier"
        />
        <meta name="Description" content="An app that makes iOS cable file transfer easier" />
        <meta property="og:image" content="https://kingbri.dev/FileBridge.png" />
        <meta name="theme-color" content="#468fcc" />
        <link rel="icon" type="image/png" href="/FileBridge.png" />
        <title>FileBridge | Home</title>
      </Head>
      <div className="flex-col relative justify-center flex min-h-screen items-center tracking-wide">
        <div className="hidden md:block">
          <Separator />
        </div>
        <div className="flex-col text-center">
          <div className="p-5 lg:p-0">
            <Image
              src={fileBridgeLogo}
              alt="The FileBridge app icon"
              className="m-auto rounded-2xl w-32 lg:w-auto h-32 lg:h-auto"
            />
          </div>

          <p className="text-whitesmoke font-header text-4xl lg:text-6xl lg:leading-relaxed font-bold tracking-wide">
            FileBridge
          </p>
          <p className="mt-4 font-paragraph text-whitesmoke text-lg lg:text-2xl px-3 lg:px-0">
            A simple app to make iOS file transfer easier.
          </p>
        </div>
        <div className="mt-20 mb-16 inline-flex flex-col justify-center items-center">
          <a
            href="https://apps.apple.com/us/app/filebridge/id1562387073"
            target="_blank"
            rel="noreferrer noopener">
            <Image
              src={downloadAppStoreLogo}
              alt="Download on the app store"
              className="h-12 lg:h-16 w-screen"
            />
          </a>
          <ul className="mt-4 lg:mt-6 flex items-center">
            <GithubButton />
            <DiscordButton />
          </ul>
        </div>
        <footer className="text-center max-w-screen">
          © 2021-present kingbri |&nbsp;
          <span>
            <Link href="filebridge/privacy_policy" className="text-blue-300 underline">
              Privacy Policy
            </Link>
          </span>
        </footer>
      </div>
    </>
  );
}
