import { baseURL, endPoints } from './config';
import axios from 'axios';

export const AutoCompleteListAPI = (query) =>
  axios.get(baseURL.autocompleteSearchURL+endPoints.searchPoint+query);

export const CurrentConditionsAPI= (cityKey) =>
  axios.get(baseURL.currentConditionsURL+cityKey+endPoints.basic);

export const DailyForcastAPI = (cityKey) =>
  axios.get(baseURL.dailyForcastURL+cityKey+endPoints.basic);

export const HourlyForecastAPI = (cityKey) =>
  axios.get(baseURL.hourlyForecastsURL+cityKey+endPoints.basic);
