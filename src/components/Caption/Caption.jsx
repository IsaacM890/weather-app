import React from 'react';
import styled from 'styled-components';

const SCaption = styled.span(
  ({ color, text, fontweight, display, padding }) => `
  color: ${color};
  text: ${text};
  font-weight: ${fontweight};
  display:${display};
  padding:${padding};
`
);

const Caption = ({ color, fontweight, padding, text, degree }) => {
  const degreeSymbol = degree ? '°' : '';
  return (
    <div>
      <SCaption color={color} fontweight={fontweight} padding={padding}>
        {text}
        {degreeSymbol}
      </SCaption>
    </div>
  );
};

export default Caption;
