import { useEffect, useState } from "react";
import type { MoviesDataTypesProps } from "../utils/moviesData";

type Props = {
  list: MoviesDataTypesProps;
  handleClick: (id: number) => void;
};

export const MoviesCard = ({ list, handleClick }: Props) => {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const existingList = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const isAlreadyAdded = existingList.some(
      (item: any) => item.id === list.id
    );
    if (isAlreadyAdded) {
      setFlag(true);
    }
  }, []);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        🎬 Title: {list.title}
      </h2>
      <p className="text-gray-600 mb-1">🎭 Genre: {list.genre}</p>
      <p className="text-gray-600 mb-1">📅 Year: {list.year}</p>
      <p className="text-gray-600 mb-1">🎬 Director: {list.director}</p>
      <p className="text-gray-600 mb-3">
        ⭐ Rating: {list.rating} | ⏱ Duration: {list.duration}
      </p>

      <button
        onClick={() => handleClick(list.id)}
        className={`px-4 py-2 rounded font-medium cursor-pointer ${
          flag
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
        disabled={flag}
      >
        {flag ? "Already Added" : "Add to Wishlist"}
      </button>
    </div>
  );
};
