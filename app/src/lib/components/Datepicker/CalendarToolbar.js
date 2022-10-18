import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Box, IconButton, Typography } from '@mui/material'
import LeftIcon from '@mui/icons-material/ArrowLeft'
import RightIcon from '@mui/icons-material/ArrowRight'
import moment from 'moment'
import { capitalizeFirstLetter } from './utils'
class CalendarToolbar extends Component {
  static propTypes = {
    displayDate: PropTypes.object.isRequired,
    nextMonth: PropTypes.bool,
    onMonthChange: PropTypes.func,
    prevMonth: PropTypes.bool
  }

  static defaultProps = {
    nextMonth: true,
    prevMonth: true
  }

  handleTouchTapPrevMonth = e => {
    e.preventDefault()
    if (this.props.onMonthChange) {
      this.props.onMonthChange(-1)
    }
  }

  handleTouchTapNextMonth = e => {
    e.preventDefault()
    if (this.props.onMonthChange) {
      this.props.onMonthChange(1)
    }
  }

  render () {
    const { displayDate } = this.props

    const dateTimeFormatted = moment(displayDate).format('MMMM YYYY')
    // const dateTimeFormatted = new dateTimeFormat('en-US', {
    //   month: 'long',
    //   year: 'numeric'
    // }).format(displayDate)

    return (
      <Box
        display='flex'
        alignItems='center'
        alignContent='center'
        justifyContent='space-between'
        my={1}
      >
        <IconButton disabled={!this.props.prevMonth} onClick={this.handleTouchTapPrevMonth}>
          <LeftIcon />
        </IconButton>
        <Typography variant='subtitle1'>{capitalizeFirstLetter(dateTimeFormatted)}</Typography>
        <IconButton disabled={!this.props.nextMonth} onClick={this.handleTouchTapNextMonth}>
          <RightIcon />
        </IconButton>
      </Box>
    )
  }
}

export default CalendarToolbar
