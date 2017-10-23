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
  text-align: center;
`;

const StyledSpan = styled.span`
  width: 42px;
`;

const WeekHeader = () => (
  <StyledDiv>
    <StyledSpan>S</StyledSpan>
    <StyledSpan>M</StyledSpan>
    <StyledSpan>T</StyledSpan>
    <StyledSpan>W</StyledSpan>
    <StyledSpan>T</StyledSpan>
    <StyledSpan>F</StyledSpan>
    <StyledSpan>S</StyledSpan>
  </StyledDiv>
);

export default WeekHeader;
