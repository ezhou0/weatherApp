import React from 'react';
import {useState} from 'react';

export const LocationSearch = ({onCityFound}) =>{

    const [zipCode, setZipCode] = useState('');

    const getLocation = (zip) =>{
        // console.log(zip)
       const url = ` http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=${process.env.REACT_APP_API_KEY}&q=${zip}`;
       fetch(url)
        .then(res => res.json())
        .then(res => res.find(l => l.Country.ID === 'US'))
        // .then(res => console.log(res))
        .then(res => 
            
            onCityFound({
            name: res.LocalizedName,
            key: res.Key,
            state: res.AdministrativeArea.ID,
        }))
        setZipCode('');
    };
    


    return(
        <div>
            <input 
                placeholder='Zip Code'
                value = {zipCode}
                onChange = {e => setZipCode(e.target.value)}
            />
            <button onClick={()=>getLocation(zipCode)}>Search</button>
            <button>Locate Me</button>
        </div>
    );
};