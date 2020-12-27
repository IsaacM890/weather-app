import Axios from 'axios';
const API_KEY = 'ZzSAmzGkFYWGu1ZYitfx8fZAUHJL0DY8';
export const getAutoCompleteList = (input) =>
  Axios.get(
    `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${input}`
  );

export const getCurrentConditions = (Key) =>
  Axios.get(
    `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${API_KEY}&details=true`
  );
