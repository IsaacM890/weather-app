import React, { useState } from 'react';
import styled from 'styled-components';
import Headline from '../components/Headline/Headline';
import Header from '../components/Header/Header';
import Searchinput from '../components/Searchinput/Searchinput';
import ForecastList from '../components/ForecastList/ForecastList';
import CurrentForcast from '../components/CurrentForcast/CurrentForcast';
import {
  getAutoCompleteList,
  getCurrentConditions,
  getDailyForcastAPI,
  getHourlyForecastsAPI,
} from '../api/index';

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
  const dateOptions = { weekday: 'long', day: 'numeric', month: 'long' };
  const date = new Date().toLocaleDateString('en-us', dateOptions);

  const [autoCompleteList, setautoCompleteList] = useState([]);
  const [selectedSearchInputValue, setselectedSearchInputValue] = useState('');
  const [selectedLocation, setselectedLocation] = useState({});
  const [currentconditions, setcurrentconditions] = useState({});
  const [dailyForcast, setdailyForcast] = useState({});
  const [hourlyForcast, sethourlyForcast] = useState({});

  const [isDone, setisDone] = useState(false);

  const onChange = async (e) => {
    setselectedSearchInputValue(e.target.value);
    const response = await getAutoCompleteList(e.target.value);
    console.log(response.data);
    setautoCompleteList(response.data);
  };

  const onSelectOption = async (option) => {
    await getForcast(option.Key);
    await getDailyForcast(option.Key);
    await getgetHourlyForecasts(option.Key);
    setselectedSearchInputValue(option.LocalizedName);
    setselectedLocation(option);
    setisDone(true);
  };

  const getForcast = async (key) => {
    const response = await getCurrentConditions(key);
    console.log(response.data[0]);
    setcurrentconditions(response.data[0]);
  };

  const getDailyForcast = async (key) => {
    const response = await getDailyForcastAPI(key);
    console.log(response.data);
    setdailyForcast(response.data);
  };

  const getgetHourlyForecasts = async (key) => {
    const response = await getHourlyForecastsAPI(key);
    console.log(response.data);
    sethourlyForcast(response.data);
  };

  return (
    <SPageContainer>
      <Header padding={'20px 0'}>
        <Headline color={'white'} text='WEATHER APP' fontsize={'18px'} />
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
              fontsize={'45px'}
              fontweight={'bold'}
            />
            <Headline color={'white'} text={date} fontsize={'20px'} />
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
