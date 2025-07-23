import { useState } from "react";
import { MoviesData } from "../utils/moviesData";
import { MoviesCard } from "./MoviesCard";

export const MoviesList = () => {
  const [search, setSearch] = useState<string>("");

  const filterData = MoviesData.filter((ele) =>
    ele.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleClick = (id: number) => {
    const movie = MoviesData.find((m) => m.id === id);
    if (!movie) return;

    const existingList = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const isAlreadyAdded = existingList.some(
      (item: any) => item.id === movie.id
    );
    if (!isAlreadyAdded) {
      localStorage.setItem(
        "wishlist",
        JSON.stringify([...existingList, movie])
      );
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-800">🎬 Movies App</h1>
      
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search movies..."
          className="px-4 py-2 w-full max-w-md border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterData.map((ele, index) => (
          <MoviesCard list={ele} key={index} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};
