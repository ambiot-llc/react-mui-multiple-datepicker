import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    marginBottom: theme.spacing(1),
    '& > *': {
      width: 36,
      margin: `0 ${theme.spacing(1)}px`
    }
  }
}))

const Week = props => <Typography variant='overline' color='textSecondary' {...props} />

const WeekHeader = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Week>S</Week>
      <Week>M</Week>
      <Week>T</Week>
      <Week>W</Week>
      <Week>T</Week>
      <Week>F</Week>
      <Week>S</Week>
    </div>
  )
}

export default WeekHeader
