import Axios from 'axios';
const API_KEY = 'MASY5BkwYitQKO37Jj7LGTp7K2NG7W1E';

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

/*
תאריך - props.DailyForecasts.Date
טמפ מקסימלית - props.DailyForecasts.Temperature.Maximum.Value
טמפ מינימלית -  props.dailyForcast.DailyForecasts[0]?.Temperature.Minimum.Value
גשם - props.dailyForcast.DailyForecasts[0]?.Day.RainProbability   may be NULL	
מהירות רוח - props.dailyForcast.DailyForecasts[0]?.Day.Wind.Speed.Value
מהירות רוח מידה - props.DailyForecasts.Day.Wind.Speed.Unit	
זריחה- props.dailyForcast.DailyForecasts[0]?.Sun.Rise	
שקיעה- props.DailyForecasts.Sun.Set 
*/

export const getHourlyForecastsAPI = (Key) =>
  Axios.get(
    `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${Key}?apikey=${API_KEY}&details=true&metric=true`
  );

/*

var options = { hour: 'numeric', minute: 'numeric' }
var options = { weekday: 'long', day: 'numeric' ,month: 'long' }
d.toLocaleDateString('en-us',options);date
d.toLocaleTimeString('he-il', options);time

שעה + תאריך - DateTime
אייקון - WeatherIcon
טמפ - Temperature.Value	 may be NULL	
טמפ מידה - Temperatu

*/
