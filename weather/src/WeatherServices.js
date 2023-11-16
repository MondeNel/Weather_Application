const API_KEY = '77669bb58b56717d86c12a5e364c517e';

export const makeIconURL = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`;

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

    if (Array.isArray(weather) && weather.length > 0) {
        const { description, icon } = weather[0];

        // Check if icon is available before using it
        const iconURL = icon ? makeIconURL(icon) : null;

        return {
            description,
            iconURL,
            temp,
            feels_like,
            temp_max,
            temp_min,
            pressure,
            humidity,
            speed,
            country,
            name,
        };
    }

    // Return null or handle the case when weather data is not available
    return null;
};
