import React from "react";

export default function Widget(props) {
  const { name, description, type, thumbnail, url, release, tags } = props.game;
  return (
    <article className="widget">
      <img src={`\\${thumbnail}`} alt={description} title={name} />
      <p>{name}</p>
      <p>{description}</p>
      <p>Game Type: {type}</p>
      <p>{url}</p>
      <p>Release: {release}</p>
      <p>{tags}</p>
    </article>
  );
}
