import React from "react";

import SelectSort from "./SelectSort";
import SelectFilter from "./SelectFilter";

export default function Header() {
  return (
    <div className="header">
      <SelectSort />
      <SelectFilter />
    </div>
  );
}
