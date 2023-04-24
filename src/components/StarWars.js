import React from "react";
import "../styles/starwars.css";


function StarWars({ movieLists }) {
  // let url1 =
  //   "https://finmavis.github.io/swapi-task/static/media/bg-card-1.0c96fd00.png";
  let list = movieLists.data.results;
  console.log(list);
  let starwars = list.map((starwar) => {
    console.log("url" + starwar.episode_id);
    return (
      <div className="starwar-box" key={starwar.episode_id}>
        <p className="starwar-box_title"> {starwar.title}</p>
        <p className="starwar-box_date">{starwar.release_date}</p>
        <p className="starwar-box_text">{starwar.opening_crawl}</p>
        <hr className="line" />
        <a className="starwar-box_link" href="\">
          More info
        </a>
      </div>
    );
  });
  // let starwars=movieLists.data.results[1]?
  return (
    <div className="starwars-container">
      <p className="starwars-container_logo">
      star wars
      </p>
      <div className="starwars-container_boxes">{starwars}</div>
    </div>
  );
}

export default StarWars;
