import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { IconButton, Typography, withStyles } from '@material-ui/core'
import LeftIcon from '@material-ui/icons/ArrowLeft'
import RightIcon from '@material-ui/icons/ArrowRight'
import { makeStyles } from '@material-ui/styles'
import moment from 'moment'
import { dateTimeFormat } from './dateUtils'

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    margin: `${theme.spacing(1)}px 0`
  }
})

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

  state = {
    transitionDirection: 'up'
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.displayDate !== this.props.displayDate) {
      const direction = nextProps.displayDate > this.props.displayDate ? 'left' : 'right'
      this.setState({
        transitionDirection: direction
      })
    }
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
    const { classes, displayDate } = this.props

    const dateTimeFormatted = moment(displayDate).format('MMMM YYYY')
    // const dateTimeFormatted = new dateTimeFormat('en-US', {
    //   month: 'long',
    //   year: 'numeric'
    // }).format(displayDate)

    return (
      <div className={classes.root}>
        <IconButton disabled={!this.props.prevMonth} onClick={this.handleTouchTapPrevMonth}>
          <LeftIcon />
        </IconButton>
        <Typography variant='subtitle1'>{dateTimeFormatted}</Typography>
        <IconButton disabled={!this.props.nextMonth} onClick={this.handleTouchTapNextMonth}>
          <RightIcon />
        </IconButton>
      </div>
    )
  }
}

export default withStyles(styles)(CalendarToolbar)
