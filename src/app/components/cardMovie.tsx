import React from "react";
import Image from "next/image";

interface CardMovieProps {
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: number;
  width: number;
  height: number;
}

const cardMovie: React.FC<CardMovieProps> = ({ poster_path, title, release_date, vote_average, width, height }) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <Image src={poster_path} alt={title} width={width} height={height} className="w-full h-60 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-gray-600 mt-2">Release: {release_date}</p>
          <p className="text-gray-600">Rating: ⭐ {Math.round(vote_average)}</p>
        </div>
      </div>
    </>
  );
};

export default cardMovie;
