import React, { useContext, useEffect, useState } from "react";

import { GamesContext } from "../Context/GamesContext";

export default function SelectSort() {
  const { games, setGames } = useContext(GamesContext);

  const [sortGames, setSortGames] = useState("");

  useEffect(() => {
    const sortArray = (type) => {
      const sorted = [...games].sort((a, b) => {
        switch (type) {
          case "asc":
            return a.name.localeCompare(b.name);
          case "desc":
            return b.name.localeCompare(a.name);
          case "newest":
            return new Date(b.release) - new Date(a.release);
          case "oldest":
            return new Date(a.release) - new Date(b.release);
          default:
            return null;
        }
      });
      setGames(sorted);
    };

    sortArray(sortGames);
  }, [sortGames]);

  return (
    <div className="select-container">
      <label htmlFor="sort">Sort</label>

      <select onChange={(e) => setSortGames(e.target.value)}>
        <option value="">Select</option>
        <option value="asc">Title (A-Z)</option>
        <option value="desc">Title (Z-A)</option>
        <option value="newest">Date (Newest)</option>
        <option value="oldest">Old (Oldest)</option>
      </select>
    </div>
  );
}
