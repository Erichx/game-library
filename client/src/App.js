import React, { useEffect, useState } from "react";
import axios from "axios";
import { GamesContext } from "./Context/GamesContext";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Modal from "./Components/Modal";

const App = () => {
  const [request, setRequest] = useState([]);
  const [games, setGames] = useState([]);
  const [modal, setModal] = useState();
  const [sortSelect, setSortSelect] = useState("asc");

  const [notitication, setNotitication] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/games`)
      .then((res) => {
        setGames(res.data);
        setRequest(res.data);
        console.log(res);
      })
      .catch((error) => {
        setNotitication({
          message:
            "Ops... seem's we can't show our games now but, we come back soon you can download our games in google play or the apple store ;)",
        });
      });
  }, []);

  function sorting(values, type) {
    return values.sort((a, b) => {
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
  }

  return (
    <>
      {notitication ? (
        <div className="toast-notification">
          <div className="details">
            <h3 className="title">
              {" "}
              <i class="bi bi-bug"></i> Error
            </h3>
            <div className="subtitle">
              <span>{notitication.message} </span>
            </div>
          </div>
        </div>
      ) : (
        <GamesContext.Provider
          value={{
            games,
            request,
            modal,
            sortSelect,
            setModal,
            setGames,
            setSortSelect,
            sorting,
          }}
        >
          <Header />
          <Content games={games} />
          {modal && <Modal url={modal} setModal={setModal} />}
        </GamesContext.Provider>
      )}
    </>
  );
};

export default App;
