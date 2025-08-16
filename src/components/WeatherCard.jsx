import {getFormatedDate} from './outils';
import {weatherIconUrl} from '../sevices/Api';

export function WeatherCard({data}) { 
   const {name, main, sys, wind, weather} = data;
   return(
      <>
         <div className="flex flex-col items-center bg-gray-000  rounded-xl"> 

            <h2 className="text-lg font-bold mt-0">
               Weather for {name}, {sys.country}
            </h2>
            <h3 className="text-sm ">
               {getFormatedDate()}
            </h3>
            <h3 className="text-lg font-semibold mb-2 mt-1">
               current weather
            </h3>
            
            <div className="flex items-center justify-center font-bold mb-1 h-15">
               {/* icone météo */}

               <img 
                  src={`${weatherIconUrl}${weather[0].icon}@2x.png`} 
                  alt={weather[0].description} 
               />

               <span>
                  <p className="text-3xl"> 
                     {Math.round(main.temp)}<sup>&deg;C</sup> 
                  </p>
               </span>

               <br />

               <div className='text-center ml-7 mx-5'>
                  <span className='text-sm block font-semibold'>
                     {weather[0].main}
                  </span>
                  <span className='text-sm block font-semibold'>
                     Feels like {Math.round(main.feels_like)}<sup>&deg;C</sup>
                  </span>
               </div>
            </div>

               <div className='flex justify-between text-sm font-bold w-full max-w-md'>
                  <div>
                     Wind <br /> {Math.round(wind.speed)}
                  </div>
                  <div>
                     Humidity <br /> {main.humidity} %
                  </div>
                  <div>
                     Pressure <br /> {main.pressure} mb
                  </div>
               </div>

            {/* <p className="capitalize"> 
               {weather[0].description} 
            </p> */}
         </div> 
      </>
   );
}

            /* <div>
               <img 
                  src={`https://openweathermap.org/img/wn/${weather[0].>
            </div> */
            