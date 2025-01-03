// pages/skills.tsx
import React from "react";
import HeroSection2 from "../components/HeroSection2"; 

const Skills = () => {
  return (
    <>
      <HeroSection2 title="My Skills" breadcrumb="Home > Skills" />

      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Skills and Technologies</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              Frontend Development
            </h2>
            <ul className="list-disc pl-6 text-lg">
              <li>React.js</li>
              <li>Next.js</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5, CSS3</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>CSS Grid, Flexbox</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Backend Development</h2>
            <ul className="list-disc pl-6 text-lg">
              <li>Node.js</li>
              <li>Sanity</li>
              <li>SQL</li>
              <li>RESTful APIs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              Version Control & Tools
            </h2>
            <ul className="list-disc pl-6 text-lg">
              <li>Git & GitHub</li>
              <li>Docker</li>
              <li>CI/CD Pipelines</li>
              <li>VS Code</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Other Skills</h2>
            <ul className="list-disc pl-6 text-lg">
              <li>Agile Development</li>
              <li>Problem Solving</li>
              <li>Communication & Teamwork</li>
              <li>Continuous Learning & Improvement</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default Skills;
