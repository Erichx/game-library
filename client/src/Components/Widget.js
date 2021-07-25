import React, { useContext } from "react";
import { GamesContext } from "../Context/GamesContext";
export default function Widget(props) {
  const { name, description, type, thumbnail, url, release, tags } = props.game;
  const { setModal } = useContext(GamesContext);
  return (
    <article className="widget">
      <div className="container-thumbnail">
        <div
          className="thumbnail"
          style={{ backgroundImage: `url("${thumbnail}")` }}
          alt={description}
          title={name}
          onClick={() => setModal(url)}
        />
        {tags &&
          tags?.length !== 0 &&
          tags.map((item, index) => {
            return (
              <div
                className={
                  item === "popular" ? "popular tag" : "comming-soon tag"
                }
                key={index}
              >
                {item.toUpperCase()}
              </div>
            );
          })}
      </div>
      <div className="widget-info">
        <p className="title">{name}</p>
        <p>{description}</p>
        <div className="minor-info">
          Game Type:
          <strong> {type}</strong>
        </div>
        <div className="minor-info">
          Release:
          <strong>
            {new Date(release).toLocaleString("en-US", {
              day: "numeric",
              year: "numeric",
              month: "short",
            })}
          </strong>
        </div>
        <button className="try-it" onClick={() => setModal(url)}>
          {" "}
          TRY IT!{" "}
        </button>
      </div>
    </article>
  );
}
