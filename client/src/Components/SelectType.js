import React from "react";

export default function SelectType() {
  return (
    <div>
      <label htmlFor="type">Game Type</label>

      <select name="type" id="type">
        <option value="all">All Games</option>
        <option value="test">test</option>
      </select>
    </div>
  );
}
