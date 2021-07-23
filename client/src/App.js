import React, { useState, useEffect } from "react";
import { GamesContext } from "./Context/GamesContext";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Modal from "./Components/Modal";
const request = [
  {
    name: "BEATS EX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida ex turpis, a maximus neque volutpat id.",
    type: "SLOT GAMES",
    thumbnail: "/01.png",
    url: "beat-ex",
    release: "Mon Oct 31 2021 00:00:00 GMT-0300",
    tags: ["Popular"],
  },
  {
    name: "Wild Wild West 2120",
    description:
      "Suspendisse hendrerit diam ac auctor accumsan. Donec blandit metus a diam dictum egestas non non erat.",
    type: "SLOT GAMES",
    thumbnail: "/02.png",
    url: "bacarrat-supreme",
    release: "Mon Oct 22 2021 00:00:00 GMT-0300",
    tags: [],
  },
  {
    name: "Loot or Boot",
    description:
      "Curabitur quis sollicitudin odio. Vivamus varius sapien vitae ex lacinia efficitur. ",
    type: "ARCADE",
    thumbnail: "/03.png",
    url: "/loot-or-boot",
    release: "Mon Jan 25 2022 00:00:00 GMT-0300",
    tags: ["Coming soon"],
  },
];
const App = () => {
  //temporary data

  const [games, setGames] = useState([]);

  const [sortGames, setSortGames] = useState("");

  useEffect(() => {
    const sortArray = (type) => {
      const sorted = [...request].sort((a, b) => {
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
    <>
      <GamesContext.Provider value={{ games, setGames, setSortGames }}>
        <Header />
        <Content games={games} />
        <Modal show="" toggle="" url="" />
      </GamesContext.Provider>
    </>
  );
};

export default App;
