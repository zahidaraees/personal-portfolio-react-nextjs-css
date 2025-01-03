import React from "react";
import Projects from "../components/Projects";
import HeroSection2 from "../components/HeroSection2";

const page = () => {
  return (
    <div>
      <header>
        <HeroSection2 title="My Projects" breadcrumb="Home > Projects" />
      </header>

      <div className="flex flex-wrap sm:flex-row flex-col px-4 py-6 m-8 mb-12">
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
          ZR-Projects for Q2
        </h1>
        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
          These are the Projects I have created with HTML, CSS, TAILWINDCSS,
          JAVASCRIPT, TYPESCRIPT, NEXT-JS, REACT-JS, FIGMA, SHEDCN, SANITY tools
          and plateforms. Following are the assignments of Quarter 2, Artifical
          Intelengance Course from Governor House Karachi, Shift Sunday 9:00 am
          to 12:00
        </p>
      </div>
      <Projects />
    </div>
  );
};

export default page;
