import * as moment from 'moment';
import 'moment/locale/en-gb';
const ForecastCard = ({
  datetime,
  temperature,
  wind,
  humidity,
  precipitation,
  icon,
}) => {
  const time = moment.utc(datetime * 1000).format('LT');
  return (
    <div className='forecast-card'>
      <div>
        <p className='forecast-time'>{time}</p>
        <img src={'http://openweathermap.org/img/wn/' + icon + '.png'} />
        <p className='forecast-temperature'>{Math.round(temperature)}°C</p>
      </div>
      <div className='forecast-additional'>
        <p>{wind} m/s</p>
        <p>{humidity} %</p>
        <p>{Math.round(precipitation)} mm</p>
      </div>
    </div>
  );
};

export default ForecastCard;
