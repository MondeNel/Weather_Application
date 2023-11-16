import React, { useEffect } from 'react'
import './App.css'
import cold from './assets/cold.jpg'
import Descriptions from './components/Descriptions'

import { getFormattedWeatherData } from './WeatherServices'

function App() {

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData('paris');
      console.log(data)
    }
    fetchWeatherData();
  }, [])



  return (
    <div className='app' style={{ backgroundImage: `url(${cold})` }}>
      <div className="overlay">
        <div className="container">
          <div className="section section__inputs">
            <input type="text" name="city" placeholder="Enter City..." />
            <button>°C</button>
          </div>

          <div className="section section__temperature">
            <div className="icon">
              <h3>London, GB</h3>
              <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="weather icon" />
              <h3>Cloudy</h3>
            </div>
            <div className="temperature">
              <h1>25 °C</h1>
            </div>
          </div>

          {/* bottom description */}
          <Descriptions />
        </div>
      </div>
    </div>
  )
}

export default App
