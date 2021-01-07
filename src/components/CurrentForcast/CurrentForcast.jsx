import React from 'react';
import styled from 'styled-components';
import Headline from '../Headline/Headline';
import Caption from '../Caption/Caption';
import helpersFuncs from '../../helpers/index';

const SContainer = styled.div(
  ({ theme, color, width }) => `
color: ${color};
display: flex;
& > div {
  padding: 20px;
}
margin: 20px;
@media (max-width: ${theme.breakpoints.tablet}) {
  flex-direction: column;
  align-items: center;
}
width: ${width};`
);

const SCloudIcon = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 20px;
`;

const SGeneralForcast = styled.div(
  ({ theme }) => `
display: flex;
align-items: center;
justify-content: center;
width: 50%;
@media (max-width: ${theme.breakpoints.tablet}) {
  width: 100%;
}
`
);

const SExtendedForcast = styled.div(
  ({ theme, backgroundcolor, borderradius }) => ` 
width: 40%;
display: flex;
text-align: center;
span {
  display: block;
}
align-items: center;
justify-content: space-between;
background-color: ${backgroundcolor};
border-radius: ${borderradius};
@media (max-width: ${theme.breakpoints.tablet}) {
  width: 100%;
}`
);

const SCaptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

const SCaptionGroup = styled.div(
  ({ theme }) => `
align-items: center;
flex-direction: column;
&:first-child {
  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 1rem;
  }
}`
);

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
              degree
            ></Caption>
            <Caption text={'Hight'} />
          </SCaptionGroup>
          <SCaptionGroup>
            <Caption
              text={dailyForcast.DailyForecasts[0]?.Temperature.Minimum.Value}
              degree
            ></Caption>
            <Caption text={'Low'} />
          </SCaptionGroup>
        </SCaptionWrapper>
        <SCaptionWrapper>
          <SCaptionGroup>
            <Caption
              text={`${dailyForcast.DailyForecasts[0]?.Day.Wind.Speed.Value} mi/h`}
            ></Caption>
            <Caption text={'Wind'} />
          </SCaptionGroup>
          <SCaptionGroup>
            <Caption
              text={`${dailyForcast.DailyForecasts[0]?.Day.RainProbability} %`}
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
            ></Caption>
            <Caption text={'Sunset'} />
          </SCaptionGroup>
          <SCaptionGroup>
            <Caption
              text={helpersFuncs.getDate(
                dailyForcast.DailyForecasts[0].Sun.Rise,
                'time'
              )}
            ></Caption>
            <Caption text={'Sunrise'} />
          </SCaptionGroup>
        </SCaptionWrapper>
      </SExtendedForcast>
    </SContainer>
  );
};

export default CurrentForcast;
