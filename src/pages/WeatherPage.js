import React, { useState } from 'react';
import styled from 'styled-components';
import Headline from '../components/Headline/Headline';
import Header from '../components/Header/Header';
import Searchinput from '../components/Searchinput/Searchinput';
import ForecastList from '../components/ForecastList/ForecastList';
import CurrentForcast from '../components/CurrentForcast/CurrentForcast';
import {
  AutoCompleteListAPI,
  CurrentConditionsAPI,
  DailyForcastAPI,
  HourlyForecastAPI,
} from '../api/index';
import helpersFuncs from '../helpers/index';

const SLocationBox = styled.div`
  margin-top: 50px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
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
  const [isDone, setisDone] = useState(false);

  const onChange = async (e) => {
    setselectedSearchInputValue(e.target.value);
    const response = await AutoCompleteListAPI(e.target.value);
    setautoCompleteList(response.data);
  };

  const onSelectOption = async (option) => {
    await getCurrentForecast(option.Key);
    await getDailyForecast(option.Key);
    await getHourlyForecasts(option.Key);
    setselectedSearchInputValue(option.LocalizedName);
    setselectedLocation(option);
    setisDone(true);
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
      {isDone ? (
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
