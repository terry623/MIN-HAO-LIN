import React from "react";
import Image from "next/image";
import Link from "next/link";

import Avatar from "../images/avatar.jpg";
import { links } from "../constants";

const About = () => (
  <div
    id="About"
    className="px-8 md:px-32 pb-32 content-center bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
  >
    <h1 className="pt-12 uppercase font-bold text-center text-white text-bold text-4xl">
      About me
    </h1>
    <div className="mt-16 flex flex-col md:flex-row align-center items-center">
      <div className="w-1/2 flex justify-center content-center">
        <Image
          src={Avatar}
          alt="avatar"
          className="shadow-lg"
          width={300}
          height={300}
        />
      </div>
      <div className="pt-8 md:py-0 md:w-1/2 text-white md:ml-4 text-center md:text-left whitespace-pre-line">
        <div>
          <span>
            A frontend developer with 4 years of experience. Skilled in using
            Typescript, JavaScript, React.js and Next.js.
          </span>
        </div>
        <div className="mt-6">
          <ul className="md:list-disc list-inside">
            <li>Web Frontend Developer at Dcard (2020.7 - now)</li>
            <li>Full Stack Developer at Kuobrothers (2020.3 - 2021.5)</li>
            <li>Front End Developer Intern at Seekrtech (2019.1 - 2019.3)</li>
            <li>Full Stack Developer Intern at YOCTOL.AI (2018.7 - 2018.8)</li>
            <li>Full Stack Developer Intern at Titansoft (2017.7 - 2017.8)</li>
            <li>CS, National Tsing Hua University (2015.9 - 2019.6)</li>
          </ul>
        </div>
        <div className="mt-6 mx-auto md:mx-0 border-2 border-white py-1 px-2 w-36 text-center font-bold">
          <Link href={links.linkedin} className="text-white text-l">
            View Resume
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default About;
