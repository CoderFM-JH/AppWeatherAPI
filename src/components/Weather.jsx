import UseGeolocation from "../hooks/UseGeolocation";
import {UseFetchWeather} from '../hooks/UseFetchWeather'; 
import { useState } from "react";
import {WeatherCard} from "./WeatherCard";

export default function Weather() {
   const  {loading, error, data: geoData} = UseGeolocation();

   const [city, setCity] = useState('');

   const [searchQuery, setSearchQuery] = useState('');

   const {
      data, 
      error: apiError, 
      isLoading: apiLoading,
   } = UseFetchWeather(geoData, searchQuery);

   if (loading) {
      return(
         <>
            <p className="text-blue-500 text-lg text-semibold "> Loading ... </p>
         </>
      );
   }

   if (error) {
      return (
         <>
            <p className="text-red-500 text-lg text-semibold "> Error: {error.message} </p>
         </>
      );
   }   

   const {currentWeather, forecast} = data || {};

   const handleSearch = (e) => {
      e.preventDefault();
      if (city.trim()) {
         console.log('city = ', city);
         setSearchQuery(city.trim());
      }
   }

   return( 
      <>
      {error && <p> {error.message} </p> }
      {apiError && <p> {apiError.message} </p> }
         <div className="bg-gradient-to-b  w-full from-blue-200 to-indigo-600 shadow-lg shadow-blue-500/50 rounded-lg p-2 max-w-md mx-auto mt-1 ">
            <form onSubmit={handleSearch}
               className=" flex justify-between content-center">
               <input 
                  type="text" 
                  placeholder="Enter city name"
                  className="p-2 text-center order-gray-300 rounded-lg w-full mb-1 bg-blue-100 font-bold "
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
               />
               <button 
                  type="submit"
                  className="ml-1 h-10 p-2 hover:bg-blue-600 bg-blue-500 text-white font-bold rounded-lg "
               >
                  Search
               </button>
            </form>
            {/* <h2 className="text-3xl font-bold text-gray-800 mb-4">Your coordinates</h2> */}
            {currentWeather && <WeatherCard data={currentWeather} />}
            {/* ( 
               <div className="text-black font-bold"> 
                  <h2 className="text-lg font-bold mt-2">
                     Current weather for {currentWeather.name} 
                  </h2>
                  <p className="text-2xl font-bold"> {Math.round(currentWeather.main.temp)}&deg;C </p>
                  <p className="capitalize"> {currentWeather.weather[0].description} </p>
               </div> 
            )  */}

            {forecast && ( 
               <div className="bg-blue-100 p-1 rounded-lg chadow-lg mt-0">
                  <h2 className="text-lg font-bold mt-1">
                     {/* Current weather for {currentWeather.name} */} 
                     Forecast
                  </h2>
                  <ul className="space-y-4">
                     {forecast.list.slice(0, 5).map((forecastItem, index) => (
                        <li key={index} className="p-3 bg-white rounded-lg shadow-md">
                           <p className="text-lg font-semibold">
                              {forecastItem.dt_txt}
                           </p>
                           <p className="text-1xl font-bold"> 
                              Temperature: {Math.round(forecastItem.main.temp)}&deg;C 
                           </p>
                           <p>Weather: {forecastItem.weather[0].description} </p>
                        </li>
                     ))}
                  </ul>
               </div>
            )}
         </div>
      </>
   );
} 








         /* <p className="text-lg text-gray-50">
            <span className="font-semibold">
               Latitude: {geoData.latitude}
            </span>
         </p>
         <p className="text-lg text-gray-50">
            <span className="font-semibold">
               Longitude: {geoData.longitude}
            </span>
         </p> */