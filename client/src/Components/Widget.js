import React from "react";

export default function Widget(props) {
  const { name, description, type, thumbnail, url, release, tags } = props;
  return (
    <article>
      {name}
      {description}
      {type}
      {thumbnail}
      {url}
      {release}
      {tags}
    </article>
  );
}
