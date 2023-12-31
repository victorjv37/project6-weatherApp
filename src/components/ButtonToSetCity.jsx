import cityWeatherContext from "../context/CityWeatherContext";
import { useContext } from "react";

const ButtonToSetCity = ({ setShowButtonToSetCity }) => {
  const { setCityName, cityName } = useContext(cityWeatherContext);

  const handleCity = (ev) => {
    setCityName(ev.target.value);
    setShowButtonToSetCity(false);
    console.log(cityName);
  };

  return (
    <div className="buttonContainer">
      <button
        className="cityButton"
        id="valencia"
        value="Valencia"
        onClick={handleCity}
      >
        <p className="p">Valencia</p>
      </button>
      <button
        className="cityButton"
        id="madrid"
        value="Madrid"
        onClick={handleCity}
      >
        <p className="p">Madrid</p>
      </button>
      <button
        className="cityButton"
        id="barcelona"
        value="Barcelona"
        onClick={handleCity}
      >
        <p className="p">Barcelona</p>
      </button>
      <button
        className="cityButton"
        id="sevilla"
        value="Sevilla"
        onClick={handleCity}
      >
        <p className="p">Sevilla</p>
      </button>
      <button
        className="cityButton"
        id="galicia"
        value="Galicia"
        onClick={handleCity}
      >
        <p className="p">Galicia</p>
      </button>
      <button
        className="cityButton"
        id="toledo"
        value="Toledo"
        onClick={handleCity}
      >
        <p className="p">Toledo</p>
      </button>
    </div>
  );
};

export default ButtonToSetCity;
