import "./App.css";
import axios from "axios";
import PlanetImages from "./pages/PlanetImages/PlanetImages";
import MarsGenerator from "./pages/MarsGenerator/MarsGenerator";

// const applicationId = "652b04fe-79e5-449f-8b25-20a9be50f935";
// const applicationSecret =
//   "febd4ed0dbbaa4f9d445f2af6e99d5c4a043a4d2d779bc2ab74ad8b64d158f160412a1426a64bdde24cc83c1564336cb8e74bb90c93853aea5eb5afb37af34e30dff3b4ba2f4fadae96b6f9b0210cbc169cbfdde94b622a01d62ac4efb909170fe5e893e80d985143e63fb4d7c70a95e";

// const authString = btoa(`${applicationId}:${applicationSecret}`);

// const options = {
//   method: "POST",
//   url: "https://astronomy.p.rapidapi.com/api/v2/studio/moon-phase",
//   headers: {
//     "content-type": "application/json",
//     "X-RapidAPI-Key": "b091029213msh6ceebc5d745630cp1ac451jsn490db68234c9",
//     "X-RapidAPI-Host": "astronomy.p.rapidapi.com",
//     Authorization: `Basic ${authString}`,
//   },
//   data: {
//     format: "png",
//     observer: {
//       date: "2020-11-01",
//       latitude: 6.56774,
//       longitude: 79.88956,
//     },
//     style: {
//       backgroundColor: "red",
//       backgroundStyle: "stars",
//       headingColor: "white",
//       moonStyle: "sketch",
//       textColor: "red",
//     },
//     view: {
//       type: "portrait-simple",
//     },
//   },
// };

// axios(options)
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

function App() {
  return (
    <div className="App">
      {" "}
      <PlanetImages></PlanetImages>
      <MarsGenerator></MarsGenerator>
    </div>
  );
}

export default App;
