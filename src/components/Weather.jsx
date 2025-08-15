import UseGeolocation from "../hooks/UseGeolocation";
import {UseFetchWeather} from '../hooks/UseFetchWeather'; 
import { useState } from "react";


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

   const {currentWeather} = data || {};

   const handleSearch = (e) => {
      e.preventDefault();
      if (city.trim()) {
         console.log('city = ', city);
         setSearchQuery(city.trim());
      }
   }

   return( 
      <>
      {/* */}
         <div className="bg-gradient-to-b   from-blue-200 to-indigo-600 shadow-lg rounded-lg p-2 max-w-md mx-auto mt-1 ">
            <form onSubmit={handleSearch}>
               <input 
                  type="text" 
                  placeholder="Enter city name"
                  className="p-2 order-gray-300 rounded-lg w-full mb-4 bg-blue-100 font-bold "
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
               />
               <button 
                  type="submit"
                  className="ml-2 p-2 bg-blue-500 text-white font-bold rounded-lg "
               >
                  Search
               </button>
            </form>
            {/* <h2 className="text-3xl font-bold text-gray-800 mb-4">Your coordinates</h2> */}
            {currentWeather && ( 
               <div className="text-black font-bold"> 
                  <h2>Current weather for {currentWeather.name} </h2>
                  <p className="text-2xl font-bold"> {Math.round(currentWeather.main.temp)}&deg;C </p>
                  <p className="capitalize"> {currentWeather.weather[0].description} </p>
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