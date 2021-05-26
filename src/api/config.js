/** @format */

const API_KEY = 'WLPjmpTw1wszfd1kUnFEpglC8AQeQE7F';

export const baseURL = {
  autocompleteSearchURL: `https://dataservice.accuweather.com/locations/v1/cities/autocomplete`,
  currentConditionsURL: `https://dataservice.accuweather.com/currentconditions/v1/`,
  dailyForcastURL: `https://dataservice.accuweather.com/forecasts/v1/daily/1day/`,
  hourlyForecastsURL: `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/`,
};

export const endPoints = {
  searchPoint: `?apikey=${API_KEY}&q=`,
  basic: `?apikey=${API_KEY}&details=true&metric=true`,
};
