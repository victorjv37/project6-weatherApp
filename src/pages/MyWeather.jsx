import { useState } from "react";
import ShowWeatherDataInFiveDays from "../components/ShowWeatherDataInFiveDays";
import ShowWeatherData from "../components/ShowWeatherData";
import ButtonToSwitch from "../components/ButtonToSwitch";

const MyWeather = () => {
  const [showWeather, setShowWeather] = useState(true);

  return (
    <>
      <ButtonToSwitch
        showWeather={showWeather}
        setShowWeather={setShowWeather}
      />
      {showWeather ? <ShowWeatherData /> : <ShowWeatherDataInFiveDays />}
    </>
  );
};

export default MyWeather;
