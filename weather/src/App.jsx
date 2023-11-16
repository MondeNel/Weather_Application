import React, { useEffect, useState } from 'react'
import './App.css'
import cold from './assets/cold.jpg'
import Descriptions from './components/Descriptions'

import { getFormattedWeatherData } from './WeatherServices'

function App() {

  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData('paris');
      console.log('Weather Data:', data);
      setWeather(data);
    }
    fetchWeatherData();
  }, [])



  return (
    <div className='app' style={{ backgroundImage: `url(${cold})` }}>
      <div className="overlay">

        {
          weather && (

            <div className="container">
              <div className="section section__inputs">
                <input type="text" name="city" placeholder="Enter City..." />
                <button>°C</button>
              </div>

              <div className="section section__temperature">

                <div className="icon">
                  <h3>{`${weather.name}, ${weather.country}`}</h3>
                  <img src={weather.iconURL} alt="weather icon" />
                  <h3>{weather.description}</h3>
                </div>


                <div className="temperature">
                  <h1>25 °C</h1>
                </div>
              </div>

              {/* bottom description */}
              <Descriptions />
            </div>

          )
        }


      </div>
    </div >
  )
}

export default App
