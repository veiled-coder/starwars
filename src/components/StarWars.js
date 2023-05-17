import React from "react";
import "../styles/starwars.css";
import { NavLink } from "react-router-dom";

function StarWars({ movieLists }) {
  // let url1 =
  //   "https://finmavis.github.io/swapi-task/static/media/bg-card-1.0c96fd00.png";
  let list = movieLists.data.results;
  console.log(list.length);
  let starwars = list.map((starwar,index) => {
    // console.log(starwar.episode_id);
    return (
      <div className="starwar-box" key={starwar.episode_id}>
        <p className="starwar-box_title"> {starwar.title}</p>
        <p className="starwar-box_date">{starwar.release_date}</p>
        <p className="starwar-box_text">{starwar.opening_crawl}</p>
        <hr className="line" />
        <NavLink to={`/info/${index+1}`}className="starwar-box_link">
          More info
        </NavLink>
      </div>
    );
  });
  // let starwars=movieLists.data.results[1]?
  return (
    <div className="starwars-container">
      <div className="starwars-container_boxes">{starwars}</div>
    </div>
  );
}

export default StarWars;
