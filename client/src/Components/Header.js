import React from "react";

import SelectSort from "./SelectSort";
import SelectType from "./SelectType";

export default function Header() {
  return (
    <div className="header">
      <SelectSort />
      <SelectType />
    </div>
  );
}
