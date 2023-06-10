import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PlanetImages from "./pages/PlanetImages/PlanetImages";
import MarsGenerator from "./pages/MarsGenerator/MarsGenerator";
import MarsGenerator from "./pages/MarsGenerator/MarsGenerator";

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
