import React, { Component } from 'react'
import moment from 'moment'
import Week from './Week'
import { defaultUtils as utils } from './dateUtils'
import { withStyles } from '@material-ui/styles'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // height: 214,
    lineHeight: '1.25',
    position: 'relative'
  }
})

class Weeks extends Component {
  render () {
    const { classes } = this.props
    return <div className={classes.root}>{this.renderWeeks(this.props.displayDate)}</div>
  }

  renderWeeks = () => {
    console.log('first day of week', moment.localeData().firstDayOfWeek())
    const weekArray = utils.getWeekArray(
      this.props.displayDate,
      moment.localeData().firstDayOfWeek()
    )

    return weekArray.map(
      (s, i) => (
        <Week
          key={i}
          week={s}
          selectedDates={this.props.selectedDates}
          onSelect={this.props.onSelect}
          minDate={this.props.minDate}
          maxDate={this.props.maxDate}
        />
      ),
      this
    )
  }
}

export default withStyles(styles)(Weeks)
