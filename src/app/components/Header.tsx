import React from "react";

const navigations = [
  {
    title: "About",
    anchor: "#About",
  },
];

const Header = () => (
  <div className="header">
    <div className="header__menu">
      <ul className="flex px-8 lg:px-32 gap-x-10 content-center leading-0 h-0">
        {navigations.map((item) => (
          <li className="mt-6 cursor-pointer" key={item.title}>
            <a href={`${item.anchor}`}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Header;
