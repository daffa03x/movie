"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import { getMoviePopular, getMoviesPlaying, getMovieLatest } from "./data/movie";
import { Result } from "./data/types";
import Carousel from "./components/carousel";
import Hero from "./components/hero";
import Card from "./components/card";
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
      <Card movies={moviesPopular} />
      <Footer />
    </div>
  );
}
