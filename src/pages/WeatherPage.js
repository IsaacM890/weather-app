import React from 'react';
import styled from 'styled-components';
import Headline from '../components/Headline/Headline';
import Header from '../components/Header/Header';
import Searchinput from '../components/Searchinput/Searchinput';
import ForecastList from '../components/ForecastList/ForecastList';
import CurrentForcast from '../components/CurrentForcast/CurrentForcast';

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
  return (
    <SPageContainer>
      <Header padding={'20px 0'}>
        <Headline
          color={'white'}
          text='WEATHER APP'
          fontsize={'18px'} 
        />
      </Header>
      <Searchinput
        width={'30%'}
        height={'30px'}
        border={'none'}
        radius={'40px'}
      />
      <SLocationBox>
        <Headline
          color={'white'}
          text='New York, US'
          fontsize={'45px'}
          fontweight={'bold'}
        />
        <Headline
          color={'white'}
          text='Wednesday 1 April'
          fontsize={'20px'}
        />
      </SLocationBox>
      <CurrentForcast
        borderradius={'10px'}
        color={'white'}
        backgroundcolor={'rgba(255,255,255,0.3)'}
      />
      <ForecastList />
    </SPageContainer>
  );
};

export default WeatherPage;
