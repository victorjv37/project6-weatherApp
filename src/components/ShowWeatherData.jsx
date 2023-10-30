import { useContext } from "react";
import  WeatherContext from "../context/useWeatherContext";

const ShowWeatherData = () => {
  const { data, loading } = useContext(WeatherContext);
  console.log(loading)

  return (
    <div>
      {loading ? (
        <p>cargando datos...</p>
      ) : (
        <div className="weatherCard">
          <h1>{data.name.toUpperCase()}</h1>
          <h2>
            {data.main.toUpperCase()} <img className="icon" src={data.icon} alt="Weather Icon" />
          </h2>
          <h3>{data.description.toUpperCase()}</h3>
        </div>
      )}
    </div>
  );
};

export default ShowWeatherData;
