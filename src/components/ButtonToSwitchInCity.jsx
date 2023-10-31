
const ButtonToSwitchInCity = ({setShowWeatherInCity, showWeatherInCity}) => {
    
    const handleSwitch = () => {
        setShowWeatherInCity(!showWeatherInCity)
    } 

  return (
    <div id="buttonToSwitchInCity">
        <button onClick={handleSwitch}>
            {showWeatherInCity ?
            <p>Time to five days</p> :
            <p>Time Today</p>
            }
        </button>
    </div>
  )
}

export default ButtonToSwitchInCity