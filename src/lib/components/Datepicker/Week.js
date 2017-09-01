import React, { Component } from "react";
import styled from "styled-components";
import DateUtilities from "./utils";
import { dateTimeFormat } from "./dateUtils";
const StyledWeek = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 34px;
  margin-bottom: 2px;
`;

const DayButton = styled.button`
  border: 10px;
  box-sizing: border-box;
  display: inline-block;
  font-family: Roboto, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  text-decoration: none;
  margin: 0px;
  padding: 4px 0px;
  outline: none;
  font-size: inherit;
  font-weight: 400;
  position: relative;
  z-index: 1;
  width: 42px;
  background: none;
`;

const DayBackdrop = styled.div`
  background-color: rgb(0, 151, 167);
  height: 34px;
  left: 4px;
  opacity: ${({ selected }) => (selected ? "1" : "0")};
  position: absolute;
  top: 0px;
  transform: scale(${({ selected }) => (selected ? "1" : "0")});
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  width: 34px;
`;

const Day = styled.div`
  color: ${({ selected }) =>
    selected ? "rgb(255, 255, 255)" : "rgba(0, 0, 0, 0.87)"};
  font-weight: 400;
  position: relative;
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

  isSelected = day => {
    // return (
    //   this.props.selectedDates &&
    //   DateUtilities.dateIn(this.props.selectedDates, day)
    // );
    return false;
  };

  render() {
    // const days = this.buildDays(this.props.start);
    return (
      <StyledWeek>
        {this.props.week.map((day, i) =>
          <DayButton
            key={i}
            onClick={() => this.onSelect(day)}
            disabled={this.isDisabled(day)}
          >
            <DayBackdrop selected={this.isSelected(day)} />
            <Day selected={this.isSelected(day)}>
              {new dateTimeFormat("en-US", {
                day: "numeric"
              }).format(day)}
            </Day>
          </DayButton>
        )}
      </StyledWeek>
    );
  }
}

export default Week;
