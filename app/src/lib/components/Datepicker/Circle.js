import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Typography, ButtonBase, useTheme } from '@mui/material'

const Circle = ({ label, disabled, checked, onCheck, isToday, sx, ...props }) => {
  const theme = useTheme()

  const handleClick = useCallback(
    () => {
      if (!disabled) {
        onCheck(!checked)
      }
    },
    [onCheck, disabled, checked]
  )

  return (
    <ButtonBase
      sx={{
        ...sx,
        width: 36,
        height: 36,
        borderRadius: '50%',
        background: isToday 
          ? theme.palette.background.default 
          : checked && !disabled 
            ? theme.palette.primary.main
            : checked && disabled
              ? theme.palette.action.disabled
              : 'rgba(0, 0, 0, 0)',
        color: !checked && !disabled 
          ? theme.palette.text.primary 
          : disabled 
            ? theme.palette.text.disabled 
            : undefined
      }}
      disabled={disabled}
      onClick={handleClick}
    >
      <Typography
        color='inherit'
        variant='body1'
        align='center'
        style={{
          color: !checked 
            ? undefined 
            : theme.palette.type === 'dark'
              ? theme.palette.getContrastText(theme.palette.primary.main)
              : theme.palette.common.white
        }}
      >
        {label}
      </Typography>
    </ButtonBase>
  )
}

Circle.propTypes = {
  classes: PropTypes.object,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
  checked: PropTypes.bool.isRequired,
  onCheck: PropTypes.func.isRequired,
  className: PropTypes.string
}

export default Circle
