import axios from "axios";
import { Result } from "./types";

export async function getMoviesPlaying(): Promise<Result[]> {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/now_playing",
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2M5YWM2ZDViYzBjNTdlYjg3ZDVlZGYyNzExY2Q5NCIsIm5iZiI6MTczMjU5MjI1Ny43MzI4NzcsInN1YiI6IjY2NTdlZDcwNWQyMmJjMzBmMDJkMWM3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.71b3roISNuQrqANFCHNeVAR7lZkKg-ld9hTlcsZrQ3A",
    },
  };

  try {
    const response = await axios.request(options);
    // Hanya mengembalikan array `results` dari data
    return response.data.results.map((movie: Result) => ({
      ...movie,
      poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop_path: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
    }));
  } catch (err) {
    console.error("Failed to fetch movies:", err);
    return [];
  }
}

export async function getMoviePopular(): Promise<Result[]> {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular",
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2M5YWM2ZDViYzBjNTdlYjg3ZDVlZGYyNzExY2Q5NCIsIm5iZiI6MTczMjU5MjI1Ny43MzI4NzcsInN1YiI6IjY2NTdlZDcwNWQyMmJjMzBmMDJkMWM3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.71b3roISNuQrqANFCHNeVAR7lZkKg-ld9hTlcsZrQ3A",
    },
  };
  try {
    const response = await axios.request(options);
    // Hanya mengembalikan array `results` dari data
    return response.data.results.map((movie: Result) => ({
      ...movie,
      poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop_path: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
    }));
  } catch (err) {
    console.error("Failed to fetch movies:", err);
    return [];
  }
}
export async function getMovieLatest(): Promise<Result[]> {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/latest",
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2M5YWM2ZDViYzBjNTdlYjg3ZDVlZGYyNzExY2Q5NCIsIm5iZiI6MTczMjU5MjI1Ny43MzI4NzcsInN1YiI6IjY2NTdlZDcwNWQyMmJjMzBmMDJkMWM3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.71b3roISNuQrqANFCHNeVAR7lZkKg-ld9hTlcsZrQ3A",
    },
  };
  try {
    const response = await axios.request(options);

    // Pastikan poster_path dan backdrop_path ada sebelum diubah
    if (response.data.poster_path) {
      response.data.poster_path = `https://image.tmdb.org/t/p/w500${response.data.poster_path}`;
    }

    if (response.data.backdrop_path) {
      response.data.backdrop_path = `https://image.tmdb.org/t/p/w500${response.data.backdrop_path}`;
    }

    // Mengembalikan data dalam bentuk array yang berisi satu objek movie
    return [response.data]; // Membungkus response.data dalam array
  } catch (err) {
    console.error("Failed to fetch movies:", err);
    return [];
  }
}
