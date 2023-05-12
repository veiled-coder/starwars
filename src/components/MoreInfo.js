import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/moreinfo.css";

function MoreInfo({ response }) {
  const { title, director, producer, opening_crawl, characters } = response;
  const [charactersArray, setCharactersArray] = useState([]);
  // const [charactersNames, setCharacterNames] = useState();

  // CHARACTERS API CALL
  useEffect(() => {
    async function getCharacters() {
      let characters_urls = characters;
      try {
        //for each url,make an api call
        let responses = await Promise.all(
          characters_urls.map(async (url) => {
            let response = await axios.get(url);

            return response.data;
          })
        );

        setCharactersArray(responses);
        console.log(responses);
      } catch (err) {
        console.log(err);
      }
    }
    getCharacters();
  }, [characters]);

  let character_names = charactersArray.map((char) => (
    <ul key={char.url}>
      <li>{char.name}</li>
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
    </div>
  );
}

export default MoreInfo;
