import MyWeather from "./pages/MyWeather";

import "./App.css";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <NavLink to="/citiesweather">Cities Weather</NavLink>
      <MyWeather />
    </>
  );
}

export default App;
