import React from "react";

export default function SelectType() {
  return (
    <div className="select-container">
      <label htmlFor="type">Game Type</label>

      <select name="type" id="type">
        <option value="all">All Games</option>
        <option value="test">test</option>
      </select>
    </div>
  );
}
