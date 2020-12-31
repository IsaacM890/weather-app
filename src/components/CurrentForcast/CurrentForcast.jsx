import React from 'react';
import styled from 'styled-components';
import Headline from '../Headline/Headline';
import Caption from '../Caption/Caption';

const SContainer = styled.div`
  color: ${(props) => props.color};
  display: flex;
  & > div {
    padding: 20px;
  }
  margin: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  width: ${(props) => props.width};
`;

const SCloudicon = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 20px;
`;

const SGeneralForcast = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SExtendedForcast = styled.div`
  width: 40%;
  display: flex;
  text-align: center;
  span {
    display: block;
  }
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.backgroundcolor};
  border-radius: ${(props) => props.borderradius};
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SCaptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

const SCaptionGroup = styled.div`
  align-items: center;
  flex-direction: column;
  &:first-child {
    @media (max-width: 768px) {
      margin-bottom: 1rem;
    }
  }
`;

const CurrentForcast = (props) => {
  const timePattern = { hour: 'numeric', minute: 'numeric' };
  const riseTime = new Date(props.dailyForcast.DailyForecasts[0]?.Sun.Rise);
  const riseToDisplay = riseTime.toLocaleTimeString('en-us', timePattern);
  const setTime = new Date(props.dailyForcast.DailyForecasts[0]?.Sun.Set);
  const setToDisplay = setTime.toLocaleTimeString('en-us', timePattern);

  return (
    <SContainer color={props.color}>
      <SGeneralForcast>
        <SCloudicon
          src={`http://vortex.accuweather.com/adc2010/images/slate/icons/${props.currentForcast.WeatherIcon}.svg`}
          alt={'forcast icon'}
        />
        <div>
          <Headline
            text={props.currentForcast.Temperature?.Metric.Value}
            fontsize={'70px'}
            degree
          />
          <Headline text={props.currentForcast.WeatherText} fontsize={'28px'} />
        </div>
      </SGeneralForcast>
      <SExtendedForcast
        backgroundcolor={props.backgroundcolor}
        borderradius={props.borderradius}
      >
        <SCaptionWrapper>
          <SCaptionGroup>
            <Caption
              text={
                props.dailyForcast.DailyForecasts[0]?.Temperature.Maximum.Value
              }
              fontsize={'16px'}
              degree
            ></Caption>
            <Caption text={'Hight'} fontsize={'16px'} />
          </SCaptionGroup>
          <SCaptionGroup>
            <Caption
              text={
                props.dailyForcast.DailyForecasts[0]?.Temperature.Minimum.Value
              }
              fontsize={'16px'}
              degree
            ></Caption>
            <Caption text={'Low'} fontsize={'16px'} />
          </SCaptionGroup>
        </SCaptionWrapper>
        <SCaptionWrapper>
          <SCaptionGroup>
            <Caption
              text={`${props.dailyForcast.DailyForecasts[0]?.Day.Wind.Speed.Value} mi/h`}
              fontsize={'16px'}
            ></Caption>
            <Caption text={'Wind'} fontsize={'16px'} />
          </SCaptionGroup>
          <SCaptionGroup>
            <Caption
              text={`${props.dailyForcast.DailyForecasts[0]?.Day.RainProbability} %`}
              fontsize={'16px'}
            ></Caption>
            <Caption text={'Rain'} fontsize={'16px'} />
          </SCaptionGroup>
        </SCaptionWrapper>
        <SCaptionWrapper>
          <SCaptionGroup>
            <Caption text={setToDisplay} fontsize={'16px'}></Caption>
            <Caption text={'Sunset'} fontsize={'16px'} />
          </SCaptionGroup>
          <SCaptionGroup>
            <Caption text={riseToDisplay} fontsize={'16px'}></Caption>
            <Caption text={'Sunrise'} fontsize={'16px'} />
          </SCaptionGroup>
        </SCaptionWrapper>
      </SExtendedForcast>
    </SContainer>
  );
};

export default CurrentForcast;
