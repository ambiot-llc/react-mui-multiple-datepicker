import React, { Component } from 'react'
import DateUtilities from './utils'
import Calendar from './Calendar'
import { Dialog } from '@material-ui/core'

class DatePicker extends Component {
  constructor (props) {
    super(props)
    const def = props.selected || new Date()

    this.state = {
      view: DateUtilities.clone(def),
      selected: DateUtilities.clone(def),
      selectedDates: props.selected ? [DateUtilities.clone(def)] : [],
      minDate: null,
      maxDate: null,
      open: false
    }
  }

  onSelect = day => {
    const { selectedDates } = this.state
    if (DateUtilities.dateIn(selectedDates, day)) {
      this.setState({
        selectedDates: selectedDates.filter(date => !DateUtilities.isSameDay(date, day))
      })
    } else {
      this.setState({ selectedDates: [...selectedDates, day] })
    }
  }

  onSubmit = () => {}

  toggleOpen = () => {
    this.setState({ open: !this.state.open })
  }

  handleCancel = e => {
    e.preventDefault()
    this.dismiss()
  }

  handleRequestClose = () => {
    this.dismiss()
  }

  handleOk = e => {
    e.preventDefault()
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.selectedDates)
    }

    this.setState({
      open: false
    })
  }

  dismiss = () => {
    if (this.props.onDismiss && this.state.open) {
      this.props.onDismiss()
    }

    this.setState({
      open: false
    })
  }

  render () {
    const { children } = this.props

    return (
      <div>
        {children ? (
          React.cloneElement(React.Children.only(children), {
            onClick: this.toggleOpen,
            value: this.state.selectedDates.map(date => DateUtilities.toString(date)).join(', '),
            readOnly: true
          })
        ) : (
          <input
            type='text'
            readOnly
            value={this.state.selectedDates.map(date => DateUtilities.toString(date)).join(', ')}
            onClick={this.toggleOpen}
          />
        )}{' '}
        <StyledDatePicker open={this.state.open}>
          <Dialog>
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
          </Dialog>
        </StyledDatePicker>
      </div>
    )
  }
}

export default DatePicker
