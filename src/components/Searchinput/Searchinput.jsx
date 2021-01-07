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
  left: 10px;
`;

const SInputWrapper = styled.div(
  ({ theme, width, height, border, radius }) => `
margin: 80px auto 0;
background-color: ${theme.colors.secondary.dark};
width: ${width};
height: ${height};
border: ${border};
border-radius: ${radius};
display: flex;
align-items: center;
position: relative;
padding: 5px 5px 5px 50px;
@media (max-width: ${theme.breakpoints.tablet}) {
  width: 70%;
}
&:focus-within ul {
  display: block;
}`
);

const SDropdownList = styled.ul(
  ({ theme }) => `
display: none;
width: 100%;
border-radius: 10px;
position: absolute;
background-color: ${theme.colors.secondary.dark};
top: calc(100% + 2px);
padding: 0;
left: 0;
margin: 0;
box-sizing: border-box;
overflow: hidden;
`
);

const SDropDownItem = styled.li(
  ({ theme }) => `
list-style: none;
padding: 5px 50px;
border-bottom: solid 1px ${theme.colors.secondary.light};
&:hover{
  background-color: ${theme.colors.primary};
  cursor:pointer;
}
`
);

export default function Searchinput({
  autoCompleteList,
  onSelectOption,
  width,
  height,
  border,
  radius,
  onChange,
  value,
}) {
  const suggestions = autoCompleteList
    ? autoCompleteList.map((item) => {
        return (
          <SDropDownItem
            onMouseDown={() => onSelectOption(item)}
            key={item.Key}
          >
            {item.LocalizedName}
          </SDropDownItem>
        );
      })
    : [];
  return (
    <SInputWrapper
      width={width}
      height={height}
      border={border}
      radius={radius}
    >
      <SSearchicon src={icon} alt='search icon' />
      <SSearchInput
        onChange={onChange}
        placeholder={'Search ... '}
        value={value}
      ></SSearchInput>
      <SDropdownList>{suggestions}</SDropdownList>
    </SInputWrapper>
  );
}
