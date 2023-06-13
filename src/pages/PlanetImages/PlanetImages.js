import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PlanetImages.css";
import PlanetCard from "../../components/Cards/PlanetCards/PlanetCard";

const options = {
  method: "GET",
  url: "https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/",
  headers: {
    "X-RapidAPI-Key": "b091029213msh6ceebc5d745630cp1ac451jsn490db68234c9",
    "X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com",
  },
};

const PlanetImages = () => {
  const [allData, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(options);
        const info = await response.data;
        setData(info);
        // console.log(allData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg">
      <h1
        className="mars-title"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.459)" }}
      >
        Journey Through the Solar System: Exploring Our Planetary Neighbors
      </h1>
      <div className="planet-image-container">
        {allData.length &&
          allData.map((e) => (
            <PlanetCard
              key={e.planetOrder}
              name={e.name}
              image={e.imgSrc.img}
              desc={e.imgSrc.imgDescription}
              wikiLink={e.wikiLink}
            />
          ))}
      </div>
    </div>
  );
};

export default PlanetImages;
