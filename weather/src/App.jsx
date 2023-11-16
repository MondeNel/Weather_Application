import React, { useEffect, useState } from 'react';
import './App.css';
import coldBg from './assets/cold.jpg';
import hotBg from './assets/hot.jpg';

import Descriptions from './components/Descriptions';

import { getFormattedWeatherData } from './WeatherServices';

/**
 * Main App component responsible for displaying weather information.
 * @component
 */
function App() {
  // State variables
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('metric');
  const [city, setCity] = useState('Cape Town');
  const [bg, setBg] = useState(hotBg);

  /**
   * useEffect hook to fetch weather data and update background.
   * @function
   * @returns {void}
   */
  useEffect(() => {
    /**
     * Fetch weather data and update background based on temperature threshold.
     * @async
     * @function
     * @returns {Promise<void>}
     */
    const fetchWeatherData = async () => {
      try {
        const data = await getFormattedWeatherData(city, units);
        console.log('Weather Data:', data);
        setWeather(data);

        // Dynamic background based on temperature threshold
        const threshold = units === 'metric' ? 20 : 60;
        setBg(data.temp <= threshold ? coldBg : hotBg);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [units, city]);

  /**
   * Event handler for changing temperature units to Celsius.
   * @function
   * @returns {void}
   */
  const handleUnitsClick = () => {
    // Always set units to 'metric' for Celsius
    setUnits('metric');
  };

  /**
   * Event handler for handling Enter key press to update the city.
   * @function
   * @param {KeyboardEvent} e - The keyboard event.
   * @returns {void}
   */
  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur(); // Call blur method to remove focus
    }
  };

  return (
    <div className='app' style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">


        {weather && (
          <div className="container">


            <div className="section section__inputs">
              <input onKeyDown={enterKeyPressed} type="text" name="city" placeholder="Enter City..." />
              <button onClick={handleUnitsClick}>°C</button>
            </div>



            <div className="section section__temperature">
              <div className="icon">
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img src={weather.iconURL} alt="weather icon" />
                <h3>{weather.description}</h3>
              </div>



              <div className="temperature">
                <h1>{`${weather.temp.toFixed()} °C`}</h1>
              </div>
            </div>



            {/* Bottom description */}
            <Descriptions weather={weather} units={units} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
