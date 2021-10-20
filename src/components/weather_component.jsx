import React from 'react';


export const Weather = ({minTemp, maxTemp, weatherType}) => {
    return(
        <div>
            <div>Type: {weatherType}</div>
            <div>TEMP: {minTemp}/{maxTemp}</div>
        </div>
    )
};