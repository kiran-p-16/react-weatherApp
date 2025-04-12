import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import './WeatherApp.css'

export default function WeatherApp(){
    
    const [weatherInfo,setInfo]=useState({
        city:"Bengaluru",
        feelsLike: 25.17,
        humidity: 54,
        maxTemp: 25.19,
        minTemp: 25.19,
        temp: 25.19,
        weather: "overcast clouds"
    });
    const updateInfo=(newinfo)=>{
        setInfo(newinfo);
    }
    return(
        <div className="WeatherApp">
            <h2>Weather App Widget</h2>
            <SearchBox update={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    );
}