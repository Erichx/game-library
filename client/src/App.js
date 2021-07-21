import React, { useState } from "react";

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
      release: "",
      tags: ["Popular"],
    },
    {
      name: "BACCARAT SUPREME",
      description:
        "Suspendisse hendrerit diam ac auctor accumsan. Donec blandit metus a diam dictum egestas non non erat.",
      type: "TABLE GAMES",
      thumbnail: "/02.png",
      url: "bacarrat-supreme",
      release: "",
      tags: ["Coming soon", "Popular"],
    },
    {
      name: "LOOT OR BOOT",
      description:
        "Curabitur quis sollicitudin odio. Vivamus varius sapien vitae ex lacinia efficitur. ",
      type: "ARCADE",
      thumbnail: "/03.png",
      url: "/loot-or-boot",
      release: "",
      tags: ["Coming soon"],
    },
  ]);

  return (
    <>
      <Header />
      <Content games={games} />
      <Modal show="" toggle="" url="" />
    </>
  );
};

export default App;
