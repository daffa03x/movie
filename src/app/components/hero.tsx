import Image from "next/image";
import React from "react";
import { Result } from "../data/types";

interface HeroProps {
  movies: Result[];
}
const hero: React.FC<HeroProps> = ({ movies }) => {
  let path = "https://via.placeholder.com/300x400?text=Fight+Club";
  if (movies[0]?.poster_path != null) {
    path = movies[0]?.poster_path;
  }
  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row items-center">
        <Image src={path} width={300} height={400} alt="Latest Movie" className="w-64 h-96 object-cover rounded-lg" priority={true} />
        <div className="ml-0 md:ml-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold">Latest Movie</h1>
          <h2 className="text-2xl">{movies[0]?.original_title}</h2>
          <p className="text-gray-600 mt-4">{movies[0]?.overview}</p>
          <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-2 px-6 rounded-full transition duration-300 shadow-md">Watch Now</button>
        </div>
      </div>
    </div>
  );
};

export default hero;
