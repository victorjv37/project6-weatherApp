import { useEffect, useState, createContext } from "react";
import axios from "axios";
import useNavigatorLocation from "../hooks/useNavigatorLocation";

const WeatherInFiveDaysContext = createContext();

export const MyProviderInFiveDays = ({ children }) => {
  const apiKey = "594b45ed80701f1277f00b354c2088d1";
  const { myActualLatitude, myActualLongitude, loading } =
    useNavigatorLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (myActualLatitude && myActualLongitude) {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${myActualLatitude}&lon=${myActualLongitude}&appid=${apiKey}`
          );

          const data1 = response.data.list[0];
          const data2 = response.data.list[7];
          const data3 = response.data.list[15];
          const data4 = response.data.list[23];
          const data5 = response.data.list[31];
          const data6 = response.data.list[39];
          const name = response.data.city.name;
          const dataArray = [data1, data2, data3, data4, data5, data6];
          let updatedData = {};

          dataArray.map((currentData, index) => {
            updatedData = {
              ...updatedData,
              name: name,
              [`main${index}`]: currentData.weather[0].main,
              [`date${index}`]: currentData.dt_txt,
              [`description${index}`]: currentData.weather[0].description,
              [`icon${index}`]: `http://openweathermap.org/img/w/${currentData.weather[0].icon}.png`,
            };
          });
          setData(updatedData, name);
        } catch (error) {
          console.error("Error al obtener datos de la API:", error);
        }
      }
    };
    fetchData();
  }, [myActualLatitude, myActualLongitude]);

  return (
    <WeatherInFiveDaysContext.Provider value={{ data, loading }}>
      {children}
    </WeatherInFiveDaysContext.Provider>
  );
};

export default WeatherInFiveDaysContext;
