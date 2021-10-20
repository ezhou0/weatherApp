import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';


import Weather from './components/weather_component';

// const location_key = 90025; 

const API_key = process.env.REACT_APP_API_KEY;
export const App = () => {
  
    useEffect(()=>{
        fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/locationKey=37858_PC?apikey=${API_key}`)
              .then(res => res.json())
              // .then(res => console.log(res))
              .then(weatherInfo => {this.setState({weatherInfo: weatherInfo.DailyForecasts})})
    },[]);

      return(
      <div className="App">
        <Weather/>

       {/* {this.state.weatherInfo.map((i, index)=>
        (<div key = {index}> </div>)
       )} */}
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
  
  
  
  
