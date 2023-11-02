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
      <button className='cityButton' id="valencia" value="Valencia" onClick={handleCity}>
        Valencia
      </button>
      <button className='cityButton' id="madrid" value="Madrid" onClick={handleCity}>
        Madrid
      </button>
      <button className='cityButton' id="barcelona" value="Barcelona" onClick={handleCity}>
        Barcelona
      </button>
      <button className='cityButton' id="sevilla" value="Sevilla" onClick={handleCity}>
        Sevilla
      </button>
      <button className='cityButton' id="galicia" value="Galicia" onClick={handleCity}>
        Galicia
      </button>
      <button className='cityButton' id="toledo" value="Toledo" onClick={handleCity}>
        Toledo
      </button>
    </div>
  );
};

export default ButtonToSetCity;
