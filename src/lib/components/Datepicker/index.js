import React, { Component } from 'react';
import styled from 'styled-components';
import DateUtilities from './utils';
import Calendar from './Calendar';
const StyledDatePicker = styled.div`
  font-size: 16px;
  font-family: Arial;
  box-sizing: border-box;
`;

class DatePicker extends Component {
  constructor(props) {
    super(props);
    const def = props.selected || new Date();

    this.state = {
      view: DateUtilities.clone(def),
      selected: DateUtilities.clone(def),
      minDate: null,
      maxDate: null,
      visible: true
    };
  }

  onSelect = day => {
    this.setState({ selected: day });
    this.props.onSelect(day);
  };

  toggleVisible = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <StyledDatePicker>
        <input
          type="text"
          readOnly={true}
          value={DateUtilities.toString(this.state.selected)}
          onClick={this.toggleVisible}
        />
        <Calendar
          visible={this.state.visible}
          view={this.state.view}
          selected={this.state.selected}
          onSelect={this.onSelect}
          minDate={this.state.minDate}
          maxDate={this.state.maxDate}
        />
      </StyledDatePicker>
    );
  }
}

export default DatePicker;
