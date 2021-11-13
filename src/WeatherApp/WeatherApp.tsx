import React, { useEffect, useState } from "react";
import WeatherInfo from './WeatherComponent/WeatherInfo';




export default function WeatherApp() {

  const [lat, setLat] = useState<any>([]);
  const [long, setLong] = useState<any>([]);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])

  return (
    <div className="WeatherApp">
      {(typeof data.main != 'undefined') ? (
        <div >
          <button>&#176;F / &#176;C</button><br/><br/>
          <WeatherInfo weatherData={data}/>
        </div>
        
      ): (
        <div >Loading . . .</div>
      )}
      
    </div>
  );
}