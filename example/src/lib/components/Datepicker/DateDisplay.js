import React, { Component } from 'react'
import { withStyles, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Clear'
import { dateTimeFormat } from './dateUtils'
import moment from 'moment'

const styles = theme => ({
  root: {
    width: theme.spacing(30),
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    margin: theme.spacing(2),
    // width: '100%',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between'
  },
  list: {
    flex: '1',
    overflowY: 'scroll'
  }
})

class DateDisplay extends Component {
  state = {
    selectedYear: false
  }

  componentWillMount () {
    if (!this.props.monthDaySelected) {
      this.setState({ selectedYear: true })
    }
  }

  getFormatedDate = date => {
    // const dateTime = new dateTimeFormat('en-US', {
    //   year: 'numeric',
    //   month: 'short',
    //   day: '2-digit'
    // }).format(date)

    // return `${dateTime}`

    return moment(date).format('ll')
  }

  removeDateAtIndex = index => () => {
    this.props.onRemoveAtIndex(index)
  }

  render () {
    const { classes, selectedDates } = this.props

    console.log('selected dates', selectedDates)

    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <Typography variant='subtitle1'>{this.props.selectedDatesTitle}</Typography>
          <Typography variant='subtitle1' color='primary'>
            {selectedDates.length}
          </Typography>
        </div>
        <List dense className={classes.list}>
          {selectedDates.map((date, index) => (
            <ListItem key={`${date.toString()}`} button onClick={this.removeDateAtIndex(index)}>
              <ListItemText primary={this.getFormatedDate(date)} />
              <DeleteIcon color='error' />
            </ListItem>
          ))}
        </List>
      </div>
    )
  }
}

export default withStyles(styles)(DateDisplay)
