import "./App.css";
import PlanetImages from "./pages/PlanetImages/PlanetImages";
import MarsGenerator from "./pages/MarsGenerator/MarsGenerator";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      {" "}
      <Navbar />
      <Home />
      <PlanetImages></PlanetImages>
      <MarsGenerator></MarsGenerator>
    </div>
  );
}

export default App;
