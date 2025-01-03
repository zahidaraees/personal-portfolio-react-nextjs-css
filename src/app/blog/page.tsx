"use client";
import React, { useState } from "react";
import BlogCard from "../components/BlogCard";
import Sidebar from "../components/Sidebar";
import HeroSection2 from "../components/HeroSection2";

// Define the blog type
interface Blog {
  image: string;
  title: string;
  category: string;
  date: string;
  description: string;
  fullContent: string;
}

const Blog = () => {
  const allBlogs: Blog[] = [
    {
      image: "/assets/book01.jpg",
      title: "Khwaab Gharonda",
      category: "Poetry",
      date: "14 April 2014",
      description: "Collection of Urdu Poetry by Zahida Raees Raji...",
      fullContent: `
        <p>This is the full content of <strong>Khwaab Gharonda</strong>. It includes a detailed explanation of the poetry, its themes, and the author's insights.</p>
        <p><strong>Highlights:</strong></p>
        <ul>
          <li>Deep exploration of poetic imagery.</li>
          <li>Focus on emotional connection and cultural roots.</li>
        </ul>
        <p>More details about this beautiful collection can be found in the book.</p>
      `,
    },
    {
      image: "/assets/book02.jpg",
      title: "Bey Kessah a Mana Waab Naet",
      category: "Fiction",
      date: "10 Oct 2016",
      description: "Collection of Balochi Short Stories by Zahida Raees Raji...",
      fullContent: `
        <p>This is the full content of <strong>Bey Kessah a Mana Waab Naet</strong>. It delves into the struggles of rural communities and their narratives.</p>
        <p><strong>Key Points:</strong></p>
        <ol>
          <li>Social norms and values.</li>
          <li>The resilience of human spirit.</li>
        </ol>
        <p>A must-read for fans of Balochi literature.</p>
      `,
    },
    // Add other blog objects...
  ];

  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>(allBlogs);
  const [activeBlog, setActiveBlog] = useState<Blog | null>(null); // Add type for activeBlog

  const handleCategoryClick = (category: string) => {
    const filtered = allBlogs.filter((blog) => blog.category === category);
    setFilteredBlogs(filtered);
    setActiveBlog(null); // Reset active blog
  };

  const handleReadMoreClick = (blog: Blog) => {
    setActiveBlog(blog);
  };

  return (
    <>
      <HeroSection2 title="Blog" breadcrumb="Home > Blog" />

      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <section className="md:col-span-3">
          {activeBlog ? (
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h2 className="text-3xl font-bold mb-4">{activeBlog.title}</h2>
              <p className="text-sm text-gray-500 mb-4">
                {activeBlog.category} • {activeBlog.date}
              </p>
              <div
                className="text-gray-700"
                dangerouslySetInnerHTML={{ __html: activeBlog.fullContent }}
              ></div>
              <button
                className="mt-4 text-blue-500 hover:underline"
                onClick={() => setActiveBlog(null)}
              >
                Back to All Posts
              </button>
            </div>
          ) : (
            filteredBlogs.map((blog, index) => (
              <BlogCard
                key={index}
                {...blog}
                onReadMoreClick={() => handleReadMoreClick(blog)}
              />
            ))
          )}
        </section>

        <section>
          <Sidebar
            onCategoryClick={handleCategoryClick}
            onRecentPostClick={(title: string) =>
              handleReadMoreClick(
                allBlogs.find((blog) => blog.title === title) as Blog
              )
            }
            recentPosts={allBlogs}
          />
        </section>
      </div>
    </>
  );
};

export default Blog;
