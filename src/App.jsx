import MyWeather from "./pages/MyWeather";

import { NavLink } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <div className="link"><NavLink to="/citiesweather">​CITY MENU🏙️​</NavLink></div>
      <MyWeather />
    </div>
  );
}

export default App;
