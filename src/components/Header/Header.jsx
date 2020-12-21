import React from 'react';
import styled from 'styled-components';

const SHeader = styled.header`
  ${(props) => `background-color:${props.backgroundcolor}`};
  ${(props) => `padding:${props.padding}`};
  ${(props) => `margin:${props.margin}`};
`;

export default function Header(props) {
  return (
    <SHeader
      backgroundcolor={props.backgroundcolor}
      padding={props.padding}
      margin={props.margin}
    >
      {props.children}
    </SHeader>
  );
}
