import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Navbar from "./modules/Navbar";
import Sources from "./pages/Sources";
import WaterHeater from "./pages/WaterHeater";
import DuctSealing from "./pages/DuctSealing";
import AirConditioning from "./pages/AirConditioning";
import HeatPump from "./pages/HeatPump";
import FuelCell from "./pages/FuelCell";
import SolarPanel from "./pages/SolarPanel";

function App() {
  return (
    <div className="marginBottom">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/sources" element={<Sources />}></Route>
          <Route
            path="/water-heater"
            element={<WaterHeater></WaterHeater>}
          ></Route>
          <Route
            path="/duct-sealing"
            element={<DuctSealing></DuctSealing>}
          ></Route>
          <Route
            path="/air-conditioning"
            element={<AirConditioning></AirConditioning>}
          ></Route>
          <Route path="/heat-pump" element={<HeatPump></HeatPump>}></Route>
          <Route path="/fuel-cell" element={<FuelCell></FuelCell>}></Route>
          <Route
            path="/solar-panel"
            element={<SolarPanel></SolarPanel>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
