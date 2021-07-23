import React from "react";

export default function Widget(props) {
  const { name, description, type, thumbnail, url, release, tags } = props.game;
  return (
    <article className="widget">
      <div className="container-thumbnail">
        <div
          className="thumbnail"
          style={{ backgroundImage: `url("${thumbnail}")` }}
          alt={description}
          title={name}
        />
        {tags.length !== 0 &&
          tags.map((item, index) => {
            return (
              <div
                className={
                  item === "popular" ? "popular tag" : "comming-soon tag"
                }
              >
                {item.toUpperCase()}
              </div>
            );
          })}
      </div>
      <div className="widget-info">
        <p class="title">{name}</p>
        <p>{description}</p>
        <p>
          Game Type <br />
          <strong> {type}</strong>
        </p>
        <p>{url}</p>
        <p>Release: {release}</p>
      </div>
    </article>
  );
}
