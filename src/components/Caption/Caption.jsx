import React from 'react';
import styled from 'styled-components';

const SCaption = styled.span(
  ({ color, text, fontweight, fontsize, display, padding }) => `
  color: ${color};
  text: ${text};
  font-weight: ${fontweight};
  font-size: ${fontsize};
  display:${display};
  padding:${padding};
`
);

const Caption = ({ color, fontsize, fontweight, padding, text, degree }) => {
  const degreeSymbol = degree ? '°' : '';
  return (
    <div>
      <SCaption
        color={color}
        fontsize={fontsize}
        fontweight={fontweight}
        padding={padding}
      >
        {text}
        {degreeSymbol}
      </SCaption>
    </div>
  );
};

export default Caption;
