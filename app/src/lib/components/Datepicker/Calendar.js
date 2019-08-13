import React, { Component } from 'react'
import WeekHeader from './WeekHeader'
import Month from './Month'
import { defaultUtils as utils } from './dateUtils'
import CalendarToolbar from './CalendarToolbar'
import CalendarButtons from './CalendarButtons'
import DateDisplay from './DateDisplay'
import { withStyles } from '@material-ui/core'

// const Root = styled.div`
//   color: rgba(0, 0, 0, 0.87);
//   user-select: none;
//   overflow: auto;
//   max-width: 479px:
// `

// const CalendarContainer = styled.div`
//   display: flex;
//   justify-items: space-between;
//   flex-direction: column;
//   font-size: 12px;
//   font-weight: 400;
//   padding: 0px 8px;
//   transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
// `

const styles = theme => ({
  root: {
    flex: '1',
    display: 'flex',
    maxHeight: '100%',
    overflow: 'hidden'
  },
  selectorContainer: {
    // marginTop: theme.spacing(2)
    // boxShadow: 'inset 0 0 10px #000000'
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  calendarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: `0 ${theme.spacing(1)}px`
  }
})

// const StyledCalendar = styled.div`
//   display: flex;
//   flex-direction: column;
// `

class Calendar extends Component {
  static defaultProps = {
    disableYearSelection: false,
    initialDate: new Date()
  }

  state = {
    displayDate: undefined,
    displayMonthDay: undefined,
    selectedDate: undefined,
    transitionDirection: 'left',
    open: false,
    transitionEnter: true
  }

  componentWillMount () {
    this.setState({
      displayDate: utils.getFirstDayOfMonth(this.props.initialDate),
      selectedDate: this.props.initialDate,
      displayMonthDay: !this.props.openToYearSelection
    })
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.initialDate !== this.props.initialDate) {
      const date = nextProps.initialDate || new Date()
      this.setState({
        displayDate: utils.getFirstDayOfMonth(date),
        selectedDate: date
      })
    }
  }

  getMinDate () {
    return this.props.minDate || utils.addYears(new Date(), -100)
  }

  getMaxDate () {
    return this.props.maxDate || utils.addYears(new Date(), 100)
  }

  getSelectedDate () {
    return this.state.selectedDate
  }

  getToolbarInteractions () {
    return {
      prevMonth: utils.monthDiff(this.state.displayDate, this.getMinDate()) > 0,
      nextMonth: utils.monthDiff(this.state.displayDate, this.getMaxDate()) < 0
    }
  }

  handleMonthChange = months => {
    const direction = months >= 0 ? 'left' : 'right'
    this.setState({
      transitionDirection: direction,
      displayDate: utils.addMonths(this.state.displayDate, months)
    })
  }

  calendarRefs = {}

  render () {
    const { classes } = this.props
    const toolbarInteractions = this.getToolbarInteractions()
    return (
      <div className={classes.root}>
        <div className={classes.selectorContainer}>
          <div className={classes.calendarContainer}>
            <CalendarToolbar
              displayDate={this.state.displayDate}
              onMonthChange={this.handleMonthChange}
              prevMonth={toolbarInteractions.prevMonth}
              nextMonth={toolbarInteractions.nextMonth}
            />
            <WeekHeader />
            <Month
              displayDate={this.state.displayDate}
              key={this.state.displayDate.toDateString()}
              selectedDates={this.props.selectedDates}
              minDate={this.getMinDate()}
              maxDate={this.getMaxDate()}
              onSelect={this.props.onSelect}
              ref={ref => (this.calendarRefs.calendar = ref)}
            />
          </div>
          <CalendarButtons
            onCancel={this.props.onCancel}
            onOk={this.props.onOk}
            cancelButtonText={this.props.cancelButtonText}
            submitButtonText={this.props.submitButtonText}
          />
        </div>
        <DateDisplay
          selectedDatesTitle={this.props.selectedDatesTitle}
          selectedDates={this.props.selectedDates}
          onRemoveAtIndex={this.props.onRemoveAtIndex}
        />
      </div>
    )
  }
}

export default withStyles(styles)(Calendar)
