import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  float: left;
  width: 100%;
  margin-top: 8px;
  display: table;
  padding-bottom: 3px;
  border-bottom: solid 1px #ccc;
  margin-bottom: 3px;
`;

const StyledSpan = styled.span`
  float: left;
  width: 14.285714285714286%;
  font-size: 0.6em;
  text-transform: uppercase;
  color: #026aa7;
  font-weight: bold;
  text-align: center;
`;

const WeekHeader = () =>
  <StyledDiv>
    <StyledSpan>Sun</StyledSpan>
    <StyledSpan>Mon</StyledSpan>
    <StyledSpan>Tue</StyledSpan>
    <StyledSpan>Wed</StyledSpan>
    <StyledSpan>Thu</StyledSpan>
    <StyledSpan>Fri</StyledSpan>
    <StyledSpan>Sat</StyledSpan>
  </StyledDiv>;

export default WeekHeader;
