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
        <div className="cityButtons">
          <NavLink to="/">HOME</NavLink>
          <ButtonToSetCity setShowButtonToSetCity={setShowButtonToSetCity} />
        </div>
      ) : showWeatherInCity ? (
        <div>
          <div className="menuButtonContainer">
            <button className="menuButton" onClick={handleMenu}>
              MENU
            </button>
          </div>
          <ButtonToSwitchInCity
            showWeatherInCity={showWeatherInCity}
            setShowWeatherInCity={setShowWeatherInCity}
          />
          <ShowCityWeatherData />
        </div>
      ) : (
        <div className="cityWeatherInFiveDays">
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
