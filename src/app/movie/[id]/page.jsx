"use client";

import { useParams } from "next/navigation";
import movies from "../../movies.json";
import Link from "next/link";
import "./movie.css";

export default function MoviePage() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id.toString() === id);

  if (!movie) {
    return (
      <main className="movie-page">
        <h1>Movie not found</h1>
      </main>
    );
  }

  return (
    <main className="movie-page">
      <Link href="/" className="back-link">
        ← Back to Home
      </Link>

      <h1>{movie.title}</h1>

      <iframe
        src={`https://vidsrc.net/embed/movie/${movie.imdb}/`}
        allowFullScreen
        title={movie.title}
      ></iframe>
    </main>
  );
}
