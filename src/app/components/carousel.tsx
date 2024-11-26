"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Result } from "../data/types";

interface CarouselProps {
  movies: Result[];
}

const Carousel: React.FC<CarouselProps> = ({ movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  });

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (movies.length > 0 ? (prevIndex + 1) % movies.length : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (movies.length > 0 ? (prevIndex - 1 + movies.length) % movies.length : 0));
  };

  if (movies.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 text-lg">No movies available</p>
      </div>
    );
  }

  return (
    <div className="mx-auto">
      <div className="relative w-full h-screen mx-auto overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {movies.map((movie) => (
            <div key={movie.id} className="w-full h-screen flex-shrink-0 flex justify-center items-center bg-black relative">
              <Image
                src={movie.backdrop_path}
                alt={movie.title}
                fill
                className="z-10"
                style={{ objectFit: "cover" }} // Use objectFit to maintain image aspect ratio
                priority={true}
              />
              <div className="absolute text-white z-20">
                <h3 className="text-4xl font-bold mt-4 text-center">{movie.title}</h3>
                <p className="text-lg text-center">{movie.release_date}</p>
                <p className="text-yellow-500 text-center">⭐ {movie.vote_average}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition duration-300">
          &#8592;
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition duration-300">
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
