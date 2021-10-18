import React from 'react';



const Weather = () =>{
    return(
        <div className = 'container'>
            <h1>Weather App</h1>
            <div className = 'card'>
                <h1>
                    city, country
                </h1>
                <div>
                    icon
                </div>
                <div>
                    degrees
                </div>
            </div>
        </div>
    );
};

export default Weather;
