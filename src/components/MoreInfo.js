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
  species,
  ship,
  vehicle,
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
  let specie_names = species.map((specie, index) => (
    <ul key={index}>
      <li>{specie}</li>
    </ul>
  ));
 let ship_names = ship.map((ship, index) => (
   <ul key={index}>
     <li>{ship}</li>
   </ul>
 ));
   let vehicle_names = vehicle.map((vehicle, index) => (
     <ul key={index}>
       <li>{vehicle}</li>
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
      <section className="species">
        <h3>Species</h3>
        <div className="species_lists">{specie_names}</div>
      </section>
      <section className="ship">
        <h3>Starships</h3>
        <div className="ship_lists">{ship_names}</div>
      </section>
      <section className="vehicle">
        <h3>Vehicles</h3>
        <div className="vehicle_lists">{vehicle_names}</div>
      </section>
    </div>
  );
}

export default MoreInfo;
