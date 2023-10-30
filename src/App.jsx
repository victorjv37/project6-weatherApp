import './App.css'
import ShowWeatherData from './components/ShowWeatherData'
import {WeatherContext} from './context/useWeatherContext'

function App() {
  return (
    <WeatherContext>
      <ShowWeatherData />
    </WeatherContext>
  )
}

export default App
