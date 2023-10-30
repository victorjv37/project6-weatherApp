import { useContext } from "react";
import WeatherInFiveDaysContext from "../context/WeatherInFiveDaysContext";
const ShowWeatherDataInFiveDays = () => {
  const { data, loading } = useContext(WeatherInFiveDaysContext);

  const weatherCards = [...Array(6)].map((_, index) => (
    <div className="weatherCardInFiveDays" key={index}>
      <h2>{data[`date${index}`]}</h2>
      <h2>
        {data[`main${index}`]}{" "}
        <img
          className="weatherCardInFiveDaysImage"
          src={data[`icon${index}`]}
        />
      </h2>
      <h3>{data[`description${index}`]}</h3>
    </div>
  ));

  return (
    <div>
      {loading ? (
        <p>cargando datos...</p>
      ) : (
        <>
            <h1>{data.name}</h1>
            {weatherCards}
        </>
      )}
    </div>
  );
};

export default ShowWeatherDataInFiveDays;
