import React, { Component } from 'react';
import styled from 'styled-components';
import MonthHeader from './MonthHeader';
import WeekHeader from './WeekHeader';
import Weeks from './Weeks';

const StyledCalendar = styled.div`
  position: absolute;
  z-index: 10;
  background: white;
  width: 260px;
  padding: 5px;
  color: #244152;
  border-radius: 3px;
  height: 203px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: ${({ visible }) =>
    visible
      ? 'opacity 100ms linear'
      : 'visibility 0s 100ms, opacity 100ms linear'};
`;

class Calendar extends Component {
  onMove = (view, isForward) => {
    this.refs.weeks.moveTo(view, isForward);
  };

  onTransitionEnd = () => {
    this.refs.monthHeader.enable();
  };

  render() {
    return (
      <StyledCalendar visible={this.props.visible}>
        <MonthHeader
          ref="monthHeader"
          view={this.props.view}
          onMove={this.onMove}
        />
        <WeekHeader />
        <Weeks
          ref="weeks"
          view={this.props.view}
          selected={this.props.selected}
          onTransitionEnd={this.onTransitionEnd}
          onSelect={this.props.onSelect}
          minDate={this.props.minDate}
          maxDate={this.props.maxDate}
        />
      </StyledCalendar>
    );
  }
}

export default Calendar;
