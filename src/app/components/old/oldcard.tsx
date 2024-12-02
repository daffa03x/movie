import Image from "next/image";
import { Result } from "../../data/types";
interface CardProps {
  movies: Result[];
}
const oldcard: React.FC<CardProps> = ({ movies }) => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Popular Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.slice(0, 4).map((movie) => (
          <div key={movie.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src={movie.poster_path} alt={movie.title} width={300} height={400} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-bold">{movie.title}</h2>
              <p className="text-gray-600 mt-2">Release: {movie.release_date}</p>
              <p className="text-gray-600">Rating: ⭐ {Math.round(movie.vote_average)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default oldcard;
