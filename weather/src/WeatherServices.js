const API_KEY = '77669bb58b56717d86c12a5e364c517e'

export const getFormattedWeatherData = async (city, units = 'metric') => {

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    const data = await fetch(URL)
        .then((response) => response.json())
        .then((data) => data);

    console.log(data);
}