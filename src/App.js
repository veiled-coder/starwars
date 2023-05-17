import "./index.css";

import Content from "./components/Content";
import { Route, Routes } from "react-router-dom";
import Info from "./components/Info.js";
import "../src/App.css"

function App() {
  return (
    <>
      <p className="starwars-container_logo">star wars</p>
      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/info/:url_id" element={<Info />} />
      </Routes>
    </>
  );
}

export default App;
