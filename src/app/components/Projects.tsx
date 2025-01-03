import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Projects = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500" />
            </div>
            
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image src="/assets/project00.png" alt="project00" height={503} width={1203} className="object-cover object-center h-full w-full" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Ecommerce UI/UX, Figma, NextJS-TailwindCSS</h2>
              <p className="text-base leading-relaxed mt-2">
                Template # 6. 
              </p>
              <Link href="https://figma-to-next-js-template6.vercel.app/" className="text-indigo-500 inline-flex items-center mt-3">
                <button>Online </button>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            {/* Repeat for other projects */}
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image src="/assets/project04.png" alt="project04" height={503} width={1203} className="object-cover object-center h-full w-full" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Responsive Website</h2>
              <p className="text-base leading-relaxed mt-2">
                With Core HTML, CSS. 
              </p>
              <Link href="https://responsive-website-from-core-html-css.vercel.app/" className="text-indigo-500 inline-flex items-center mt-3">
                <button>Online </button>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image src="/assets/project05.png" alt="project05" height={503} width={1203} className="object-cover object-center h-full w-full" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Simple Multipage Website</h2>
              <p className="text-base leading-relaxed mt-2">
              with Tailwind CSS
              
              </p>
              <Link href="https://simple-multi-page-website-with-tailwindcss.vercel.app/" className="text-indigo-500 inline-flex items-center mt-3">
                <button>Visit Site </button>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image src="/assets/project01.png" alt="project01" height={503} width={1203} className="object-cover object-center h-full w-full" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Dynamic Resume Builder, Shareable and Editatble</h2>
              <p className="text-base leading-relaxed mt-2">
              Dynamic Resume Builder with Unique Path and Shareable Link in HTML, CSS, Typescript
              </p>
              <Link href="https://resume-with-unique-path-and-shareable-link.vercel.app/" className="text-indigo-500 inline-flex items-center mt-3">
                <button>Visit Site </button>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            {/* Repeat for other projects */}
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image src="/assets/project02.png" alt="project02" height={503} width={1203} className="object-cover object-center h-full w-full" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Dynamic Inventory Management System</h2>
              <p className="text-base leading-relaxed mt-2">
              Milestone 5: Implmention of Basic Validation for Product Input in Dynamic Inventory Management System . HTML , CSS, Typescript
              </p>
              <Link href="https://dynamic-inventory-validation-check.vercel.app/" className="text-indigo-500 inline-flex items-center mt-3">
                <button>Versal </button>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image src="/assets/project03.png" alt="project03" height={503} width={1203} className="object-cover object-center h-full w-full" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Dynamic Blog</h2>
              <p className="text-base leading-relaxed mt-2">
              dynamic blog . next-js, sanity using default blog template
              </p>
              <Link href="https://next-sanity-blog-ge6x6n5ev-zahida-raees-projects.vercel.app/" className="text-indigo-500 inline-flex items-center mt-3">
                <button>Visit Site </button>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Projects;
