"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import { getMoviePopular, getMoviesPlaying, getMovieLatest } from "./data/movie";
import { Result } from "./data/types";
import Carousel from "./components/carousel";
import Hero from "./components/hero";
import CardMovie from "./components/cardMovie";
import Footer from "./components/footer";

export default function Home() {
  const [movies, setMovies] = useState<Result[]>([]);
  const [moviesPopular, setMoviesPopular] = useState<Result[]>([]);
  const [moviesLatest, setMoviesLatest] = useState<Result[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movieData = await getMoviesPlaying();
      setMovies(movieData);
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    const fetchMoviesPopular = async () => {
      const moviesPopular = await getMoviePopular();
      setMoviesPopular(moviesPopular);
    };
    fetchMoviesPopular();
  }, []);

  useEffect(() => {
    const fetchMoviesLatest = async () => {
      const moviesLatest = await getMovieLatest();
      setMoviesLatest(moviesLatest);
    };
    fetchMoviesLatest();
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Carousel movies={movies} />
      <Hero movies={moviesLatest} />

      {/* Start Card Movie */}
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Popular Movies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {moviesPopular.slice(0, 4).map((movie, index) => (
            <CardMovie key={index} poster_path={movie.poster_path} title={movie.title} release_date={movie.release_date} vote_average={movie.vote_average} width={300} height={400} />
          ))}
        </div>
      </div>
      {/* End Card Movie */}

      <Footer />
    </div>
  );
}
