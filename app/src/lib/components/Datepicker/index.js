import React, { useReducer, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import DateUtilities from './utils'
import Calendar from './Calendar'
import { Dialog, useTheme } from '@mui/material'

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
  readOnly,
  onCancel,
  onSubmit,
  selectedDates: outerSelectedDates,
  disabledDates,
  DialogProps,
  cancelButtonText,
  submitButtonText = 'Submit',
  selectedDatesTitle = 'Selected Dates'
}) => {
  const theme = useTheme()

  if (cancelButtonText == null) {
    cancelButtonText = readOnly ? 'Dismiss' : 'Cancel'
  }

  const [{ selectedDates, minDate, maxDate }, dispatch] = useReducer(
    reducer,
    outerSelectedDates,
    initState
  )

  const onSelect = useCallback(
    day => {
      if (readOnly) return

      if (DateUtilities.dateIn(selectedDates, day)) {
        dispatch({
          type: 'setSelectedDates',
          payload: selectedDates.filter(date => !DateUtilities.isSameDay(date, day))
        })
      } else {
        dispatch({ type: 'setSelectedDates', payload: [...selectedDates, day] })
      }
    },
    [selectedDates, dispatch, readOnly]
  )

  const onRemoveAtIndex = useCallback(
    index => {
      if (readOnly) return
      const newDates = [...selectedDates]
      if (index > -1) {
        newDates.splice(index, 1)
      }

      dispatch({ type: 'setSelectedDates', payload: newDates })
    },
    [selectedDates, dispatch, readOnly]
  )

  const dismiss = useCallback(
    () => {
      dispatch({ type: 'setSelectedDates', payload: [] })
      onCancel()
    },
    [dispatch, onCancel]
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
      if (readOnly) return
      onSubmit(selectedDates)
    },
    [onSubmit, selectedDates, readOnly]
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
    [open, outerSelectedDates]
  )

  return (
    <Dialog
      {...DialogProps}
      open={open} 
      PaperProps={{
        sx: {
          minHeight: 482,
          maxHeight: 482,
          display: 'flex',
        }
      }}
      xs={{
        margin: theme.spacing(1)
      }}
    >
      {/* <DialogContent> */}
      <Calendar
        selectedDates={selectedDates}
        disabledDates={disabledDates}
        onSelect={onSelect}
        onRemoveAtIndex={onRemoveAtIndex}
        minDate={minDate}
        maxDate={maxDate}
        onCancel={handleCancel}
        onOk={handleOk}
        readOnly={readOnly}
        cancelButtonText={cancelButtonText}
        submitButtonText={submitButtonText}
        selectedDatesTitle={selectedDatesTitle}
      />
      {/* </DialogContent> */}
    </Dialog>
  )
}

DatePicker.propTypes = {
  open: PropTypes.bool.isRequired,
  readOnly: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  selectedDates: PropTypes.array,
  cancelButtonText: PropTypes.string,
  submitButtonText: PropTypes.string,
  selectedDatesTitle: PropTypes.string
}

export default DatePicker
