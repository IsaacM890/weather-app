import React from 'react';
import styled from 'styled-components';
import Caption from '../Caption/Caption';
import helpersFuncs from '../../helpers/index';

const SCard = styled.div`
  display: flex;
  text-align: center;
  background-color: ${(props) => props.backgroundcolor};
  border-radius: ${(props) => props.borderradius};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  min-width: ${(props) => props.minwidth};
  height: ${(props) => props.height};
  justify-content: space-between;
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

const SCardIcon = styled.img`
  display: flex;
  height: 30px;
`;
const Card = (props) => {
  return (
    <div>
      <SCard
        backgroundcolor={props.backgroundcolor}
        borderradius={props.borderradius}
        margin={props.margin}
        width={props.width}
        minwidth={props.minwidth}
        height={props.height}
      >
        <SCaptionBox>
          <SCaptionGroup>
            <Caption
              color={'white'}
              text={helpersFuncs.getDate(props.item.DateTime, 'date')}
            />
            <Caption
              color={'white'}
              text={helpersFuncs.getDate(props.item.DateTime, 'time')}
            />
          </SCaptionGroup>
          <SCardIcon
            src={helpersFuncs.getWeatherIcon(props.item.WeatherIcon)}
            alt={'icon'}
          />
          <Caption color={'white'} text={props.item.Temperature.Value} degree />
        </SCaptionBox>
      </SCard>
    </div>
  );
};

export default Card;
