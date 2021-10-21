import React from 'react';


export const Weather = ({minTemp, maxTemp, weatherType, weatherKey, dayOfWeek}) => {
    return(
        <div className='cast-container'>
            <h3>{dayOfWeek}</h3>
            <img alt = {weatherType}src = {`https://developer.accuweather.com/sites/default/files/${weatherKey}-s.png`}/>
            <div>{weatherType}</div>
            <div>Min: {minTemp}/ Max: {maxTemp}</div>
        </div>
    )
};