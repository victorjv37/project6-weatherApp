import { useContext } from "react";
import  WeatherContext from "../context/MyWeatherContext";

const ShowWeatherData = () => {
  
  const time = new Date().getTime()
  const date = new Date(time).toLocaleDateString()
  
  const { data } = useContext(WeatherContext);

  return (
        <div className="weatherCard">
          <h1>{data.name}</h1>
          <h2>{date}</h2>
          <h2>
            {data.main} <img className="weatherCardImage" src={data.icon} alt="Weather Icon" />
          </h2>
          <h3>{data.description}</h3>
        </div>
  );
};

export default ShowWeatherData;
