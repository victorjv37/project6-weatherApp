
const ButtonToSwitch = ({setShowWeather, showWeather}) => {
    
    const handleSwitch = () => {
        setShowWeather(!showWeather)
    } 

  return (
    <div className="button">
        <button onClick={handleSwitch}>
            {showWeather ?
            <p>☔TIME🔜​</p> :
            <p>TODAY☔</p>
            }
        </button>
    </div>
  )
}

export default ButtonToSwitch