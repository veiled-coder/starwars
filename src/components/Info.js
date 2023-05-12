import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

import MoreInfo from "./MoreInfo";

export default function Info() {
  const { url_id } = useParams();
  const [data, setData] = useState("");
  const [load, setLoad] = useState(true);

  const url = `https://swapi.dev/api/films/${url_id}`;
  useEffect(() => {
    async function getMoreInfo() {
      try {
        let response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoad(false)
      }
    }
    getMoreInfo();
  }, [url]);

  return (
    <div style={{ color: "white", fontSize: "2rem" }}>
      {load ? <Loading /> : <MoreInfo response={data} />}
    </div>
  );
}
