import React from "react";

const navigations = [
  {
    title: "About",
    link: "/#About",
  },
  {
    title: "Articles",
    link: "/#Articles",
  },
];

const Header = () => (
  <div>
    <ul className="flex px-8 md:px-32 gap-x-10 content-center leading-0 h-0 mb-16">
      {navigations.map((item) => (
        <li className="mt-6 cursor-pointer" key={item.title}>
          <a href={`${item.link}`}>{item.title}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Header;
