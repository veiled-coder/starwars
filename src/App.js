import "./index.css";

import Content from "./components/Content";
import { Route, Routes } from "react-router-dom";
import Info from "./components/Info.js";

function App() {
  return (
    <>

     
      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/info/:url_id" element={<Info />} />
      </Routes>
    </>
  );
}

export default App;
