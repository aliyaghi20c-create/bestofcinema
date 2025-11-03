"use client";
import { useState } from "react";
import "./home.css";
import moviesData from "./movies.json";
import Script from "next/script";
export default function Home() {
  const [search, setSearch] = useState("");

  const filteredMovies = moviesData.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <main className="home">
        <div className="header">
          <div className="header-content">
            <h1>🎞️ Best of Cinema</h1>
            <div className="search-box">
              <input
                type="text"
                placeholder="Search for a movie..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="movie-grid">
          {filteredMovies.map((movie) => (
            <a
              key={movie.id}
              href={`/movie/${movie.id}`}
              className="movie-card"
            >
              <img src={movie.poster} alt={movie.title} />
              <h3 title={movie.title}>{movie.title}</h3>
            </a>
          ))}
        </div>
        <div className="footer">
          <Script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID}`}
          crossOrigin="anonymous"/>
        </div>
      </main>
    </div>
  ); 
}
