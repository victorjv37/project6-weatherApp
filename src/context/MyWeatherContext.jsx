import { useEffect, useState, createContext } from "react";
import axios from "axios";
import useNavigatorLocation from "../hooks/useNavigatorLocation";

const MyWeatherContext = createContext();

  export const MyProvider = ({ children }) => {
  const apiKey = "594b45ed80701f1277f00b354c2088d1";
  const { myActualLatitude, myActualLongitude } = useNavigatorLocation();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (myActualLatitude && myActualLongitude) {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${myActualLatitude}&lon=${myActualLongitude}&appid=${apiKey}`
          );
          console.log(response)
          const { weather, name } = response.data;
          setData({
            name: name,
            description: weather[0].description,
            main: weather[0].main,
            icon: `http://openweathermap.org/img/w/${weather[0].icon}.png`,
          })
        } catch (error) {
          console.error("Error al obtener datos de la API:", error);
        }
      }
    };
    fetchData();
  }, [myActualLatitude, myActualLongitude]);

  return <MyWeatherContext.Provider value={{ data, myActualLatitude, myActualLongitude }}> {children} </MyWeatherContext.Provider>
};

export default MyWeatherContext;
