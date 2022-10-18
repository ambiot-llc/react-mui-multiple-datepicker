import React from 'react'
import { Typography, styled } from '@mui/material'
import moment from 'moment'

const BoxRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  textAlign: 'center',
  marginBottom: theme.spacing(1),
  '& > *': {
    width: 36,
    margin: `${theme.spacing(0, 1)} !important`,
    [theme.breakpoints.down('xs')]: {
      margin: `0 2px`,
    }
  }
}))

const Week = props => <Typography variant='overline' color='textSecondary' {...props} />

const WeekHeader = () => {

  const weekdayNames = moment.weekdaysShort(true)

  return (
    <BoxRoot>
      {weekdayNames.map(name => (
        <Week key={name}>{name}</Week>
      ))}
    </BoxRoot>
  )
}

export default WeekHeader
