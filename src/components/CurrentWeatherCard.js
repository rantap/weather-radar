import * as moment from 'moment';
import 'moment/locale/en-gb';

const CurrentWeatherCard = ({
  city,
  description,
  temperature,
  wind,
  humidity,
  precipitation,
  icon,
}) => {
  // Format date and time
  const date = moment().format('MMMM Do');
  const time = moment().format('LT');

  return (
    <div className='datacard'>
      <div className='datacard-upper'>
        <div className='datacard-city-description'>
          <h2 className='datacard-city'>{city}</h2>
          {/* Render description and icon when the props are available */}
          <p className='datacard-description'>
            {description &&
              description.charAt(0).toUpperCase() + description.slice(1)}
          </p>
        </div>
        <div className='icon-container'>
          <img
            src={icon && 'http://openweathermap.org/img/wn/' + icon + '@2x.png'}
          />
          <div className='temperature-center'>
            <p className='datacard-temperature'>{temperature} °C</p>
          </div>
        </div>
      </div>
      <div className='datacard-lower'>
        <div className='datacard-datetime'>
          <br />
          <p className='datacard-date'>{date}</p>
          <p className='datacard-time'>{time}</p>
        </div>
        <div className='datacard-additional'>
          <p>Wind: {wind} m/s</p>
          <p>Humidity: {humidity} %</p>
          <p>Precipitation (3 h): {Math.round(precipitation)} mm</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
