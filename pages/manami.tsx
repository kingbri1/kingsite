import { Separator } from '@/components/utils/misc';
import Head from 'next/head';
import manamiPortrait from '@/public/Manami/portrait.png';
import Image from 'next/image';

interface Props {
  title: string;
  text: string;
}

function CardDescriptor({ title, text }: Props) {
  return (
    <p>
      <span className="text-indigo-300 font-semibold">{title}: </span>
      {text}
    </p>
  );
}

export default function ManamiLanding() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg" href="/favicon.svg" />
        <meta property="og:title" content="Manami Starling" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kingbri.dev/manami" />
        <meta
          property="og:description"
          content="Hi! I'm Manami, a quantum physics student and robotics expert from the year 2077."
        />
        <meta
          name="Description"
          content="Hi! I'm Manami, a quantum physics student and robotics expert from the year 2077."
        />
        <meta property="og:image" content="/Manami/portrait.png" />
        <meta name="theme-color" content="#88a2fa" />
        <title>Manami Starling</title>
      </Head>
      <article className="text-whitesmoke">
        <div className="hidden md:block">
          <Separator />
        </div>
        <div className="flex flex-col items-center filebridge-privacy">
          <h1
            className="font-header text-center text-4xl md:text-5xl
            lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r
            from-blue-300 via-indigo-400 to-purple-300 p-8">
            Manami Starling
          </h1>
          <div
            className="inline-flex flex-col bg-lightbg blog-post font-paragraph
            leading-spread px-6 lg:px-10 py-6 md:max-w-3xl xl:max-w-4xl rounded-xl">
            <h2 className="text-blue-300">Portrait</h2>
            <Image
              src={manamiPortrait}
              alt="Manami's portrait"
              className="m-auto rounded-2xl w-5/12 h-auto"
            />
            <h2 className="text-blue-300">Demographics</h2>
            <CardDescriptor title="Age" text="21 years old" />
            <CardDescriptor title="Birthday" text="December 24th" />
            <CardDescriptor title="Height" text="5' 6&quot;" />
            <CardDescriptor title="Weight" text="Hey! You know you shouldn't ask for that..." />
            <h2 className="text-blue-300">Background</h2>
            <CardDescriptor title="Career" text="University student at BDIT" />
            <CardDescriptor title="Major" text="Quantum physics" />
            <CardDescriptor title="Life goal" text="To understand the secrets of the universe" />
            <CardDescriptor
              title="Clubs"
              text="Robotics club president, Goalie on BDIT soccer team, ghost member of anime club"
            />
            <CardDescriptor
              title="Hobbies"
              text="Tinkering/creating machines, anime, video games, manga, sports"
            />
            <CardDescriptor
              title="Traits"
              text="tomboy, athletic, intelligent, caring, dreamer, kind, honest, lively, selfless"
            />
            <CardDescriptor
              title="Flaws"
              text="has an inferiority complex, doubts her intelligence, makes shallow friendships
              and only respects a few friends"
            />
            <h2 className="text-blue-300">Bluudale</h2>
            <CardDescriptor
              title="Description"
              text="A technologically advanced metropolis with holographic skyscrapers, solar energy,
              mag-lev transport, and citizens that use AR enhanced glasses to interact with
              their surroundings."
            />
            <CardDescriptor
              title="BDIT"
              text="Short for Bluudale Institute of Technology. A prestigious university renowned
              for its engineering and physics programs. Serves as an insitution to further the
              world's knowledge of science and technology."
            />
            <CardDescriptor
              title="Brew Haven"
              text="A frequent stop for Bluudale denizens, Brew Haven serves seasonal coffee blends
              and unique pastries."
            />
            <CardDescriptor
              title="Bluudale Park"
              text="Located in the heart of Bluudale, the park is full of trees for fresh
              air and contains amenities such as a jogging trail, sport courts, and a picnic area
              with a central fountain."
            />
          </div>
        </div>
        <div className="md:hidden">
          <Separator />
        </div>
      </article>
    </>
  );
}
