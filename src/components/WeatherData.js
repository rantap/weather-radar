import { useState, useEffect } from 'react';
import CurrentWeatherCard from './CurrentWeatherCard';

const WeatherData = ({ location }) => {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);

  const urlBase = 'https://api.openweathermap.org/data/2.5/weather?';
  const apiKey = process.env.REACT_APP_API_KEY;
  
  useEffect(() => {
    const fetchWeatherData = async (location) => {
      try {
        setLoading(true);
        const res = await fetch(
          urlBase +
            `lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=` +
            apiKey,
        );
        const weatherJsonObject = await res.json();
        setWeatherData({
          city: location.city,
          description: weatherJsonObject.weather[0].description,
          temperature: Math.round(weatherJsonObject.main.temp),
          wind: weatherJsonObject.wind.speed,
          humidity: weatherJsonObject.main.humidity,
          icon: weatherJsonObject.weather[0].icon,
          /* precipitation: weatherJsonObject.snow['1h'], */
        });
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    fetchWeatherData(location).catch(console.error);
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading..</p>
      ) : (
        <CurrentWeatherCard
          city={weatherData.city}
          description={weatherData.description}
          temperature={weatherData.temperature}
          wind={weatherData.wind}
          humidity={weatherData.humidity}
          icon={weatherData.icon}
          /* precipitation={weatherData.precipitation} */
        />
      )}
    </div>
  );
};

export default WeatherData;
