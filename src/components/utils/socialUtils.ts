export type SocialName =
  | "email"
  | "github"
  | "twitch"
  | "youtube"
  | "tiktok"
  | "twitter"
  | "discord"
  | "medium";

interface SocialLink {
  url: string;
  icon: string;
  hoverClass: string;
}

export const SOCIAL_ITEMS: Map<SocialName, SocialLink> = new Map([
  [
    "email",
    {
      url: "mailto:kingbrigames@gmail.com",
      icon: "icon-[mdi--email]",
      hoverClass: "hover:text-green-400",
    },
  ],
  [
    "github",
    {
      url: "https://github.com/kingbri1",
      icon: "icon-[bxl--github]",
      hoverClass: "hover:text-orange-400",
    },
  ],
  [
    "twitch",
    {
      url: "https://twitch.tv/kingbri1st",
      icon: "icon-[bxl--twitch]",
      hoverClass: "hover:text-purple-600",
    },
  ],
  [
    "youtube",
    {
      url: "https://www.youtube.com/@kingbri",
      icon: "icon-[bxl--youtube]",
      hoverClass: "hover:text-red-600",
    },
  ],
  [
    "tiktok",
    {
      url: "https://tiktok.com/@kingbri1st",
      icon: "icon-[bxl--tiktok]",
      hoverClass: "hover:text-fuchsia-500",
    },
  ],
  [
    "twitter",
    {
      url: "https://twitter.com/kingbri1st",
      icon: "icon-[bxl--twitter]",
      hoverClass: "hover:text-blue-400",
    },
  ],
  [
    "discord",
    {
      url: "/discord",
      icon: "icon-[bxl--discord-alt]",
      hoverClass: "hover:text-blurple",
    },
  ],
  [
    "medium",
    {
      url: "https://medium.com/@kingbri",
      icon: "icon-[bxl--medium]",
      hoverClass: "hover:text-gray-500",
    },
  ],
]);
