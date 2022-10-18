import React, { Component } from 'react'
import { Box } from '@mui/material'
import DateUtilities from './utils'
import { dateTimeFormat } from './dateUtils'
import Circle from './Circle'

class Week extends Component {
  onSelect = day => {
    if (!this.isDisabled(day)) this.props.onSelect(day)
  }

  isDisabled = day => {
    if (this.props.readOnly) return true

    const disabledDate = this.props.disabledDates && this.props.disabledDates.find(d => DateUtilities.isSameDay(d, day))
    if (disabledDate != null) return true

    let minDate = this.props.minDate

    let maxDate = this.props.maxDate

    return (
      (minDate && DateUtilities.isBefore(day, minDate)) ||
      (maxDate && DateUtilities.isAfter(day, maxDate))
    )
  }

  isSelected = day =>
    this.props.selectedDates && DateUtilities.dateIn(this.props.selectedDates, day)

  render () {
    const dateInNumberic = new dateTimeFormat('en-US', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    })

    const dateToday = dateInNumberic.format(new Date())

    const dayInNumeric = new dateTimeFormat('en-US', {
      day: 'numeric'
    })

    return (
      <Box
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
        height={34}
        marginBottom={2}
      >
        {this.props.week.map((day, i) => {
          if (day) {
            const isToday = day && dateToday === dateInNumberic.format(day)
            const isDisabled = this.isDisabled(day)
            const isSelected = this.isSelected(day)

            return (
              <Circle
                key={`day-${day}`}
                label={dayInNumeric.format(day)}
                disabled={isDisabled}
                checked={isSelected}
                onCheck={e => {
                  this.onSelect(day)
                }}
                isToday={isToday}
                xs={{
                  margin: `0 2px`,
                }}
                sx={{
                  margin: '0 8px'
                }}
              />
            )
          }
          return (
            <Box 
              key={`blank-${i}`}
              xs={{
                margin: `0 2px`,
              }}
              mx={1}
              width={36}
              height={36}
            />
          )
        })}
      </Box>
    )
  }
}

export default Week
