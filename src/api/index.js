import Axios from 'axios';
const API_KEY = 'vEu2fOKPDLuQoGh7gjJQ4g6zjpf2Hj2m';

export const getAutoCompleteList = (input) =>
  Axios.get(
    `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${input}`
  );
