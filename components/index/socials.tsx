import {
  Discord,
  EnvelopeFill,
  Github,
  Medium,
  Tiktok,
  Twitch,
  Twitter,
  Youtube
} from 'react-bootstrap-icons';

interface Props {
  name: string;
  url: string;
  children: React.ReactNode;
}

// Function for a single social icon
export function SocialButton(props: Props) {
  return (
    <li className="px-2 md:px-3">
      <a href={props.url} aria-label={props.name} target="_blank" rel="noreferrer noopener">
        {props.children}
      </a>
    </li>
  );
}

export function MailButton() {
  return (
    <SocialButton name="email" url="mailto:kingbrigames@gmail.com">
      <EnvelopeFill className="contact-button hover:text-green-400" />
    </SocialButton>
  );
}

export function GithubButton() {
  return (
    <SocialButton name="github" url="https://github.com/kingbri1">
      <Github className="contact-button hover:text-orange-400" />
    </SocialButton>
  );
}

export function TwitterButton() {
  return (
    <SocialButton name="twitter" url="https://twitter.com/kingbri1st">
      <Twitter className="contact-button hover:text-blue-400" />
    </SocialButton>
  );
}

export function DiscordButton() {
  return (
    <SocialButton name="discord" url="/discord">
      <Discord className="contact-button hover:text-blurple" />
    </SocialButton>
  );
}

export function MediumBlogButton() {
  return (
    <SocialButton name="medium" url="https://medium.com/@kingbri">
      <Medium className="contact-button hover:text-gray-500" />
    </SocialButton>
  );
}

export function TwitchButton() {
  return (
    <SocialButton name="twitch" url="https://twitch.tv/kingbri1st">
      <Twitch className="contact-button hover:text-purple-600" />
    </SocialButton>
  );
}

export function YoutubeButton() {
  return (
    <SocialButton name="youtube" url="https://www.youtube.com/channel/UCuGB6NqD6HJlXiGGxpVqxhw">
      <Youtube className="contact-button hover:text-red-600" />
    </SocialButton>
  );
}

export function TiktokButton() {
  return (
    <SocialButton name="tiktok" url="https://tiktok.com/@kingbri1st">
      <Tiktok className="contact-button hover:text-fuchsia-500" />
    </SocialButton>
  );
}

export default function Socials() {
  return (
    <footer id="socials" className="flex justify-center p-8">
      <div className="inline-flex flex-col justify-center">
        <h1 className="text-yellow-300 text-3xl lg:text-4xl text-center font-header font-semibold">
          Social Links
        </h1>
        <ul className="py-10 flex items-center">
          <MailButton />
          <GithubButton />
          <TwitchButton />
          <YoutubeButton />
          <TiktokButton />
          <TwitterButton />
          <DiscordButton />
          <MediumBlogButton />
        </ul>
      </div>
    </footer>
  );
}
