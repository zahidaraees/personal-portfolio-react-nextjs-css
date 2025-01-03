import Image from "next/image"; // For optimized image loading
import Link from "next/link";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex items-center bg-white h-[400px] lg:h-[500px]">
      {/* Hero Container */}
      <div className="absolute inset-0 flex items-center justify-center px-6 lg:px-16 py-8">
        {/* Hero Content Wrapper */}
        <div className="flex flex-row items-center justify-between gap-8 bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl">
          {/* Left Side Text */}
          <div className="max-w-lg bg-[#FDF6E5]/70 p-6 rounded-lg">
            <p className="text-sm font-medium text-gray-700 mb-4">
              Hi, <br /> I am
            </p>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6">
              Zahida Raees
            </h1>
            <h2>Programmer &amp; Literary Author.</h2>
            <p className="text-base lg:text-sm text-gray-600 mb-6">
              As a developer, my major expertise is in Desktop Application
              Development for the financial, trading, manufacturing, and
              service-oriented industries. In the world of web, for Frontend
              Development, I use HTML, CSS, Tailwind CSS, JavaScript,
              TypeScript, and React. For Backend &amp; Fullstack Development, I&apos;ve
              selected NEXTJS &amp; React. As a literary author, I have published
              five books in different literary genres. I have the honor of being
              the first female novelist and the third short story writer of
              Balochi language &amp; literature. I&apos;m an M.Phil scholar and Assistant
              Teacher at the University of Karachi. Last but not least, I am
              always on the way to upgrade my knowledge &amp; skills in the fields
              of my profession and interests.
            </p>

            <Link href="/experience">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-medium">
                Know More
              </button>
            </Link>
          </div>

          {/* Right Side Image */}
          <div className="flex-shrink-0">
            <Image
              src="/assets/zr_pic_latest.jpg" // Replace with your actual photo
              alt="Zahida Raees"
              width={350}
              height={350}
              className="object-cover rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
