import React, { Component } from 'react'
import { Box, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Clear'
import moment from 'moment'

class DateDisplayWithoutTheme extends Component {
  state = {
    selectedYear: false
  }

  componentDidMount () {
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
    const { theme, selectedDates, readOnly } = this.props
    console.log('fdgdfgfdg', theme)

    return (
      <Box
        width={240}
        backgroundColor={theme.palette.background.default}
        flexDirection='column'
        sx={{
          display: { xs: 'none', sm: 'flex' }
        }}
      >
        <Box
          margin={2}
          display='flex'
          alignItems='center'
          alignContent='center'
          justifyContent='space-between'
        >
          <Typography variant='subtitle1'>{this.props.selectedDatesTitle}</Typography>
          <Typography variant='subtitle1' color={readOnly ? 'textSecondary' : 'primary'}>
            {selectedDates.length}
          </Typography>
        </Box>
        <List 
          dense 
          style={{
            flex: '1',
            overflowY: 'auto'
          }}
        >
          {selectedDates.map((date, index) => (
            <ListItem
              key={`${date.toString()}`}
              button={readOnly}
              disabled={readOnly}
              onClick={this.removeDateAtIndex(index)}
            >
              <ListItemText primary={this.getFormatedDate(date)} />
              {!readOnly && <DeleteIcon color='error' />}
            </ListItem>
          ))}
        </List>
      </Box>
    )
  }
}

const DateDisplay = props => (
  <DateDisplayWithoutTheme
    {...props}
    theme={useTheme()}
  />
)

export default DateDisplay
