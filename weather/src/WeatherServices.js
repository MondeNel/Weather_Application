const API_KEY = '77669bb58b56717d86c12a5e364c517e'

export const getFormattedWeatherData = async (city, units = 'metric') => {

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    const data = await fetch(URL)
        .then((response) => response.json())
        .then((data) => data);


    const { weather, main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
        wind: { speed },
        sys: { country },
        name,
    } = data;


    const { description, icon } = weather[0];

    return {
        description,
        icon,
        feels_like,
        temp_max,
        temp_min,
        pressure,
        speed,
        country,
        name,
    };
};
