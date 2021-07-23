import React, { useContext } from "react";

import { GamesContext } from "../Context/GamesContext";

export default function SelectSort() {
  const { setSortGames } = useContext(GamesContext);

  return (
    <div>
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
