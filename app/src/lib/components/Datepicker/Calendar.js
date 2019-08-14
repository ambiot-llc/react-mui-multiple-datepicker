import React, { useRef, useCallback, useState, useEffect } from 'react'
import WeekHeader from './WeekHeader'
import Month from './Month'
import { defaultUtils as utils } from './dateUtils'
import CalendarToolbar from './CalendarToolbar'
import CalendarButtons from './CalendarButtons'
import DateDisplay from './DateDisplay'
import { makeStyles } from '@material-ui/core'

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

const useStyles = makeStyles(theme => ({
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
}))

// const StyledCalendar = styled.div`
//   display: flex;
//   flex-direction: column;
// `

const Calendar = ({
  initialDate,
  maxDate,
  minDate,
  selectedDates,
  onSelect,
  onCancel,
  onOk,
  onRemoveAtIndex,
  cancelButtonText,
  submitButtonText,
  selectedDatesTitle
}) => {
  const calendar = useRef(null)
  const classes = useStyles()

  const [displayDate, setDisplayDate] = useState(() =>
    utils.getFirstDayOfMonth(initialDate || new Date())
  )

  const handleMonthChange = useCallback(
    months => {
      setDisplayDate(displayDate => utils.addMonths(displayDate, months))
    },
    [setDisplayDate]
  )

  useEffect(
    () => {
      setDisplayDate(utils.getFirstDayOfMonth(initialDate || new Date()))
    },
    [initialDate]
  )

  maxDate = maxDate || utils.addYears(new Date(), 100)
  minDate = minDate || utils.addYears(new Date(), -100)

  const toolbarInteractions = {
    prevMonth: utils.monthDiff(displayDate, minDate) > 0,
    nextMonth: utils.monthDiff(displayDate, maxDate) < 0
  }

  return (
    <div className={classes.root}>
      <div className={classes.selectorContainer}>
        <div className={classes.calendarContainer}>
          <CalendarToolbar
            displayDate={displayDate}
            onMonthChange={handleMonthChange}
            prevMonth={toolbarInteractions.prevMonth}
            nextMonth={toolbarInteractions.nextMonth}
          />
          <WeekHeader />
          <Month
            displayDate={displayDate}
            key={displayDate.toDateString()}
            selectedDates={selectedDates}
            minDate={minDate}
            maxDate={maxDate}
            onSelect={onSelect}
            ref={calendar}
          />
        </div>
        <CalendarButtons
          onCancel={onCancel}
          onOk={onOk}
          cancelButtonText={cancelButtonText}
          submitButtonText={submitButtonText}
        />
      </div>
      <DateDisplay
        selectedDatesTitle={selectedDatesTitle}
        selectedDates={selectedDates}
        onRemoveAtIndex={onRemoveAtIndex}
      />
    </div>
  )
}

export default Calendar

// class Calendar extends Component {
//   static defaultProps = {
//     disableYearSelection: false,
//     initialDate: new Date()
//   }

//   constructor (props) {
//     super(props)
//     this.state = {
//       displayDate: utils.getFirstDayOfMonth(props.initialDate),
//       displayMonthDay: !props.openToYearSelection,
//       selectedDate: props.initialDate,
//       transitionDirection: 'left',
//       open: false,
//       transitionEnter: true
//     }
//   }

//   componentWillReceiveProps (nextProps) {
//     if (nextProps.initialDate !== this.props.initialDate) {
//       const date = nextProps.initialDate || new Date()
//       this.setState({
//         displayDate: utils.getFirstDayOfMonth(date),
//         selectedDate: date
//       })
//     }
//   }

//   getMinDate () {
//     return this.props.minDate || utils.addYears(new Date(), -100)
//   }

//   getMaxDate () {
//     return this.props.maxDate || utils.addYears(new Date(), 100)
//   }

//   getSelectedDate () {
//     return this.state.selectedDate
//   }

//   handleMonthChange = months => {
//     const direction = months >= 0 ? 'left' : 'right'
//     this.setState({
//       transitionDirection: direction,
//       displayDate: utils.addMonths(this.state.displayDate, months)
//     })
//   }

//   calendarRefs = {}
// }

// export default withStyles(styles)(Calendar)
