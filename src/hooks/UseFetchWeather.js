import {useQuery} from '@tanstack/react-query';
// import { useState, useEffect } from 'react';
import { fetchWeatherByCoords } from '../sevices/Api';

export function UseFetchWeather(geoData) {
   const { data, error, isLoading } = useQuery({
      queryKey: ['weather', geoData],
      queryFn: () => fetchWeatherByCoords(geoData),
   });

   return {
      data,
      error,
      isLoading,
   };
}