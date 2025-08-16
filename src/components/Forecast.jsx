import { getShortDate } from "./outils";

export function Forecast ({forecast}) {
   return (
      <>
         <div className="text-lg font-bold mb-2 ">
            <h2 className="text-lg font-bold mt-1">
                     {/* Current weather for {currentWeather.name} */} 
               Forecast
            </h2>
            <div className="flex flex-wrap gap-2 text-white justify-center">
               {forecast.list.slice(0, 5).map((forecastItem, index) => (
                  <div key={index} className=" p-1 w-32 rounded-xl border-4 border-indigo-600  from-blue-200 to-blue-900 hover:bg-blue-900 hover:text-blue-300">
                     <p className="text-lg font-semibold">
                        {/* {forecastItem.dt_txt} */}
                        {getShortDate(forecastItem.dt)}
                     </p>
                     <p className="text-1xl font-bold"> 
                        Temperature: {Math.round(forecastItem.main.temp)}&deg;C 
                     </p>
                     <p>Weather: {forecastItem.weather[0].description} </p>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
}