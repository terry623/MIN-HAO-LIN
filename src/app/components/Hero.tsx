import React from "react";

const Hero = () => (
  <section className="h-screen bg-white overflow-x-hidden">
    <div className="px-8 lg:px-32 flex flex-col justify-center align-between">
      <h1 className="text-6xl mt-64 font-bold">
        Hi, my name is
        <span className="ml-3 whitespace-nowrap bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
          MIN HAO LIN
        </span>
      </h1>
      <h1 className="text-6xl font-bold mt-4">
        I&apos;m the Frontend Developer.
      </h1>
      <a
        href="#About"
        className="text-2xl font-bold p-0.5 mt-6 w-44 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
      >
        <div className="bg-white">
          <span className="block text-center py-0.5 px-2 bg-white font-bold bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
            Know more
          </span>
        </div>
      </a>
    </div>
  </section>
);

export default Hero;
