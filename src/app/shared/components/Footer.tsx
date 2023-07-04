import React from "react";
import Link from "next/link";
import { links } from "../../main/constants";

const Footer = () => (
  <div className="px-8 py-16 flex justify-center align-center flex-col bg-neutral-800">
    <div
      className="mx-auto text-3xl text-neutral-400 space-x-10"
      style={{ color: "#a3a3a3" }}
    >
      <Link href={links.linkedin} rel="noopener noreferrer" target="_blank">
        <i className="fa-brands fa-linkedin" />
      </Link>
      <Link href={links.github} rel="noopener noreferrer" target="_blank">
        <i className="fa-brands fa-github" />
      </Link>
      <Link href={links.github} rel="noopener noreferrer" target="_blank">
        <i className="fa-brands fa-medium" />
      </Link>
      <Link href={links.email} rel="noopener noreferrer" target="_blank">
        <i className="fa-solid fa-envelope" />
      </Link>
    </div>
  </div>
);

export default Footer;
