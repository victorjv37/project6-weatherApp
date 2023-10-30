import { useState } from "react";
import "./App.css";
import ButtonToSwitch from "./components/ButtonToSwitch";
import ShowWeatherData from "./components/ShowWeatherData";
import ShowWeatherDataInFiveDays from "./components/ShowWeatherDataInFiveDays";
import { MyProvider } from "./context/WeatherContext";
import { MyProviderInFiveDays } from "./context/WeatherInFiveDaysContext";

function App() {

  const [showWeather, setShowWeather] = useState(true);

  return (
    <MyProviderInFiveDays>
      <MyProvider>
        <ButtonToSwitch showWeather={showWeather} setShowWeather={setShowWeather} />
        {showWeather ? <ShowWeatherData /> : <ShowWeatherDataInFiveDays />}
      </MyProvider>
    </MyProviderInFiveDays>
  );
}

export default App;
