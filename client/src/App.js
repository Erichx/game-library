import React, { useState } from "react";
import { GamesContext } from "./Context/GamesContext";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Modal from "./Components/Modal";

const App = () => {
  //temporary data

  const [games, setGames] = useState([
    {
      name: "BEATS EX",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida ex turpis, a maximus neque volutpat id.",
      type: "SLOT GAMES",
      thumbnail: "/01.png",
      url: "beat-ex",
      release: "2017-10-12T00:00:00",
      tags: ["Popular"],
    },
    {
      name: "Wild Wild West 2120",
      description:
        "Suspendisse hendrerit diam ac auctor accumsan. Donec blandit metus a diam dictum egestas non non erat.",
      type: "SLOT GAMES",
      thumbnail: "/02.png",
      url: "bacarrat-supreme",
      release: "2021-04-04T00:00:00",
      tags: [],
    },
    {
      name: "Loot or Boot",
      description:
        "Curabitur quis sollicitudin odio. Vivamus varius sapien vitae ex lacinia efficitur. ",
      type: "ARCADE",
      thumbnail: "/03.png",
      url: "/loot-or-boot",
      release: "2022-01-11T00:00:00",
      tags: ["Coming soon"],
    },
  ]);

  return (
    <>
      <GamesContext.Provider value={{ games, setGames }}>
        <Header />
        <Content games={games} />
        <Modal show="" toggle="" url="" />
      </GamesContext.Provider>
    </>
  );
};

export default App;
