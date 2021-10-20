import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Weather } from './components/weather_component'


// const location_key = 90025; 

const API_key = process.env.REACT_APP_API_KEY;
export const App = () => {
    const [weatherInfo, setWeatherInfo] = useState();

    const twoDigit = (num) =>{
      const stringNum = "" + num;
      //console.log(stringNum);
    
      if (stringNum.length === 1){
        return '0' + stringNum;
      }else{
        return stringNum;
      }
    }

    useEffect(()=>{
        fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/locationKey=37858_PC?apikey=${API_key}`)
              .then(res => res.json())
              // .then(res => console.log(res))
              .then(res => { setWeatherInfo(res.DailyForecasts.map(dailycast => {
                return{
                  minTemp: dailycast.Temperature.Minimum.Value,
                  maxTemp: dailycast.Temperature.Maximum.Value,
                  weatherType: dailycast.Day.IconPhrase,
                  weatherKey: twoDigit(dailycast.Day.Icon),
                } 
              
              }))
            });
    },[]);

    useEffect(()=>{
      // console.log(weatherInfo);
    },[weatherInfo])

      return(
      <div className="App">
        {!!weatherInfo && weatherInfo.map((i,index)=>(
        <div key={index}>
          <Weather minTemp={i.minTemp} maxTemp={i.maxTemp} weatherType={i.weatherType} weatherKey={i.weatherKey}/>
        </div>
        
        ))}

        

      
      </div>
      
    );
}


 
  // getLocation(){
  //   if (navigator.geolocation){
  //     navigator.geolocation.getCurrentPosition(this.getCoordinates);
  //   }else{
  //     alert("Geolocation is not supported on this browser");
  //   }
  // }

  // getCoordinates(position){

  //   this.setState({
  //     lat: position.coords.latitude,
  //     long: position.coords.longitude
  //   })
   

  // }
  
  
  
  
