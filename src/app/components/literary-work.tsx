"use client";
import React from "react";
import Image from "next/image";

const LiteraryWork: React.FC = () => {
  const books = [
    {
      image: "/assets/book01.jpg",
      title: "Khwaab Gharonda",
      genre: "Poetry",
      year: "2014",
      description: "Collection of Urdu Poetry by Zahida Raees Raji.",
    },
    {
      image: "/assets/book02.jpg",
      title: "Bey Kessah a Mana Waab Naet",
      genre: "Fiction",
      year: "2016",
      description: "Collection of Balochi Short Stories by Zahida Raees Raji.",
    },
    {
      image: "/assets/book03.jpg",
      title: "Paad e Cheyr e Zimmin",
      genre: "Fiction",
      year: "2018",
      description: "Balochi Novelette by Zahida Raees Raji.",
    },
    {
      image: "/assets/book04.jpg",
      title: "Tao Keh Zind e Darwar e",
      genre: "Novel",
      year: "2018",
      description: "Balochi Novel by Zahida Raees Raji.",
    },
    {
      image: "/assets/book05.jpg",
      title: "Aphorism & Balochi Aphorism",
      genre: "Non-Fiction",
      year: "2020",
      description: "Aphorisms in the Balochi literary tradition.",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">My Literary Work</h1>
      <p className="text-center text-gray-600 mb-12">
        Explore my collection of literary publications, spanning poetry,
        fiction, and non-fiction genres.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
          >
            <Image
              src={book.image}
              alt={book.title}
              width={300}
              height={400}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{book.title}</h2>
              <p className="text-sm text-gray-500 mb-2">
                {book.genre} • {book.year}
              </p>
              <p className="text-gray-700">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiteraryWork;
