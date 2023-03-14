import { useState, useEffect } from 'react';
import ForecastCard from './ForecastCard';

const ForecastData = ({ location }) => {
  const [forecastData, setForecastData] = useState([]);

  const urlBase = 'https://api.openweathermap.org/data/2.5/forecast?';
  const apiKey = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    const fetchForecastData = async (location) => {
      try {
        const res = await fetch(
          urlBase +
            `lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=` +
            apiKey,
        );
        const forecastJsonObject = await res.json();
        const newState = forecastJsonObject.list.slice(1, 6);
        setForecastData(newState);
        console.log(forecastData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchForecastData(location).catch(console.error);
  }, []);
  console.log(forecastData);

  return (
    <div className='forecast-flex'>
      {forecastData.map((data, index) => (
        <ForecastCard
          datetime={data.dt}
          icon={data.weather[0].icon}
          temperature={data.main.temp}
          wind={data.wind.speed}
          humidity={data.main.humidity}
          precipitation={data[5]}
          key={index}
        />
      ))}
    </div>
  );
};

export default ForecastData;
