import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PlanetImages from "./pages/PlanetImages/PlanetImages";
import MarsGenerator from "./pages/MarsGenerator/MarsGenerator";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./pages/AboutUs/AboutUs";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {" "}
      <Navbar/>
      <Routes>
      <Route  path="/AboutUs" element={<AboutUs/>}/>
      <Route  path="/PlanetImages" element={<PlanetImages/>}/>
      <Route  path="/MarsGenerator" element={<MarsGenerator/>}/>
      </Routes>
    </div>
  );
}

export default App;
