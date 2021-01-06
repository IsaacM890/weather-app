import React from 'react';
import styled from 'styled-components';

const SHeader = styled.header(
  ({ backgroundcolor, padding, margin }) => `
background-color:${backgroundcolor};
padding:${padding};
margin:${margin};`
);

export default function Header({ backgroundcolor, padding, margin, children }) {
  return (
    <SHeader
      backgroundcolor={backgroundcolor}
      padding={padding}
      margin={margin}
    >
      {children}
    </SHeader>
  );
}
