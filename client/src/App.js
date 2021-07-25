import React, { useEffect, useState } from "react";
import { GamesContext } from "./Context/GamesContext";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Modal from "./Components/Modal";
//temporary data
const request = [
  {
    name: "BEATS EX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida ex turpis, a maximus neque volutpat id.",
    type: "Slot Game",
    thumbnail:
      "https://mlqoms2zxd9u.i.optimole.com/UrZqcRI.dxpv~47ac7/w:1500/h:904/q:90/https://www.onetouch.io/wp-content/uploads/2021/07/OT_BeatsEx_1500x904.jpg",
    url: "https://playmode.onetouch.io/demo/beatex",
    release: "Mon Oct 31 2021 00:00:00 GMT-0300",
    tags: ["popular"],
  },
  {
    name: "Neon 2077",
    description:
      "Pellentesque posuere consequat ornare ex vivamus varius sapiennec pellentesque. ",
    type: "Slot Game",
    thumbnail:
      "https://mlqoms2zxd9u.i.optimole.com/UrZqcRI.dxpv~47ac7/w:1500/h:904/q:90/https://www.onetouch.io/wp-content/uploads/2020/09/1500x904px-OT_FlexingDragons_1500x904.jpg",
    url: "https://playmode.onetouch.io/demo/neon2077",
    release: "Mon Nov 29 2021 00:00:00 GMT-0300",
    tags: ["coming soon"],
  },

  {
    name: "Wild Sorcery",
    description:
      "Vestibulum ante ipsum primis  auctor accumsan in faucibus metus a diam orci luctus et lacinia  ultrices posuere",
    type: "Board Game",
    thumbnail:
      "https://mlqoms2zxd9u.i.optimole.com/UrZqcRI.dxpv~47ac7/w:1500/h:904/q:90/https://www.onetouch.io/wp-content/uploads/2020/08/WildSorcery_1500x904.jpg",
    url: "https://playmode.onetouch.io/demo/wildsorcery",
    release: "Mon Oct 22 2021 00:00:00 GMT-0300",
    tags: [],
  },
  {
    name: "Wild Wild West 2120",
    description:
      "Suspendisse hendrerit diam ac auctor accumsan. Donec blandit metus a diam dictum egestas non non erat.",
    type: "Slot Game",
    thumbnail:
      "https://mlqoms2zxd9u.i.optimole.com/UrZqcRI.dxpv~47ac7/w:1500/h:904/q:90/https://www.onetouch.io/wp-content/uploads/2020/09/Website-FeatureImage.jpg",
    url: "https://playmode.onetouch.io/demo/www2120",
    release: "Mon Oct 22 2021 00:00:00 GMT-0300",
    tags: [],
  },
  {
    name: "Loot or Boot",
    description:
      "Curabitur quis sollicitudin odio. Vivamus diam orci luctus varius sapien vitae ex lacinia efficitur. ",
    type: "Arcade",
    thumbnail:
      "https://mlqoms2zxd9u.i.optimole.com/UrZqcRI.dxpv~47ac7/w:1500/h:904/q:90/https://www.onetouch.io/wp-content/uploads/2021/03/1500x904px-OT_LootOrBoot_1500x904.jpg",
    url: "https://playmode.onetouch.io/demo/loot-or-boot/",
    release: "Mon Jan 25 2022 00:00:00 GMT-0300",
    tags: ["coming soon"],
  },
  {
    name: "FLEXING DRAGONS",
    description:
      " Duis posuere consequat ornare varius sapien vitae ex  ex dui eu vulputate convallis",
    type: "Arcade",
    thumbnail:
      "https://mlqoms2zxd9u.i.optimole.com/UrZqcRI.dxpv~47ac7/w:1500/h:904/q:90/https://www.onetouch.io/wp-content/uploads/2020/09/1500x904px-OT_FlexingDragons_1500x904.jpg",
    url: "https://playmode.onetouch.io/demo/flexing-dragons",
    release: "Mon Feb 10 2018 00:00:00 GMT-0300",
    tags: [],
  },
];
const App = () => {
  const [games, setGames] = useState([]);
  const [modal, setModal] = useState();

  useEffect(() => {
    setGames(request);
  }, []);

  return (
    <>
      <GamesContext.Provider
        value={{
          games,
          request,
          modal,
          setModal,
          setGames,
        }}
      >
        <Header />
        <Content games={games} />
        {modal && <Modal url={modal} setModal={setModal} />}
      </GamesContext.Provider>
    </>
  );
};

export default App;
