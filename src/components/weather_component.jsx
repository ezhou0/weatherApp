import React from 'react';


export const Weather = ({minTemp, maxTemp, weatherType, weatherKey}) => {
    return(
        <div class='cast-container'>
            <img alt = {weatherType}src = {`https://developer.accuweather.com/sites/default/files/${weatherKey}-s.png`}/>
            <div>Type: {weatherType}</div>
            <div>TEMP: {minTemp}/{maxTemp}</div>
        </div>
    )
};