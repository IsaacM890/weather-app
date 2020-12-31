import Axios from 'axios';

export const getAutoCompleteList = (input) =>
  Axios.get(
    `ushttp://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_API_KEY}&q=${input}`
  );

export const getCurrentConditions = (Key) =>
  Axios.get(
    `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${process.env.REACT_APP_API_KEY}&details=true`
  );

export const getDailyForcastAPI = (Key) =>
  Axios.get(
    `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${Key}?apikey=${process.env.REACT_APP_API_KEY}&details=true&metric=true`
  );

export const getHourlyForecastsAPI = (Key) =>
  Axios.get(
    `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${Key}?apikey=${process.env.REACT_APP_API_KEY}&details=true&metric=true`
  );
