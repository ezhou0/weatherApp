import React from 'react';


export const Weather = ({minTemp, maxTemp, weatherType, weatherKey}) => {
    return(
        <div className='cast-container'>
            <img alt = {weatherType}src = {`https://developer.accuweather.com/sites/default/files/${weatherKey}-s.png`}/>
            <div>{weatherType}</div>
            <div>Min: {minTemp}/ Max: {maxTemp}</div>
        </div>
    )
};