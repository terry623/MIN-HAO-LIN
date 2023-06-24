import TailwindCss from "./contents/tailwind-css.mdx";
import Podcast from "./contents/podcast.mdx";
import ReactStructure from "./contents/react-structure.mdx";

export const contentMap: Record<
  string,
  {
    title: string;
    content: JSX.Element;
    date: string;
  }
> = {
  "tailwind-css": {
    title: "Tailwind CSS 是什麼，到底好不好用？",
    content: <TailwindCss />,
    date: "2021-04-03",
  },
  "react-structure": {
    title: "究竟如何組織 React 專案架構？",
    content: <ReactStructure />,
    date: "2021-03-18",
  },
  podcast: {
    title: "台灣 Podcast 崛起！為什麼有如此魅力？",
    content: <Podcast />,
    date: "2020-11-15",
  },
};
