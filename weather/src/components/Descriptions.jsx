import React from 'react';
import './Descriptions.css';

// Importing icons from react-icons
import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa";
import { BiHappy } from 'react-icons/bi';
import { MdCompress, MdOutlineWaterDrop } from 'react-icons/md';

// Functional component Descriptions
const Descriptions = ({ units, weather }) => {
    // Determine temperature and wind units based on the selected unit system
    const tempUnit = units === 'metric' ? '°C' : '°F';
    const windUnit = units === 'metric' ? 'm/s' : 'm/h';

    // Array of objects representing different weather cards
    const cards = [
        {
            id: 1,
            icon: <FaArrowDown />,
            title: 'min',
            data: weather.temp_min.toFixed(), // Format temperature data
            unit: tempUnit,
        },
        {
            id: 2,
            icon: <FaArrowUp />,
            title: 'max',
            data: weather.temp_max.toFixed(),
            unit: tempUnit,
        },
        {
            id: 3,
            icon: <BiHappy />,
            title: 'feels like',
            data: weather.feels_like.toFixed(),
            unit: tempUnit,
        },
        {
            id: 4,
            icon: <MdCompress />,
            title: 'pressure',
            data: weather.pressure,
            unit: 'hPa',
        },
        {
            id: 5,
            icon: <MdOutlineWaterDrop />,
            title: 'humidity',
            // Check if humidity data is available, otherwise set to 'N/A'
            data: weather && weather.humidity !== undefined ? weather.humidity : 'N/A',
            unit: '%',
        },
        {
            id: 6,
            icon: <FaArrowDown />,
            title: 'wind speed',
            data: weather.speed.toFixed(), // Format wind speed data
            unit: windUnit,
        },
    ];

    // Render the weather cards
    return (
        <div className="section section__descriptions">
            {cards.map(({ id, icon, title, data, unit }) => (
                <div key={id} className="card">
                    <div className="description__card-icon">
                        {icon}
                        <small>{title}</small>
                    </div>
                    <h2>{`${data} ${unit}`}</h2>
                </div>
            ))}
        </div>
    );
};

// Export the Descriptions component as the default export
export default Descriptions;
