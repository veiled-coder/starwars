import React from "react";
import { GlobeSvg } from "../logo/GlobeSvg.jsx";
import "../styles/loading.css";

function Loading() {
  return (
    <div className="loading-container">
      <GlobeSvg />
    </div>
  );
}

export default Loading;
