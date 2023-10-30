
const ButtonToSwitch = ({setShowWeather, showWeather}) => {
    
    const handleSwitch = () => {
        setShowWeather(!showWeather)
    } 

  return (
    <div id="buttonToSwitch">
        <button onClick={handleSwitch}>
            {showWeather ?
            <p>Time to five days</p> :
            <p>Time Today</p>
            }
        </button>
    </div>
  )
}

export default ButtonToSwitch