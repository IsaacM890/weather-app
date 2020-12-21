import React from 'react';
import styled from 'styled-components';

const SCard = styled.div`
  display: flex;
  text-align: center;
  background-color: ${(props) => props.backgroundcolor};
  border-radius: ${(props) => props.borderradius};
  margin:${(props) => props.margin};
  width:${(props) => props.width}; 
  min-width: ${(props) => props.minwidth}; 
  height:${(props) => props.height};
  justify-content: space-between;
  
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
        {props.children}
      </SCard>
    </div>
  );
};

export default Card;
