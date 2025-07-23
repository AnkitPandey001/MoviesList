import { useEffect, useState } from "react";
import type { MoviesDataTypesProps } from "../utils/moviesData";

export const WatchList = () => {
  const [wishlist, setWishlist] = useState<MoviesDataTypesProps[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(stored);
  }, []);

  const handleRemove = (id: number) => {
    const updatedList = wishlist.filter((movie) => movie.id !== id);
    setWishlist(updatedList);
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">🎬 Watchlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-gray-600 text-center">
          No movies in your watchlist yet.
        </p>
      ) : (
        wishlist.map((movie) => (
          <div
            key={movie.id}
            className="mb-4 p-4 rounded-lg shadow bg-white border border-gray-200"
          >
            <p>
              <strong>🎬 Title:</strong> {movie.title}
            </p>
            <p>
              <strong>🎭 Genre:</strong> {movie.genre}
            </p>
            <p>
              <strong>📅 Year:</strong> {movie.year}
            </p>
            <button
              onClick={() => handleRemove(movie.id)}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};
