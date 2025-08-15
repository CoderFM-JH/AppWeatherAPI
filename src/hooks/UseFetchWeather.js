import {useQuery} from '@tanstack/react-query';
// import { useState, useEffect } from 'react';
// import { fetchWeatherByCity } from '../sevices/Api';
import { fetchWeatherByCity, fetchWeatherByCoords } from '../sevices/Api';

export function UseFetchWeather(geoData, searchQuery) {
   const { data, error, isLoading } = useQuery({
      queryKey: ['weather', searchQuery || geoData],
      queryFn: () => 
         searchQuery 
            ? fetchWeatherByCity(searchQuery) 
            : fetchWeatherByCoords(geoData),
      enabled: (!!geoData?.latitude && !!geoData?.longitude) || !!searchQuery,
   });

   return {
      data,
      error,
      isLoading,
   };
}