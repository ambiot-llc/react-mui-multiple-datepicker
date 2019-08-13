import React, { Component, useReducer, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import DateUtilities from './utils'
import Calendar from './Calendar'
import { Dialog, DialogContent, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  dialogPaper: {
    minHeight: 448,
    maxHeight: 448,
    display: 'flex'
  }
}))

function initState (selectedDates) {
  return {
    selectedDates: selectedDates ? [...selectedDates] : [],
    minDate: null,
    maxDate: null
  }
}

function reducer (state, action) {
  switch (action.type) {
    case 'setSelectedDates':
      return { ...state, selectedDates: action.payload }
    default:
      return new Error('wrong action type in multiple date picker reducer')
  }
}

const DatePicker = ({
  open,
  onCancel,
  onSubmit,
  selectedDates: outerSelectedDates,
  cancelButtonText = 'Cancel',
  submitButtonText = 'Submit',
  selectedDatesTitle = 'Selected Dates'
}) => {
  const [{ selectedDates, minDate, maxDate }, dispatch] = useReducer(
    reducer,
    outerSelectedDates,
    initState
  )

  const classes = useStyles()

  const onSelect = useCallback(
    day => {
      if (DateUtilities.dateIn(selectedDates, day)) {
        dispatch({
          type: 'setSelectedDates',
          payload: selectedDates.filter(date => !DateUtilities.isSameDay(date, day))
        })
      } else {
        dispatch({ type: 'setSelectedDates', payload: [...selectedDates, day] })
      }
    },
    [selectedDates, dispatch]
  )

  const onRemoveAtIndex = useCallback(
    index => {
      const newDates = [...selectedDates]
      if (index > -1) {
        newDates.splice(index, 1)
      }

      dispatch({ type: 'setSelectedDates', payload: newDates })
    },
    [selectedDates, dispatch]
  )

  const dismiss = useCallback(
    () => {
      dispatch({ type: 'setSelectedDates', payload: [] })
      onCancel()
    },
    [dispatch]
  )

  const handleCancel = useCallback(
    e => {
      e.preventDefault()
      dismiss()
    },
    [dismiss]
  )

  const handleOk = useCallback(
    e => {
      e.preventDefault()
      onSubmit(selectedDates)
    },
    [onSubmit, selectedDates]
  )

  useEffect(
    () => {
      if (open) {
        dispatch({
          type: 'setSelectedDates',
          payload: outerSelectedDates != null ? outerSelectedDates : []
        })
      }
    },
    [open]
  )

  return (
    <div>
      <Dialog open={open} classes={{ paper: classes.dialogPaper }}>
        {/* <DialogContent> */}
        <Calendar
          selectedDates={selectedDates}
          onSelect={onSelect}
          onRemoveAtIndex={onRemoveAtIndex}
          minDate={minDate}
          maxDate={maxDate}
          onCancel={handleCancel}
          onOk={handleOk}
          cancelButtonText={cancelButtonText}
          submitButtonText={submitButtonText}
          selectedDatesTitle={selectedDatesTitle}
        />
        {/* </DialogContent> */}
      </Dialog>
    </div>
  )
}

DatePicker.propTypes = {
  open: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

// class DatePicker extends Component {
//   static propTypes = {
//     open: PropTypes.bool.isRequired,
//     onCancel: PropTypes.func.isRequired,
//     onSubmit: PropTypes.func.isRequired
//   }

//   constructor (props) {
//     super(props)
//     const def = props.selected || new Date()

//     this.state = {
//       view: DateUtilities.clone(def),
//       selected: DateUtilities.clone(def),
//       selectedDates: props.selected ? [DateUtilities.clone(def)] : [],
//       minDate: null,
//       maxDate: null
//     }
//   }

//   onSelect = day => {
//     const { selectedDates } = this.state
//     if (DateUtilities.dateIn(selectedDates, day)) {
//       this.setState({
//         selectedDates: selectedDates.filter(date => !DateUtilities.isSameDay(date, day))
//       })
//     } else {
//       this.setState({ selectedDates: [...selectedDates, day] })
//     }
//   }

//   onRemoveAtIndex = index => {
//     const { selectedDates } = this.state
//     const newDates = [...selectedDates]
//     if (index > -1) {
//       newDates.splice(index, 1)
//     }

//     this.setState({ selectedDates: newDates })
//   }

//   handleCancel = e => {
//     e.preventDefault()
//     this.dismiss()
//   }

//   handleRequestClose = () => {
//     this.dismiss()
//   }

//   handleOk = e => {
//     e.preventDefault()
//     this.props.onSubmit(this.state.selectedDates)
//   }

//   dismiss = () => {
//     this.setState({ selectedDates: [] })
//     this.props.onCancel()
//   }

//   render () {
//     const { open } = this.props

//     return (
//       <div>
//         <Dialog open={open}>
//           {/* <DialogContent> */}
//           <Calendar
//             view={this.state.view}
//             selected={this.state.selected}
//             selectedDates={this.state.selectedDates}
//             onSelect={this.onSelect}
//             onRemoveAtIndex={this.onRemoveAtIndex}
//             minDate={this.props.minDate}
//             maxDate={this.props.maxDate}
//             onCancel={this.handleCancel}
//             onOk={this.handleOk}
//           />
//           {/* </DialogContent> */}
//         </Dialog>
//       </div>
//     )
//   }
// }

export default DatePicker
