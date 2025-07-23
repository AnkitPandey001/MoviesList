import { Link, Route, Routes } from "react-router-dom";
import { WatchList } from "./components/Watchlist";
import { MoviesList } from "./components/MoviesList";

function App() {
  return (
    <>

      <div className="flex justify-center m-6 items-center gap-10 bg-amber-300 p-2 rounded-2xl shadow-md text-white font-semibold text-lg">
        <Link
          to="/"
          className="hover:text-black transition duration-300 ease-in-out"
        >
          Home
        </Link>
        <Link
          to="/wishlist"
          className="hover:text-black transition duration-300 ease-in-out"
        >
          Wishlist
        </Link>
      </div>


      <div className="p-4">
        <Routes>
          <Route path="/wishlist" element={<WatchList />} />
          <Route path="/" element={<MoviesList />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
