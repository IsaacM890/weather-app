import React from 'react';
import styled from 'styled-components';

const SHeadline = styled.div(
  ({ color, fontweight, fontsize }) => `
  color:${color};
  fontweight:${fontweight};
  ${fontsize};`
);

const setFontSize = (size) => {
  switch (size) {
    case 'XLarge':
      return 'font-size:70px';
    case 'Large':
      return 'font-size:45px';
    case 'XMedium':
      return 'font-size:28px';
    case 'Medium':
      return 'font-size:20px';
    case 'Small':
      return 'font-size:18px';

    default:
      return 'font-size:16px';
  }
};

const Headline = ({ color, text, fontweight, fontsize, degree }) => {
  const degreeSymbol = degree ? '°' : '';
  return (
    <SHeadline
      color={color}
      fontweight={fontweight}
      fontsize={setFontSize(fontsize)}
    >
      {text}
      {degreeSymbol}
    </SHeadline>
  );
};

export default Headline;
