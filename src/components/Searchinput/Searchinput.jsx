import React from 'react';
import styled from 'styled-components';
import icon from '../../assets/images/search-icon-png-9982.png';

const SSearchinput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  opacity: 0.8;
  outline: none;
  background-color: transparent;
  font-size: 14px;
`;

const SSearchicon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 5px;
`;

const SInputWrapper = styled.div`
  margin: 80px auto 0;
  background-color: white;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.radius};
  display: flex;
  align-items: center;
  position: relative;
  padding: 5px 5px 5px 50px;
  @media (max-width: 768px) {
    width: 70%;
  }
`;

export default function Searchinput(props) {
  return (
    <SInputWrapper
      width={props.width}
      height={props.height}
      border={props.border}
      radius={props.radius}
    >
      <SSearchicon src={icon} alt='search icon' />
      <SSearchinput placeholder={'Type Here ... '}></SSearchinput>
    </SInputWrapper>
  );
}
