import './styles.css';
import { useState } from 'react';

import WeatherData from './components/WeatherData';
import ForecastData from './components/ForecastData';
import Dropdown from './components/Dropdown';

const locations = [
  {
    id: 1,
    city: 'Tampere',
    latitude: 61.4991,
    longitude: 23.7871,
  },
  {
    id: 2,
    city: 'Jyväskylä',
    latitude: 62.2415,
    longitude: 25.7209,
  },
  {
    id: 3,
    city: 'Kuopio',
    latitude: 62.8924,
    longitude: 27.677,
  },
  {
    id: 4,
    city: 'Espoo',
    latitude: 60.25,
    longitude: 24.6667,
  },
];

const App = () => {
  const [selectedLocation, setSelectedLocation] = useState('All');
  const handleChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <div className='App'>
      <div>
        <header className='header'>
          <h1 className='header-title'>Säätutka</h1>
        </header>
      </div>
      <div className='dropdown'>
        <Dropdown
          selectedLocation={selectedLocation}
          handleChange={handleChange}
        />
      </div>
      {/* Map the location array according to the dropdown selection */}
      <div className='city-flex-container'>
        {selectedLocation === 'All'
          ? locations.map((location) => (
              <div className='city-container' key={location.id}>
                <WeatherData location={location} />
                <ForecastData location={location} />
              </div>
            ))
          : locations
              .filter((data) => data.city === selectedLocation)
              .map((location) => (
                <div className='city-container' key={location.id}>
                  <WeatherData location={location} />
                  <ForecastData location={location} />
                </div>
              ))}
      </div>
    </div>
  );
};

export default App;
