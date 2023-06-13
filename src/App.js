import "./App.css";
import PlanetImages from "./pages/PlanetImages/PlanetImages";
import MarsGenerator from "./pages/MarsGenerator/MarsGenerator";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      {" "}
      <Navbar />
      <PlanetImages></PlanetImages>
      <MarsGenerator></MarsGenerator>
    </div>
  );
}

export default App;
