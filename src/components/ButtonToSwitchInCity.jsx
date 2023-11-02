const ButtonToSwitchInCity = ({ setShowWeatherInCity, showWeatherInCity }) => {
  const handleSwitch = () => {
    setShowWeatherInCity(!showWeatherInCity);
  };

  return (
    <>
      {showWeatherInCity ? (
        <button onClick={handleSwitch}>
          <p>☔TIME🔜</p>
        </button>
      ) : (
        <div id="timeTodayCityButtonSwitcherContainer">
          <button onClick={handleSwitch}>
            <p>TODAY☔</p>
          </button>
        </div>
      )}
    </>
  );
};

export default ButtonToSwitchInCity;
