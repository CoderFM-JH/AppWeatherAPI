import axios from 'axios';

const weatherUrl = 'https://api.openweathermap.org/data/2.5';
const currentWeatherUrl = `${weatherUrl}/weather`;
const forecastWeatherUrl = `${weatherUrl}/forecast`;

const apikey = import.meta.env.VITE_API_KEY ;
// const { data, error, isLoading } = useQuery(["weather", coords], fetchWeatherData);

export const fetchWeatherByCoords = async (geoData) => {
   if (!geoData?.latitude || !geoData?.longitude){
      return ;
   }
   const params = {
         lat: geoData.latitude,
         lon: geoData.longitude,
         units: 'metric',
         appid: apikey,
      };
   // const response = await axios.get(currentWeatherUrl, { 
   // });
   const [curent, forecast] = await Promise.all([
      axios.get(currentWeatherUrl, {params}),
      axios.get(forecastWeatherUrl, {params}),
   ]); 

   return ({currentWeather: curent.data, forecast: forecast.data});
}


export const fetchWeatherByCity = async (searchQuery) => {
   if (!searchQuery){
      return ;
   }
   const params = {
      q: searchQuery,
      units: 'metric',
      appid: apikey,
   }
   const [curent, forecast] = await Promise.all([
      axios.get(currentWeatherUrl, {params}),
      axios.get(forecastWeatherUrl, {params}),
   ]); 
   // console.log(response);
   return ({currentWeather: curent.data, forecast: forecast.data});
}

