
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import SevereColdIcon from '@mui/icons-material/SevereCold';


export default function InfoBox({info}){
    const HOT_URL="https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.webp?a=1&b=1&s=612x612&w=0&k=20&c=DPDwtq156djUSKSd57TR23BmU4vzC8xqolwMkqHCdfU=";
    const COLD_URL="https://media.istockphoto.com/id/868098786/photo/thermometer-on-snow-shows-low-temperatures-zero-low-temperatures-in-degrees-celsius-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=ID6SPra-gNgAYY7F9p_7_eVLgoxZJeD3N95Nu3LOY9I=";
    const RAIN_URL="https://media.istockphoto.com/id/1598584750/photo/howrah-bridge-postcard.jpg?s=2048x2048&w=is&k=20&c=_hsn6_Y3phI7LztX7lmXU3Ri21yJNxVuBFjVjxmS-RA=";;
    return(
    <div className='InfoBox'>
    <div className="cardContainer">
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity>60? RAIN_URL : info.temp >15? HOT_URL : COLD_URL}
          alt="weather image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} {info.humidity>60? <ThunderstormIcon/> : info.temp >15? <SunnyIcon/> : <SevereColdIcon/>}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Minimum Temperature = {info.minTemp}&deg;C</p>
            <p>Maximum Temperature = {info.maxTemp}&deg;C</p>
            <p>Humidity = {info.humidity}&deg;C</p>
            <p>Weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C</p>
          </Typography>
        </CardContent>
    </Card>
    </div>
    </div>
    )
}