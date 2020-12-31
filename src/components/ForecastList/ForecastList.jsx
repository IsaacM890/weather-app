import React from 'react';
import styled from 'styled-components';
import Headline from '../Headline/Headline';
import Card from '../Card/Card';
import Caption from '../Caption/Caption';
import helpersFuncs from '../../helpers/index';

const SCardcontainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  @media (max-width: 1450px) {
    overflow-x: scroll;
    overflow-y: hidden;
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 10px;
    }

    &::-webkit-scrollbar {
      height: 10px;
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #f18374;
    }
  }
`;

const SCardIcon = styled.img`
  display: flex;
  height: 30px;
`;

const SForecastListContainer = styled.div`
  margin-top: 40px;
  margin-left: 25px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-left: 0px;
  }
`;

const SCaptionGroup = styled.div`
  margin-top: 5px;
`;

const SCaptionBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 10px;
`;

const ForecastList = (props) => {
  return (
    <SForecastListContainer>
      <Headline
        text={'Forecast'}
        color={'white'}
        margin={'15px 0'}
        fontsize={'28px'}
      />
      <SCardcontainer>
        {props.hourlyForcast.map((item, index) => {
          return (
            <Card
              margin={'3px'}
              borderradius={'5px'}
              width={' 110px'}
              min-width={' 110px'}
              height={'18vh'}
              backgroundcolor={'rgba(255, 255, 255, 0.3)'}
              key={index}
            >
              <SCaptionBox>
                <SCaptionGroup>
                  <Caption
                    color={'white'}
                    text={helpersFuncs.getDate(item, 'date')}
                  />
                  <Caption
                    color={'white'}
                    text={helpersFuncs.getDate(item, 'time')}
                  />
                </SCaptionGroup>
                <SCardIcon
                  src={`http://vortex.accuweather.com/adc2010/images/slate/icons/${item.WeatherIcon}.svg`}
                  alt={'icon'}
                />
                <Caption color={'white'} text={item.Temperature.Value} degree />
              </SCaptionBox>
            </Card>
          );
        })}
      </SCardcontainer>
    </SForecastListContainer>
  );
};

export default ForecastList;
