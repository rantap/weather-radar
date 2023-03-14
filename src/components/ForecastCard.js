const ForecastCard = ({
  datetime,
  temperature,
  wind,
  humidity,
  precipitation,
  icon,
}) => {
  return (
    <div className='forecast-card'>
      <div>
        <p className='forecast-time'>12:00</p>
        <img src={'http://openweathermap.org/img/wn/' + icon + '.png'} />
        <p className='forecast-temperature'>{Math.round(temperature)}°C</p>
      </div>
      <div className='forecast-additional'>
        <p>{wind} m/s</p>
        <p>{humidity} %</p>
        <p>{precipitation} mm</p>
      </div>
    </div>
  );
};

export default ForecastCard;
