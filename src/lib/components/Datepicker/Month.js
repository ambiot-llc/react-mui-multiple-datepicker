import React, { Component } from "react";
import styled from "styled-components";
import Week from "./Week";
import DateUtilities from "./utils";
import { defaultUtils as utils } from "./dateUtils";
const MonthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-weight: 400;
  height: 214px;
  line-height: 2px;
  position: relative;
  text-align: center;
  moz-padding-start: 0;
`;

class Weeks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: DateUtilities.clone(this.props.view),
      other: DateUtilities.clone(this.props.view),
      sliding: null
    };
  }

  getWeekStartDates = view => {
    view.setDate(1);
    view = DateUtilities.moveToDayOfWeek(DateUtilities.clone(view), 0);

    const current = DateUtilities.clone(view);
    current.setDate(current.getDate() + 7);

    const starts = [view],
      month = current.getMonth();

    while (current.getMonth() === month) {
      starts.push(DateUtilities.clone(current));
      current.setDate(current.getDate() + 7);
    }

    return starts;
  };

  render() {
    return (
      <MonthWrapper>
        {this.renderWeeks(this.props.displayDate)}
      </MonthWrapper>
    );
  }

  renderWeeks = view => {
    const starts = this.getWeekStartDates(view),
      month = starts[1].getMonth();
    const weekArray = utils.getWeekArray(this.props.displayDate, 1);

    return weekArray.map(
      (s, i) =>
        <Week
          key={i}
          week={s}
          month={month}
          selected={this.props.selected}
          selectedDates={this.props.selectedDates}
          onSelect={this.props.onSelect}
          minDate={this.props.minDate}
          maxDate={this.props.maxDate}
        />,
      this
    );
  };
}

export default Weeks;
