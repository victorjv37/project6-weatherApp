import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

import CitiesWeather from "./pages/CitiesWeather.jsx";

import "./App.css";

import { MyProviderInFiveDays } from "./context/MyWeatherInFiveDaysContext.jsx";
import { MyProvider } from "./context/MyWeatherContext.jsx";
import { CityWeatherContextProvider } from "./context/CityWeatherContext.jsx";
import { CityProviderInFiveDays } from "./context/CityWeatherContextInFiveDays.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyProvider>
      <MyProviderInFiveDays>
        <CityWeatherContextProvider>
          <CityProviderInFiveDays>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<App />} />
                <Route path="/citiesweather" element={<CitiesWeather />} />
                <Route
                  path="*"
                  element={
                    <main>
                      <p>404 - No existe la ruta!</p>
                    </main>
                  }
                ></Route>
              </Routes>
            </BrowserRouter>
          </CityProviderInFiveDays>
        </CityWeatherContextProvider>
      </MyProviderInFiveDays>
    </MyProvider>
  </React.StrictMode>
);
