import React, { Component } from 'react';
import styled from 'styled-components';
import Week from './Week';
import DateUtilities from './utils';
import ReactDOM from 'react-dom';

const StyledWeeksWrapper = styled.div`
  float: left;
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 140px;
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

  componentDidMount = () => {
    ReactDOM.findDOMNode(this.refs.current).addEventListener(
      'transitionend',
      this.onTransitionEnd
    );
    console.log('mounted', this.refs.current);
  };

  onTransitionEnd = () => {
    console.log('called');
    this.setState({
      sliding: null,
      view: DateUtilities.clone(this.state.other)
    });
    this.props.onTransitionEnd();
  };

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
  };

  render() {
    return (
      <StyledWeeksWrapper>
        <StyledWeeks ref="current" slide={this.state.sliding}>
          {this.renderWeeks(this.state.view)}
        </StyledWeeks>
        <StyledWeeks
          ref="other"
          right={this.state.sliding === 'right'}
          other
          slide={this.state.sliding}
        >
          {this.renderWeeks(this.state.other)}
        </StyledWeeks>
      </StyledWeeksWrapper>
    );
  }

  renderWeeks = view => {
    const starts = this.getWeekStartDates(view),
      month = starts[1].getMonth();
    return starts.map((s, i) => (
      <Week
        key={i}
        start={s}
        month={month}
        selected={this.props.selected}
        onSelect={this.props.onSelect}
        minDate={this.props.minDate}
        maxDate={this.props.maxDate}
      />
    ));
  };
}

export default Weeks;
