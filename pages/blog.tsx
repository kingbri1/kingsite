import Head from 'next/head';

import { MediumBlogButton, TwitterButton } from '@/components/index/socials';

export default function Blog() {
  return (
    <>
      <Head>
        <meta property="og:title" content="kingbri | Blog" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kingbri.dev/blog" />
        <meta
          property="og:description"
          content="This is kingbri's personal blog. I post a lot of random things here. All opinions are my own."
        />
        <meta
          name="Description"
          content="This is kingbri's personal blog. I post a lot of random things here. All opinions are my own."
        />
        <meta property="og:image" content="https://kingbri.dev/kingbriLogo.png" />
        <meta name="theme-color" content="#ffd700" />
        <link rel="icon" type="image/svg" href="/favicon.svg" />
        <title>Blog</title>
      </Head>
      <div className="flex-col relative justify-center flex min-h-screen items-center tracking-wide">
        <div className="inline-flex flex-col text-center items-center">
          <h1 className="text-6xl lg:text-7xl text-yellow-300 font-header text-center p-6">Blog</h1>
          <h2 className="text-whitesmoke text-center text-2xl md:text-3xl font-header p-3 blog-post">
            This page is under construction
          </h2>
          <p className="text-whitesmoke px-6 lg:px-10 text-md lg:text-lg py-6 font-paragraph tracking-wide leading-spread">
            My blog has moved to{' '}
            <span className="text-blue-300 underline">
              <a
                href="https://twitter.com/kingbri1st"
                className="visited:text-purple-400"
                target="_blank"
                rel="noreferrer">
                @kingbri1st
              </a>
            </span>{' '}
            on Twitter/X and{' '}
            <span className="text-blue-300 underline">
              <a
                href="https://medium.com/@kingbri"
                className="visited:text-purple-400"
                target="_blank"
                rel="noreferrer">
                @kingbri
              </a>
            </span>{' '}
            on Medium.
            <br />
          </p>
          <ul className="mt-4 lg:mt-6 flex items-center">
            <TwitterButton />
            <MediumBlogButton />
          </ul>
        </div>
      </div>
    </>
  );
}
