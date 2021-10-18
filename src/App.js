import React from 'react';
// import logo from './logo.svg';
import './App.css';


import Weather from './components/weather_component';

// const location_key = 90025; 
const API_key = process.env.REACT_APP_API_KEY;

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      lat: undefined,
      long: undefined
    };
   
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
     this.getWeather();
  }


  getLocation(){
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.getCoordinates);
    }else{
      alert("Geolocation is not supported on this browser");
    }
  }

  getCoordinates(position){

    this.setState({
      lat: position.coords.latitude,
      long: position.coords.longitude
    })
   

  }

  getWeather = async() => {
    if(this.state.lat !== undefined &&this.state.long !== undefined){
    
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/find?lat=${this.state.lat}&lon=${this.state.long}&cnt=1&&appid=${API_key}`)
    const response = await api_call.json();

    console.log(response);
  }
    
  }
  
  render(){
    return(
      <div className="App">
        <Weather/>
      </div>
    );
  }
}

export default App;
