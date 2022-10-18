import React, { useRef, useCallback, useState, useEffect } from 'react'
import WeekHeader from './WeekHeader'
import Month from './Month'
import { defaultUtils as utils } from './dateUtils'
import CalendarToolbar from './CalendarToolbar'
import CalendarButtons from './CalendarButtons'
import DateDisplay from './DateDisplay'
import { Box } from '@mui/material'

const Calendar = ({
  initialDate,
  maxDate,
  minDate,
  selectedDates,
  disabledDates,
  onSelect,
  onCancel,
  onOk,
  readOnly,
  onRemoveAtIndex,
  cancelButtonText,
  submitButtonText,
  selectedDatesTitle
}) => {
  const calendar = useRef(null)

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
    <Box
      flex='1'
      display='flex'
      maxHeight='100%'
      overflow='hidden'
    >
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
      >
        <Box
          display='flex'
          justifyContent='space-between'
          flexDirection='column'
          px={1}
        >
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
            disabledDates={disabledDates}
            minDate={minDate}
            maxDate={maxDate}
            onSelect={onSelect}
            readOnly={readOnly}
            ref={calendar}
          />
        </Box>
        <CalendarButtons
          readOnly={readOnly}
          onCancel={onCancel}
          onOk={onOk}
          cancelButtonText={cancelButtonText}
          submitButtonText={submitButtonText}
        />
      </Box>
      <DateDisplay
        selectedDatesTitle={selectedDatesTitle}
        selectedDates={selectedDates}
        readOnly={readOnly}
        onRemoveAtIndex={onRemoveAtIndex}
      />
    </Box>
  )
}

export default Calendar
