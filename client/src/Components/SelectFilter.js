import React, { useContext, useEffect, useState } from "react";

import { GamesContext } from "../Context/GamesContext";

export default function SelectFilter() {
  const { sorting, sortSelect, request, setGames } = useContext(GamesContext);
  const [optionTypes, setOptionTypes] = useState("");

  useEffect(() => {
    setOptionTypes(
      request.reduce(
        (total, actual) => ({
          ...total,
          [actual.type]: total[actual.type] + 1 || 1,
        }),
        {}
      )
    );
  }, [request]);

  function filterAction(type) {
    let filtered;
    if (type === "all") {
      filtered = request;
    } else {
      filtered = request
        .filter((game) => game.type === type)
        .map((filteredGame) => filteredGame);
    }
    setGames(sorting(filtered, sortSelect));
  }

  return (
    <div className="select-container">
      <label htmlFor="type">Game Type</label>

      <select onChange={(e) => filterAction(e.target.value)}>
        <option value="all">All Games</option>
        {Object.values(optionTypes).map((item, index) => {
          return (
            <option value={Object.keys(optionTypes)[index]} key={index}>{`${
              Object.keys(optionTypes)[index]
            } (${item})`}</option>
          );
        })}
      </select>
    </div>
  );
}
