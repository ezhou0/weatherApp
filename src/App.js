import React from 'react';
// import logo from './logo.svg';
import './App.css';


import Weather from './components/weather_component';

 
const API_key = process.env.REACT_APP_API_KEY;

class App extends React.Component{
  constructor(){
    super();
    this.state = {};
    this.getWeather();
  }

  getWeather = async() => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=${API_key}`)
    const response = await api_call.json();
    console.log(response);
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
