import React, { Component } from 'react';
import styled from 'styled-components';
import DateUtilities from './utils';

const StyledWeek = styled.div`
  float: left;
  width: 100%;
`;

const Day = styled.div`
  float: left;
  width: 14.285714285714286%;
  font-size: 0.8em;
  padding: 4px 0;
  cursor: pointer;
  text-align: center;
  border-radius: 3px;
  :hover {
    background: #eaeaea;
  }
  ${({ disabled }) =>
    disabled &&
    'color: #E0E0E0; cursor: default; :hover { background: transparent !important; }'};
  ${({ today }) => today && `background: #68b53e; color: white;`};
  ${({ selected }) => selected && `background: #026aa7; color: white;`};
  ${({ otherMonth }) => otherMonth && `color: #AAA;`};
`;

class Week extends Component {
  buildDays = start => {
    var days = [DateUtilities.clone(start)],
      clone = DateUtilities.clone(start);

    for (var i = 1; i <= 6; i++) {
      clone = DateUtilities.clone(clone);
      clone.setDate(clone.getDate() + 1);
      days.push(clone);
    }
    return days;
  };

  onSelect = day => {
    if (!this.isDisabled(day)) this.props.onSelect(day);
  };

  isDisabled = day => {
    var minDate = this.props.minDate,
      maxDate = this.props.maxDate;

    return (
      (minDate && DateUtilities.isBefore(day, minDate)) ||
      (maxDate && DateUtilities.isAfter(day, maxDate))
    );
  };

  render() {
    const days = this.buildDays(this.props.start);
    return (
      <StyledWeek>
        {days.map((day, i) => (
          <Day
            key={i}
            onClick={this.onSelect.bind(null, day)}
            disabled={this.isDisabled(day)}
            today={DateUtilities.isSameDay(day, new Date())}
            otherMonth={this.props.month !== day.getMonth()}
            selected={
              this.props.selected &&
              DateUtilities.isSameDay(day, this.props.selected)
            }
          >
            {DateUtilities.toDayOfMonthString(day)}
          </Day>
        ))}
      </StyledWeek>
    );
  }
}

export default Week;
