import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

import MoreInfo from "./MoreInfo";

export default function Info() {
  const { url_id } = useParams();
  const [data, setData] = useState({});
  const [load, setLoad] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);

  const url = `https://swapi.dev/api/films/${url_id}`;
  useEffect(() => {
    async function getMoreInfo() {
      try {
        let response = await axios.get(url);
        setData(response.data);
        //for each character url,make an api call
        let characters_urls = response.data.characters;
        let charactersArray = await Promise.all(
          characters_urls.map(async (url) => {
            let CharResponse = await axios.get(url);
            return CharResponse.data.name;
          })
        );

        //for each planet url,make an api call
        let planetUrls = response.data.planets;
        let planetsArray = await Promise.all(
          planetUrls.map(async (planetUrl) => {
            let planetResponse = await axios.get(planetUrl);

            return planetResponse.data.name; //Map will return an array of individual url data
          })
        );

        setData(response.data);
        setCharacters(charactersArray);
        setPlanets(planetsArray);
        setLoad(false);
      } catch (err) {
        console.log(err);
      }
    }
    getMoreInfo();
  }, [url]);

  const { title, director, producer, opening_crawl } = data;

  return (
    <div style={{ color: "white", fontSize: "2rem" }}>
      {load ? (
        <Loading />
      ) : (
        <MoreInfo
          title={title}
          director={director}
          producer={producer}
          opening_crawl={opening_crawl}
          characters={characters}
          planets={planets}
        />
      )}
    </div>
  );
}
