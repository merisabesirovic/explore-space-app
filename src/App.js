import "./App.css";
import PlanetImages from "./pages/PlanetImages/PlanetImages";
import MarsGenerator from "./pages/MarsGenerator/MarsGenerator";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import PicOfDay from "./pages/PicOfDay/PicOfDay";

function App() {
  return (
    <div className="App">
      {" "}
      <Navbar />
      <Home />
      <PlanetImages></PlanetImages>
      <MarsGenerator></MarsGenerator>
      <PicOfDay></PicOfDay>
    </div>
  );
}

export default App;
