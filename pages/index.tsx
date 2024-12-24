import Head from 'next/head';

import About from '@/components/index/about';
import Home from '@/components/index/home';
import Socials from '@/components/index/socials';
import Work from '@/components/index/work';
import { Separator } from '@/components/utils/misc';

export default function IndexPage() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg" href="/favicon.svg" />
        <meta property="og:title" content="kingbri's website" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kingbri.dev" />
        <meta
          property="og:description"
          content="My name's Brian. This is my website. I make a lot of cool things. Come take a look!"
        />
        <meta
          name="Description"
          content="My name's Brian. This is my website. I make a lot of cool things. Come take a look!"
        />
        <meta property="og:image" content="https://kingbri.dev/kingbriLogo.png" />
        <meta name="theme-color" content="#ffd700" />
        <title>kingbri</title>
      </Head>
      <Home />
      <Separator id="about" />
      <About />
      <Separator id="work" />
      <Work />
      <Socials />
    </>
  );
}
