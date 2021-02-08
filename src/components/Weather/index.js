import { useState, useEffect } from 'react';
import { getWeather } from 'utils/services';
import './weather.css';
const Weather = (props) => {

  const [weatherIcon, setWeatherIcon] = useState(false);
  const { city, isReady} = props;
  useEffect(() => {
    async function handleRequest (cityWeather) {
      const data = await getWeather(cityWeather);
      if (data.cod === 200 && data.weather.length > 0) {
        setWeatherIcon(`${process.env.REACT_APP_ICON_OPENWEATHER}/${data.weather[0]?.icon}.png`)
        isReady(true);
      }
    }
    handleRequest(city)
  }, [city, isReady]);


  return (
    <>
      {weatherIcon && <div className="weather"><img src={weatherIcon} alt="Weather status" /></div>}
    </>
  )
}

export default Weather;