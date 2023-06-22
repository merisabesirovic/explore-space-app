import "./App.css";
import PlanetImages from "./pages/PlanetImages/PlanetImages";
import MarsGenerator from "./pages/MarsGenerator/MarsGenerator";
import PicOfDay from "../src/pages/PicOfDay/PicOfDay";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./pages/AboutUs/AboutUs";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {" "}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/PlanetImages" element={<PlanetImages />} />
        <Route path="/MarsGenerator" element={<MarsGenerator />} />
        <Route path="/Galaxies" element={<PicOfDay />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
