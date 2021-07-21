import React from "react";

import Header from "./Components/Header";
import Content from "./Components/Content";

const App = () => {
  //temporary data
  const games = [
    {
      name: "BEATS EX",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida ex turpis, a maximus neque volutpat id.",
      type: "SLOT GAMES",
      thumbnail: "/01.png",
      url: "beat-ex",
      release: "",
      tags: ["android", "windows"],
    },
    {
      name: "BACCARAT SUPREME",
      description:
        "Suspendisse hendrerit diam ac auctor accumsan. Donec blandit metus a diam dictum egestas non non erat.",
      type: "TABLE GAMES",
      thumbnail: "/02.png",
      url: "bacarrat-supreme",
      release: "",
      tags: ["android", "html", "ios"],
    },
    {
      name: "LOOT OR BOOT",
      description:
        "Curabitur quis sollicitudin odio. Vivamus varius sapien vitae ex lacinia efficitur. ",
      type: "ARCADE",
      thumbnail: "/03.png",
      url: "/loot-or-boot",
      release: "",
      tags: ["android", "html", "flash", "ios"],
    },
  ];

  return (
    <>
      <Header />
      <Content />
    </>
  );
};

export default App;
