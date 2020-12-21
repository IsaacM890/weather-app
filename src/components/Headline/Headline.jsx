import React from 'react';
import styled from 'styled-components';


const SHeadline = styled.div`
  color: ${(props) => props.color};
  text: ${(props) => props.text};
  font-weight: ${(props) => props.fontweight};
  margin: ${(props) => props.margin};
  font-size:${(props)=>props.fontsize}
`;

const Headline =({ color, text, fontweight, fontsize, margin ,degree})=> {
  const degreeSymbol = degree ? '°' : '';
  return (
    <SHeadline
      color={color}
      fontweight={fontweight}
      margin={margin}
      fontsize={fontsize}
    >
      {text}
      {degreeSymbol}
    </SHeadline>
  );
}

export default Headline;
