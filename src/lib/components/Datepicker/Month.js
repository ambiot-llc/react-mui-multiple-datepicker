import React, { Component } from 'react';
import styled from 'styled-components';
import Week from './Week';
import DateUtilities from './utils';
import ReactDOM from 'react-dom';

const MonthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-weight: 400;
  height: 228;
  line-height: 2;
  position: relative;
  text-align: center;
  moz-padding-start: 0;
`;
const StyledWeeks = styled.div`
  position: absolute;
  width: 250px;
  left: ${({ other, right }) => (other ? (right ? '-250px' : '250px') : 0)};
  transition: transform 500ms ease;
  ${({ slide }) => slide === 'left' && 'transform: translate3d(-250px, 0, 0)'};
  ${({ slide }) => slide === 'right' && 'transform: translate3d(250px, 0, 0)'};
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

  moveTo = (view, isForward) => {
    this.setState({
      sliding: isForward ? 'left' : 'right',
      other: DateUtilities.clone(view)
    });
    this.onTransitionEnd;
  };

  render() {
    return (
      <MonthWrapper>{this.renderWeeks(this.props.displayDate)}</MonthWrapper>
    );
  }

  renderWeeks = view => {
    const starts = this.getWeekStartDates(view),
      month = starts[1].getMonth();
    return starts.map(
      (s, i) => (
        <Week
          key={i}
          start={s}
          month={month}
          selected={this.props.selected}
          selectedDates={this.props.selectedDates}
          onSelect={this.props.onSelect}
          minDate={this.props.minDate}
          maxDate={this.props.maxDate}
        />
      ),
      this
    );
  };
}

export default Weeks;
