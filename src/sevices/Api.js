import axios from 'axios';

const weatherUrl = 'https://api.openweathermap.org/data/2.5';
const currentWeatherUrl = `${weatherUrl}/weather`;

const apikey = import.meta.env.VITE_API_KEY ;

export const fetchWeatherByCoords = async (geoData) => {
   if (!geoData?.latitude || !geoData?.longitude){
      return ;
   }
   const response = await axios.get(currentWeatherUrl, { 
      params:{
         lat: geoData.latitude,
         lon: geoData.longitude,
         units: 'metric',
         appid: apikey,
      },
   });

   console.log(response);
   return ({currentWeather: response.data});
}