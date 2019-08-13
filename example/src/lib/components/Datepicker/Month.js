import React, { Component } from 'react'
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
    const weekArray = utils.getWeekArray(this.props.displayDate, 1)

    return weekArray.map(
      (s, i) => (
        <Week
          key={i}
          week={s}
          selected={this.props.selected}
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
