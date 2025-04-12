import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./searchBox.css"
import { useState } from 'react';

export default function SearchBox({update}){
    let [city,setCity]=useState("");
    let [err,setErr]=useState(false);
    const API_URL="http://api.openweathermap.org/data/2.5/weather";
    const apiKey = import.meta.env.VITE_API_KEY;
    let getWeatherInfo=async()=>{
        try{
        let response=await fetch(`${API_URL}?q=${city}&appid=${apiKey}&units=metric`);
        let jres=await response.json();
        let res={
            city:city,
            temp: jres.main.temp,
            minTemp:jres.main.temp_min,
            maxTemp:jres.main.temp_max,
            feelsLike:jres.main.feels_like,
            weather:jres.weather[0].description,
            humidity:jres.main.humidity
        };
        console.log(res);
        return res;
        }catch(er){
            throw(er);
        }
    }
    let handleChange=(evt)=>{
        setCity(evt.target.value);
        setErr(false);
    }
    let handleSubmit=async(evt)=>{
        try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo=await getWeatherInfo();
        update(newInfo);
        }catch(er){
            setErr(true);
        }
    }
    return(
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
               <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
               <br /><br />
               <Button variant="contained" type='submit'>Search</Button>
               {err && <p style={{color:'red'}}>No such place Exists!</p>}
            </form>
        </div>
    );
}
