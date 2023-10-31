import { createContext, useEffect, useState } from "react";
import axios from "axios";

const cityWeatherContext = createContext();

export const CityWeatherContextProvider = ({children}) => {

  const apiKey = "594b45ed80701f1277f00b354c2088d1";
  const [data, setData] = useState({});
  const [cityName, setCityName] = useState(undefined);

  useEffect(() => {
    if (cityName) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
          );
          const { weather, name } = response.data;
          setData({
            name: name,
            description: weather[0].description,
            main: weather[0].main,
            icon: `http://openweathermap.org/img/w/${weather[0].icon}.png`,
          });
        } catch (error) {
          console.error("Error al obtener datos de la API:", error);
        }
      };
      fetchData();
    }
  }, [cityName]);

  return (
    <cityWeatherContext.Provider value={{ data, setCityName, cityName }}>
      {children}
    </cityWeatherContext.Provider>
  );
};

export default cityWeatherContext;
