import React from "react";
import Widget from "./Widget";

export default function Content(props) {
  const { games } = props;
  return (
    <div>
      {games.map((item, index) => {
        return <Widget game={item} key={index} />;
      })}
    </div>
  );
}
