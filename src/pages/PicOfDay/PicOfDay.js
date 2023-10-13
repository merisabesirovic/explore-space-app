import React, { useEffect, useState } from "react";
import axios from "axios";
import GalaxyCard from "../../components/Cards/GalaxyCards/GalaxyCards";
import "./PicOfDay.css";
import ReactPlayer from "react-player/youtube";

const options = {
  method: "GET",
  url: "https://celestial-objects.p.rapidapi.com/galaxies",
  headers: {
    "X-RapidAPI-Key": "b091029213msh6ceebc5d745630cp1ac451jsn490db68234c9",
    "X-RapidAPI-Host": "celestial-objects.p.rapidapi.com",
  },
};

export default function PicOfDay() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(options);
        console.log(response.data);
        const info = await response.data;
        setImages(info);
        console.log(images);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  });

  return (
    <div classnName="picofday">
      <div className="galaxies-container">
        <div>
          <h1 className="mars-title" style={{ paddingLeft: "10px" }}>
            The Enchanting World of Galaxies
          </h1>
          <p className="galaxy-description">
            Galaxies, those mesmerizing cosmic islands, are captivating
            celestial objects scattered throughout the universe. They are vast
            collections of stars, gas, and dust, forming magnificent structures
            that come in various shapes and sizes. From the spiral arms of
            majestic spiral galaxies to the smooth contours of elliptical
            galaxies, each holds its own allure. Irregular galaxies defy
            conformity, boasting chaotic and unique appearances.
          </p>
        </div>
        {images.map((e) => (
          <GalaxyCard name={e.name} image={e.imageUrl} />
        ))}
        <div className="galaxy-player">
          <p className="galaxy-description">
            If you want to learn more about space, checkout this interesting
            documentary about our planet created by Netflix.
          </p>
          <ReactPlayer
            width={440}
            className="galaxy"
            url="https://www.youtube.com/watch?v=cTQ3Ko9ZKg8"
          />
        </div>
        <div>
          <p className="galaxy-description">
            This documentary is about galaxies and you can lear a lot about
            Milky Way, our galaxy, and many others. Also you will learn about
            many things about our Solar System.
          </p>
          <ReactPlayer
            width={440}
            className="galaxy"
            url="https://www.youtube.com/watch?v=wkQuOrsgVGY"
          />
        </div>
      </div>
    </div>
  );
}
