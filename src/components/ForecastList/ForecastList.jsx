import React from 'react';
import styled from 'styled-components';
import Headline from '../Headline/Headline';
import Card from '../Card/Card';

const SCardcontainer = styled.div(
  ({ theme }) => `
display: flex;
width: 100%;
overflow-x: hidden;
overflow-y: hidden;
@media (max-width: 1450px) {
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px ${theme.colors.primary.light};
    background-color: ${theme.colors.secondary.medium};
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    height: 10px;
    background-color: ${theme.colors.secondary.medium};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${theme.colors.primary.dark};
  }
}
`
);

const SForecastListContainer = styled.div(
  ({ theme }) => `
margin-top: 40px;
margin-left: 25px;
@media (max-width: ${theme.breakpoints.tablet}) {
  display: flex;
  flex-direction: column;
  margin-left: 0;
}
`
);

const ForecastList = ({ hourlyForcast }) => {
  return (
    <SForecastListContainer>
      <Headline text={'Forecast'} color={'white'} fontsize={'XMedium'} />
      <SCardcontainer>
        {hourlyForcast.map((item) => {
          return (
            <Card
              margin={'3px'}
              borderradius={'5px'}
              width={' 110px'}
              min-width={' 110px'}
              height={'18vh'}
              key={item.DateTime}
              item={item}
            />
          );
        })}
      </SCardcontainer>
    </SForecastListContainer>
  );
};

export default ForecastList;
