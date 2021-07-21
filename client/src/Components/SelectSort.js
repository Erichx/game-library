import React from "react";

export default function SelectSort() {
  return (
    <div>
      <label htmlFor="sort">Sort</label>

      <select name="sort" id="sort">
        <option value="">Select</option>
        <option value="asc">Title (A-Z)</option>
        <option value="desc">Title (Z-A)</option>
        <option value="desc">Date (Newest)</option>
        <option value="desc">Old (Oldest)</option>
      </select>
    </div>
  );
}
