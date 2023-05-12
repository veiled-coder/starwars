// import axios from "axios";
// import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/moreinfo.css";

function MoreInfo({
  title,
  director,
  producer,
  opening_crawl,
  characters,
  planets,
}) {
  let character_names = characters.map((character, index) => (
    <ul key={index}>
      <li>{character}</li>
    </ul>
  ));
  let planet_names = planets.map((planet, index) => (
    <ul key={index}>
      <li>{planet}</li>
    </ul>
  ));
  return (
    <div className="more-info">
      <p className="back">
        <NavLink to="/">Back to list</NavLink>
      </p>
      <div className="heading">
        <h2>{title}</h2>
        <p>Director : {director}</p>
        <p>Producer : {producer}</p>
      </div>
      <div className="description">
        <h3>Description</h3>
        <p>{opening_crawl}</p>
      </div>

      <section className="characters">
        <h3>Characters</h3>
        <div className="characters_lists">{character_names}</div>
      </section>
      <section className="planets">
        <h3>Planets</h3>
        <div className="planets_lists">{planet_names}</div>
      </section>
    </div>
  );
}

export default MoreInfo;
