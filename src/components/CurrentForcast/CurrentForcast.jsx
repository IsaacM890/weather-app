import React from 'react';
import styled from 'styled-components';
import Headline from '../Headline/Headline';
import Caption from '../Caption/Caption';
import helpersFuncs from '../../helpers/index';

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

const SCloudIcon = styled.img`
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

const CurrentForcast = ({
  color,
  currentForcast,
  dailyForcast,
  backgroundcolor,
  borderradius,
}) => {
  return (
    <SContainer color={color}>
      <SGeneralForcast>
        <SCloudIcon
          src={helpersFuncs.getWeatherIcon(currentForcast.WeatherIcon)}
          alt={'forcast icon'}
        />
        <div>
          <Headline
            text={currentForcast.Temperature?.Metric.Value}
            fontsize={'XLarge'}
            degree
          />
          <Headline text={currentForcast.WeatherText} fontsize={'XMedium'} />
        </div>
      </SGeneralForcast>
      <SExtendedForcast
        backgroundcolor={backgroundcolor}
        borderradius={borderradius}
      >
        <SCaptionWrapper>
          <SCaptionGroup>
            <Caption
              text={dailyForcast.DailyForecasts[0]?.Temperature.Maximum.Value}
              fontsize={'16px'}
              degree
            ></Caption>
            <Caption text={'Hight'} />
          </SCaptionGroup>
          <SCaptionGroup>
            <Caption
              text={dailyForcast.DailyForecasts[0]?.Temperature.Minimum.Value}
              fontsize={'16px'}
              degree
            ></Caption>
            <Caption text={'Low'} />
          </SCaptionGroup>
        </SCaptionWrapper>
        <SCaptionWrapper>
          <SCaptionGroup>
            <Caption
              text={`${dailyForcast.DailyForecasts[0]?.Day.Wind.Speed.Value} mi/h`}
              fontsize={'16px'}
            ></Caption>
            <Caption text={'Wind'} />
          </SCaptionGroup>
          <SCaptionGroup>
            <Caption
              text={`${dailyForcast.DailyForecasts[0]?.Day.RainProbability} %`}
              fontsize={'16px'}
            ></Caption>
            <Caption text={'Rain'} />
          </SCaptionGroup>
        </SCaptionWrapper>
        <SCaptionWrapper>
          <SCaptionGroup>
            <Caption
              text={helpersFuncs.getDate(
                dailyForcast.DailyForecasts[0].Sun.Set,
                'time'
              )}
              fontsize={'16px'}
            ></Caption>
            <Caption text={'Sunset'} />
          </SCaptionGroup>
          <SCaptionGroup>
            <Caption
              text={helpersFuncs.getDate(
                dailyForcast.DailyForecasts[0].Sun.Rise,
                'time'
              )}
              fontsize={'16px'}
            ></Caption>
            <Caption text={'Sunrise'} />
          </SCaptionGroup>
        </SCaptionWrapper>
      </SExtendedForcast>
    </SContainer>
  );
};

export default CurrentForcast;
