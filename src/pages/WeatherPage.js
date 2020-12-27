import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Headline from '../components/Headline/Headline';
import Header from '../components/Header/Header';
import Searchinput from '../components/Searchinput/Searchinput';
import ForecastList from '../components/ForecastList/ForecastList';
import CurrentForcast from '../components/CurrentForcast/CurrentForcast';
import { getAutoCompleteList, getCurrentConditions } from '../api/index';

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
  const [currentconditions, setcurrentconditions] = useState({});

  useEffect(() => {
   getForcast(215854);
  }, []);

  const onChange = async (e) => {
    setselectedSearchInputValue(e.target.value);
    const response = await getAutoCompleteList(e.target.value);
    console.log(response.data);
    setautoCompleteList(response.data);
  };

  const onSelectOption = async (option) => {
    getForcast(option.Key);
    setselectedSearchInputValue(option.LocalizedName);
  };
  
  const getForcast = async (key) => {
    const response = await getCurrentConditions(key);
    console.log(response.data[0]);
    setcurrentconditions(response.data[0]);
  }


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
        // onKeyPress={}
      />
      <SLocationBox>
        <Headline
          color={'white'}
          text='New York, US'
          fontsize={'45px'}
          fontweight={'bold'}
        />
        <Headline color={'white'} text='Wednesday 1 April' fontsize={'20px'} />
      </SLocationBox>
      <CurrentForcast
        currentForcast={currentconditions}
        borderradius={'10px'}
        color={'white'}
        backgroundcolor={'rgba(255,255,255,0.3)'}
      />
      <ForecastList />
    </SPageContainer>
  );
};

export default WeatherPage;
