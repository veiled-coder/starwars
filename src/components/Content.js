import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";
import Loading from "./Loading";
import StarWars from "./StarWars";
// import StarWars from "./StarWars";

function Content() {
  const [load, setLoad] = useState(true);
  const [data, setData] = useState();
  const url = "https://swapi.dev/api/films";

  useEffect(() => {
    async function getStarWars() {
      try {
        let response = await axios.get(url);

        setData(response);
        console.log(response);
      } catch (err) {
        console.log(err);
      } finally {
        setLoad(false);
      }
    }
    getStarWars();
  }, [setData, setLoad]);

  return <>{load ? <Loading /> : <StarWars movieLists={data} />}</>;
}

export default Content;

/*
                                                        Axios doesn't return a response object in case of errors, it throws its default error to the catch block. 
                                                        Therefore, errors cannot be checked using response.status or response.ok in the try block. 
                                                        On the other hand, the fetch method returns a response object in case of endpoint errors (not network errors),
                                                        which can be checked in the try block using response.ok or response.status.

                                                      */
