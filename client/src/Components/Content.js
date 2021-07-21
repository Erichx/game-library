import React from "react";
import Widget from "./Widget";

export default function Content(props) {
  const { games } = props;
  return (
    <div className="content">
      {games.map((item, index) => {
        return <Widget game={item} key={index} />;
      })}
    </div>
  );
}
