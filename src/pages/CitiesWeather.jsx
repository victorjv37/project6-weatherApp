import { NavLink } from "react-router-dom";
import ButtonToSetCity from "../components/ButtonToSetCity";
import ButtonToSwitchInCity from "../components/ButtonToSwitchInCity";
import ShowCityWeatherData from "../components/ShowCityWeatherData";
import { useState } from "react";
import ShowCityWeatherDataInFiveDays from "../components/ShowCityWeatherDataInFiveDays";

const CitiesWeather = () => {
  const [showWeatherInCity, setShowWeatherInCity] = useState(true);
  const [showButtonToSetCity, setShowButtonToSetCity] = useState(true);

  const handleMenu = () => {
    setShowButtonToSetCity(true);
  };

  return (
    <>
      {showButtonToSetCity ? (
        <div id="setCityButtonsContainer">
          <NavLink id="menuLink" to="/">
            HOME​🏠​
          </NavLink>
          <ButtonToSetCity setShowButtonToSetCity={setShowButtonToSetCity} />
        </div>
      ) : showWeatherInCity ? (
        <div className="container">
          <div  id="menuButtonContainer">
            <button id="menuButton" onClick={handleMenu}>
              CITY MENU🏙️
            </button>
          </div>
          <div id="buttonToSwitchInCity">
            <ButtonToSwitchInCity
              showWeatherInCity={showWeatherInCity}
              setShowWeatherInCity={setShowWeatherInCity}
            />
          </div>
          <ShowCityWeatherData />
        </div>
      ) : (
        <div className="container">
          <ButtonToSwitchInCity
            showWeatherInCity={showWeatherInCity}
            setShowWeatherInCity={setShowWeatherInCity}
          />
          <ShowCityWeatherDataInFiveDays />
        </div>
      )}
    </>
  );
};

export default CitiesWeather;
