import React, { Component } from 'react';
import styled from 'styled-components';
import DateUtilities from './utils';
import Calendar from './Calendar';

const StyledDatePicker = styled.div`
  position: fixed;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  z-index: 1500;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  transition: left 0ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  padding: 16px 0px 0px;
  min-height: 330px;
  min-width: 479px;
  ${({ open }) => !open && 'display: none'};
`;

const Backdrop = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.54);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  will-change: opacity;
  transform: translateZ(0px);
  transition: left 0ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 400ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  z-index: 1400;
`;

const Dialog = styled.div`
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  position: relative;
  width: 479px;
  max-width: 768px;
  margin: 0px auto;
  z-index: 1500;
  opacity: 1;
  transform: translate(0px, 64px);
`;

const DialogInnerWrap = styled.div`
  color: rgba(0, 0, 0, 0.87);
  background-color: rgb(255, 255, 255);
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 45px, rgba(0, 0, 0, 0.22) 0px 10px 18px;
  border-radius: 2px;
`;

const DialogContent = styled.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
  padding: 0px;
  box-sizing: border-box;
  overflow-y: hidden;
  border-top: none;
  border-bottom: none;
  min-height: 330px;
  min-width: 479px;
`;

class DatePicker extends Component {
  constructor(props) {
    super(props);
    const def = props.selected || new Date();

    this.state = {
      view: DateUtilities.clone(def),
      selected: DateUtilities.clone(def),
      selectedDates: props.selected ? [DateUtilities.clone(def)] : [],
      minDate: null,
      maxDate: null,
      open: false,
    };
  }

  onSelect = day => {
    const { selectedDates } = this.state;
    if (DateUtilities.dateIn(selectedDates, day)) {
      this.setState({
        selectedDates: selectedDates.filter(date => !DateUtilities.isSameDay(date, day)),
      });
    } else {
      this.setState({ selectedDates: [...selectedDates, day] });
    }
  };

  onSubmit = () => {};

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  handleCancel = (e) => {
    e.preventDefault()
    this.dismiss();
  };

  handleRequestClose = () => {
    this.dismiss();
  };

  handleOk = (e) => {
    e.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.selectedDates);
    }

    this.setState({
      open: false,
    });
  };

  dismiss = () => {
    if (this.props.onDismiss && this.state.open) {
      this.props.onDismiss();
    }

    this.setState({
      open: false,
    });
  };

  render() {
    const { children } = this.props;

    return (
      <div>
        {children ? (
          React.cloneElement(React.Children.only(children), {
            onClick: this.toggleOpen,
            value: this.state.selectedDates.map(date => DateUtilities.toString(date)).join(', '),
            readOnly: true,
          })
        ) : (
          <input
            type="text"
            readOnly
            value={this.state.selectedDates.map(date => DateUtilities.toString(date)).join(', ')}
            onClick={this.toggleOpen}
          />
        )}{' '}
        <StyledDatePicker open={this.state.open}>
          <Dialog>
            <DialogInnerWrap>
              <DialogContent>
                <Calendar
                  visible={this.state.visible}
                  view={this.state.view}
                  selected={this.state.selected}
                  selectedDates={this.state.selectedDates}
                  onSelect={this.onSelect}
                  minDate={this.props.minDate}
                  maxDate={this.props.maxDate}
                  onCancel={this.handleCancel}
                  onOk={this.handleOk}
                />
              </DialogContent>
            </DialogInnerWrap>
          </Dialog>
          <Backdrop />
        </StyledDatePicker>
      </div>
    );
  }
}

export default DatePicker;
