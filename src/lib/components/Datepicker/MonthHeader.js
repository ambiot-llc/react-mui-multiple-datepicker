import React, { Component } from 'react';
import styled from 'styled-components';
import DateUtilities from './utils';

const StyledMonthHeader = styled.div`
  float: left;
  width: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.i`
  font-weight: bold;
  padding: 5px 8px;
  border-radius: 3px;
  cursor: pointer;
  font-style: normal;
  font-size: 0.7em;
  :hover {
    background-color: #026aa7;
    color: white;
  }
`;
class MonthHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: DateUtilities.clone(this.props.view),
      enabled: true
    };
  }

  moveBackward = () => {
    var view = DateUtilities.clone(this.state.view);
    view.setMonth(view.getMonth() - 1);
    this.move(view, false);
  };

  moveForward = () => {
    var view = DateUtilities.clone(this.state.view);
    view.setMonth(view.getMonth() + 1);
    this.move(view, true);
  };

  move = (view, isForward) => {
    if (!this.state.enabled) return;

    this.setState({
      view: view,
      enabled: false
    });

    this.props.onMove(view, isForward);
  };

  enable = () => {
    this.setState({ enabled: true });
  };

  render() {
    const { enabled } = this.state;
    return (
      <StyledMonthHeader>
        <Icon onClick={this.moveBackward}>{String.fromCharCode(9664)}</Icon>
        <span>{DateUtilities.toMonthAndYearString(this.state.view)}</span>
        <Icon onClick={this.moveForward}>{String.fromCharCode(9654)}</Icon>
      </StyledMonthHeader>
    );
  }
}

export default MonthHeader;
