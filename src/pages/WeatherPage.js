/** @format */

import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Headline from '../components/Headline/Headline';
import Header from '../components/Header/Header';
import Searchinput from '../components/Searchinput/Searchinput';
import ForecastList from '../components/ForecastList/ForecastList';
import CurrentForcast from '../components/CurrentForcast/CurrentForcast';
import debounce from 'lodash.debounce';
import helpersFuncs from '../helpers/index';
import {
  AutoCompleteListAPI,
  CurrentConditionsAPI,
  DailyForcastAPI,
  HourlyForecastAPI,
} from '../api/index';

const SLocationBox = styled.div(
  ({ theme }) => `
margin-top: 50px;
@media (max-width: ${theme.breakpoints.tablet}) {
  text-align: center;
}
`
);

const SPageContainer = styled.div`
  margin: 0 20px 20px;
`;

const WeatherPage = () => {
  const [autoCompleteList, setautoCompleteList] = useState([]);
  const [selectedSearchInputValue, setselectedSearchInputValue] = useState('');
  const [selectedLocation, setselectedLocation] = useState({});
  const [currentconditions, setcurrentconditions] = useState({});
  const [dailyForcast, setdailyForcast] = useState({});
  const [hourlyForcast, sethourlyForcast] = useState({});
  const [isDoneFetch, setisDoneFetch] = useState(false);

  const debounceAutoComplete = useCallback(
    debounce((nextValue) => getAutoComplete(nextValue), 500),
    []
  );

  const getAutoComplete = async (value) => {
    const response = await AutoCompleteListAPI(value);
    setautoCompleteList(response.data);
  };
  const onChange = async (e) => {
    const nextValue = e.target.value;
    setselectedSearchInputValue(nextValue);
    debounceAutoComplete(nextValue);
  };

  const onSelectOption = async (option) => {
    await getCurrentForecast(option.Key);
    await getDailyForecast(option.Key);
    await getHourlyForecasts(option.Key);
    setselectedSearchInputValue(option.LocalizedName);
    setselectedLocation(option);
    setisDoneFetch(true);
  };

  const getCurrentForecast = async (key) => {
    const response = await CurrentConditionsAPI(key);
    setcurrentconditions(response.data[0]);
  };

  const getDailyForecast = async (key) => {
    const response = await DailyForcastAPI(key);
    setdailyForcast(response.data);
  };

  const getHourlyForecasts = async (key) => {
    const response = await HourlyForecastAPI(key);
    sethourlyForcast(response.data);
  };

  return (
    <SPageContainer>
      <Header padding={'20px 0'}>
        <Headline color={'white'} text='WEATHER APP' fontsize={'Small'} />
      </Header>
      <Searchinput
        width={'30%'}
        height={'30px'}
        border={'none'}
        radius={'40px'}
        onChange={onChange}
        autoCompleteList={autoCompleteList}
        onSelectOption={onSelectOption}
        value={selectedSearchInputValue}
      />
      {isDoneFetch ? (
        <>
          <SLocationBox>
            <Headline
              color={'white'}
              text={
                selectedLocation.LocalizedName +
                ', ' +
                selectedLocation.Country.ID
              }
              fontsize={'Large'}
              fontweight={'bold'}
            />
            <Headline
              color={'white'}
              text={helpersFuncs.getDate()}
              fontsize={'Medium'}
            />
          </SLocationBox>
          <CurrentForcast
            dailyForcast={dailyForcast}
            currentForcast={currentconditions}
            borderradius={'10px'}
            color={'white'}
            backgroundcolor={'rgba(255,255,255,0.3)'}
          />
          <ForecastList hourlyForcast={hourlyForcast} />
        </>
      ) : null}
    </SPageContainer>
  );
};

export default WeatherPage;
