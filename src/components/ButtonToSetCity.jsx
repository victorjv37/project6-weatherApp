import cityWeatherContext from "../context/CityWeatherContext";
import { useContext } from "react";

const ButtonToSetCity = ({setShowButtonToSetCity}) => {
  const { setCityName, cityName } = useContext(cityWeatherContext);

  const handleCity = (ev) => {
      setCityName(ev.target.value);
      setShowButtonToSetCity(false)
      console.log(cityName);
  };

  return (
    <div className="buttonContainer">
      <button value="Valencia" onClick={handleCity}>
        Valencia
      </button>
      <button value="Madrid" onClick={handleCity}>
        Madrid
      </button>
      <button value="Barcelona" onClick={handleCity}>
        Barcelona
      </button>
      <button value="Sevilla" onClick={handleCity}>
        Sevilla
      </button>
      <button value="Galicia" onClick={handleCity}>
        Galicia
      </button>
      <button value="Toledo" onClick={handleCity}>
        Toledo
      </button>
    </div>
  );
};

export default ButtonToSetCity;
