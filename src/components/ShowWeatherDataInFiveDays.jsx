import { useContext } from "react";
import WeatherInFiveDaysContext from "../context/MyWeatherInFiveDaysContext";
const ShowWeatherDataInFiveDays = () => {
  const { data } = useContext(WeatherInFiveDaysContext);

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
      <h2>{data[`description${index}`]}</h2>
    </div>
  ));

  return (
    <div className="weatherCardInFiveDaysContainer">
        <>
            <h1>{data.name}</h1>
            {weatherCards}
        </>
    </div>
  );
};

export default ShowWeatherDataInFiveDays;
