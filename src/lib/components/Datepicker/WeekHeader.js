import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 500;
  height: 20px;
  line-height: 15px;
  opacity: 0.5;
  textAlign: center;
`;

const StyledSpan = styled.span`width: 42px;`;

const WeekHeader = () => (
  <StyledDiv>
    <StyledSpan>Sun</StyledSpan>
    <StyledSpan>Mon</StyledSpan>
    <StyledSpan>Tue</StyledSpan>
    <StyledSpan>Wed</StyledSpan>
    <StyledSpan>Thu</StyledSpan>
    <StyledSpan>Fri</StyledSpan>
    <StyledSpan>Sat</StyledSpan>
  </StyledDiv>
);

export default WeekHeader;
