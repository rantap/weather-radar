const CurrentWeatherCard = ({
  city,
  description,
  temperature,
  wind,
  humidity,
  /* precipitation, */
  icon,
}) => {
  return (
    <div className='datacard'>
      <div>
        <h2 className='datacard-city'>{city}</h2>
        <p className='datacard-description'>{description}</p>
      </div>
      <div>
        <img src={'http://openweathermap.org/img/wn/' + icon + '@2x.png'} />
        <p className='datacard-temperature'>{temperature} °C</p>
      </div>
      <div className='datacard-additional'>
        <p>Wind: {wind} m/s</p>
        <p>Humidity: {humidity} %</p>
        {/* <p>Precipitation (1 h): {precipitation} mm</p> */}
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
