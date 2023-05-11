import React from "react";
import { GlobeSvg } from "../logo/GlobeSvg.jsx";
import "../styles/loading.css";

function Loading() {
  return (
    <div className="loading-container">
      <p className="starwars-container_logo">star wars</p>
      <GlobeSvg />
    </div>
  );
}

export default Loading;
