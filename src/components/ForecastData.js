import { useState, useEffect } from 'react';
import ForecastCard from './ForecastCard';

const ForecastData = ({ location }) => {
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);

  const urlBase = 'https://api.openweathermap.org/data/2.5/forecast?';
  const apiKey = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    const fetchForecastData = async (location) => {
      try {
        setLoading(true);
        const res = await fetch(
          urlBase +
            `lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=` +
            apiKey,
        );
        const forecastJsonObject = await res.json();
        const newForecast = forecastJsonObject.list.slice(1, 6);
        setForecastData(newForecast);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    fetchForecastData(location).catch(console.error);
  }, []);

  return (
    <div className='forecast-flex'>
      {loading ? (
        <p>Loading..</p>
      ) : (
        forecastData.map((data, index) => (
          <ForecastCard
            datetime={data.dt}
            icon={data.weather[0].icon}
            temperature={data.main.temp}
            wind={data.wind.speed}
            humidity={data.main.humidity}
            precipitation={data.pop}
            key={index}
          />
        ))
      )}
    </div>
  );
};

export default ForecastData;
