import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

import MoreInfo from "./MoreInfo";

export default function Info() {
  const { url_id } = useParams();
  const [data, setData] = useState({});
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(false);

  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [species, setSpecies] = useState([]);
  const [ship, setShip] = useState([]);
  const [vehicle, setVehicle] = useState([]);

  const url = `https://swapi.dev/api/films/${url_id}`;
  useEffect(() => {
    async function getMoreInfo() {
      try {
        let response = await axios.get(url);
        setData(response.data);
        console.log(response.data);
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
        //for each species

        let specieUrls = response.data.species;

        let speciesArray = await Promise.all(
          specieUrls.map(async (url) => {
            let specieResponse = await axios.get(url);
            return specieResponse.data.name;
          })
        );

        // for starships
        let starshipUrls = response.data.starships;
        let starshipArray = await Promise.all(
          starshipUrls.map(async (url) => {
            let starshipResponse =await axios.get(url);
            return starshipResponse.data.name;
          })
        );
        // for starships
        let vehicleUrls = response.data.vehicles;
        let vehicleArray = await Promise.all(
          vehicleUrls.map(async (url) => {
            let vehicleResponse = await axios.get(url);
            return vehicleResponse.data.name;
          })
        );

        setData(response.data);
        setCharacters(charactersArray);
        setPlanets(planetsArray);
        setSpecies(speciesArray);
        setShip(starshipArray);
        setVehicle(vehicleArray);

        console.log(vehicleArray);
        setLoad(false);
      } catch (err) {
        setError(true);
        setLoad(false);
        console.log(err);
      }
    }
    getMoreInfo();
  }, [url]);

  const { title, director, producer, opening_crawl } = data;

  return (
    <div style={{ color: "white", fontSize: "2rem" }}>
      {error ? (
        "failed to load"
      ) : load ? (
        <Loading />
      ) : (
        <MoreInfo
          title={title}
          director={director}
          producer={producer}
          opening_crawl={opening_crawl}
          characters={characters}
          planets={planets}
          species={species}
          ship={ship}
          vehicle={vehicle}
        />
      )}
    </div>
  );
}
