import React, { useContext } from "react";

import { GamesContext } from "../Context/GamesContext";

export default function SelectSort() {
  const { games, setGames, setSortSelect, sorting } = useContext(GamesContext);

  function sortAction(type) {
    const sorted = sorting([...games], type);
    setGames(sorted);
    setSortSelect(type);
  }

  return (
    <div className="select-container">
      <label htmlFor="sort">Sort</label>

      <select onChange={(e) => sortAction(e.target.value)}>
        <option value="">Select</option>
        <option value="asc">Title (A-Z)</option>
        <option value="desc">Title (Z-A)</option>
        <option value="newest">Date (Newest)</option>
        <option value="oldest">Old (Oldest)</option>
      </select>
    </div>
  );
}
