export const baseURL = {
  autocompleteSearchURL: `http://dataservice.accuweather.com/locations/v1/cities/autocomplete`,
  currentConditionsURL: `http://dataservice.accuweather.com/currentconditions/v1/`,
  dailyForcastURL: `http://dataservice.accuweather.com/forecasts/v1/daily/1day/`,
  hourlyForecastsURL: `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/`,
};

export const endPoints = {
  searchPoint: `?apikey=${process.env.REACT_APP_API_KEY}&q=`,
  basic: `?apikey=${process.env.REACT_APP_API_KEY}&details=true&metric=true`,
};
