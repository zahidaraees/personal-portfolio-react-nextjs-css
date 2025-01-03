"use client";
import React from "react";
import Experience from "./components/experience";
import HeroSection from "./components/HeroSection"; // for landing page
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Projects />
      <Experience />
    </div>
  );
}
