import React from 'react';
import styled from 'styled-components';
import Caption from '../Caption/Caption';
import helpersFuncs from '../../helpers/index';

const SCard = styled.div(
  ({ backgroundcolor, borderradius, margin, width, minwidth, height }) => `
display: flex;
text-align: center;
background-color: ${backgroundcolor};
border-radius: ${borderradius};
margin: ${margin};
width: ${width};
min-width: ${minwidth};
height: ${height};
justify-content: space-between;
`
);

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

const SCardIcon = styled.img`
  display: flex;
  height: 30px;
`;
const Card = ({
  backgroundcolor,
  borderradius,
  margin,
  width,
  minwidth,
  height,
  item,
}) => {
  return (
    <div>
      <SCard
        backgroundcolor={backgroundcolor}
        borderradius={borderradius}
        margin={margin}
        width={width}
        minwidth={minwidth}
        height={height}
      >
        <SCaptionBox>
          <SCaptionGroup>
            <Caption
              color={'white'}
              text={helpersFuncs.getDate(item.DateTime, 'date')}
            />
            <Caption
              color={'white'}
              text={helpersFuncs.getDate(item.DateTime, 'time')}
            />
          </SCaptionGroup>
          <SCardIcon
            src={helpersFuncs.getWeatherIcon(item.WeatherIcon)}
            alt={'icon'}
          />
          <Caption color={'white'} text={item.Temperature.Value} degree />
        </SCaptionBox>
      </SCard>
    </div>
  );
};

export default Card;
