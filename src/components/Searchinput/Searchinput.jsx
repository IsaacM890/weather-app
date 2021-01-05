import React from 'react';
import styled from 'styled-components';
import icon from '../../assets/images/search-icon-png-9982.png';

const SSearchInput = styled.input`
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
  &:focus-within ul {
    display: block;
  }
`;

const SDropdownList = styled.ul`
  display: none;
  width: 100%;
  border-radius: 10px;
  position: absolute;
  background-color: white;
  top: calc(100% + 2px);
  padding: 0;
  left: 0;
  margin: 0;
  box-sizing: border-box;
  overflow: hidden;
`;

const SDropDownItem = styled.li`
  list-style: none;
  padding: 5px 50px;
  border-bottom: solid 1px rgba(0,0,0,0.1);
  &:hover{
    background-color: #F2C2BE;
    cursor:pointer;
  }
}
`;

export default function Searchinput(props) {
  const suggestions = props.autoCompleteList
    ? props.autoCompleteList.map((item) => {
        return (
          <SDropDownItem
            onMouseDown={() => props.onSelectOption(item)}
            key={item.Key}
          >
            {item.LocalizedName}
          </SDropDownItem>
        );
      })
    : [];
  return (
    <SInputWrapper
      width={props.width}
      height={props.height}
      border={props.border}
      radius={props.radius}
    >
      <SSearchicon src={icon} alt='search icon' />
      <SSearchInput
        onChange={props.onChange}
        placeholder={'Search ... '}
        value={props.value}
      ></SSearchInput>
      <SDropdownList>{suggestions}</SDropdownList>
    </SInputWrapper>
  );
}
