import Axios from 'axios';
const API_KEY = 'JRanAYImZuTt3zMWpNPtoGnOYBtxiSHt';

export const getAutoCompleteList = (input) =>
  Axios.get(
    `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${input}`
  );

export const getCurrentConditions = (Key) =>
  Axios.get(
    `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${API_KEY}&details=true`
  );

export const getDailyForcastAPI = (Key) =>
  Axios.get(
    `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${Key}?apikey=${API_KEY}&details=true&metric=true`
  );

export const getHourlyForecastsAPI = (Key) =>
  Axios.get(
    `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${Key}?apikey=${API_KEY}&details=true&metric=true`
  );

/*
http://dataservice.accuweather.com/forecasts/v1/hourly/24hour/
*/
