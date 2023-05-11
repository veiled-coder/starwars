import axios from "axios";
import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

export default function Info() {
  const { url_id } = useParams();
  console.log("............info componnet");
  console.log("id is" + url_id);
  const url = `https://swapi.dev/api/films/${url_id}`;

  useEffect(() => {
    try {
      axios.get(url).then((data) => {
        console.log(data);
      });
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <div style={{ color: "white", fontSize: "2rem" }}>
      <NavLink to="/">RETURN HOME </NavLink>
      Info number {url_id}
    </div>
  );
}
