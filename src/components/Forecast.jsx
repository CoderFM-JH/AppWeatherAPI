import { getShortDate } from "./outils";
import {weatherIconUrl} from '../sevices/Api';

export function Forecast ({forecast}) {
   return (
      <>
         <div className="text-lg font-bold mb-2 ">
            <h2 className="text-lg font-bold mt-1">
                     {/* Current weather for {currentWeather.name} */} 
               Forecast
            </h2>
            <div className="flex flex-wrap gap-2 text-white justify-center">
               {forecast.list.slice(0, 5).map((forecastItem, index) => {

                  const {dt, main, weather} = forecastItem;
               return (
                  <div key={index} className=" p-1 w-40 rounded-xl border-3 border-indigo-600  from-blue-200 to-blue-900 hover:bg-blue-600 hover:text-blue-300">
                     <p className="text-lg font-semibold">
                        {/* {forecastItem.dt_txt} */}
                        {/* {getShortDate(forecastItem.dt)} */}
                        {getShortDate(dt)}
                     </p>

                     <img 
                        className="w-25 h-20 mx-auto"
                        src={`${weatherIconUrl}${weather[0].icon}@2x.png`} 
                        alt={weather[0].description} 
                     />

                     <p className="text-1xl font-bold"> 
                        Temperature: {Math.round(main.temp)}&deg;C 
                        {/* Temperature: {Math.round(forecastItem.main.temp)}&deg;C  */}
                     </p>
                     <p>
                        {/* Weather: {forecastItem.weather[0].description}  */}
                        Weather: {weather[0].description}
                     </p>
                  </div>
               )}
               )}
            </div>
         </div>
      </>
   );
}