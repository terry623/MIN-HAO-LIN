import React from "react";
import config from "../index.json";
import Link from "next/link";

const Footer = () => {
  const footer = config.footer;

  return (
    <div className="footer px-8 py-16 flex justify-center align-center flex-col bg-neutral-800">
      <div className="mx-auto text-3xl text-neutral-400 space-x-10">
        <Link href={footer.linkedin} rel="noopener noreferrer" target="_blank">
          <i className="fa-brands fa-linkedin" style={{ color: "#a3a3a3" }} />
        </Link>
        <Link href={footer.github} rel="noopener noreferrer" target="_blank">
          <i className="fa-brands fa-github" style={{ color: "#a3a3a3" }} />
        </Link>
        <Link href={footer.email} rel="noopener noreferrer" target="_blank">
          <i className="fa-solid fa-envelope" style={{ color: "#a3a3a3" }} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
