import React from 'react'

import PropTypes from 'prop-types'

import {Wrapper, Label} from './styles'

const Button = ({label, variant, disabled, onPress, icon, ...props}) => {
  return (
    <Wrapper onPress={onPress} variant={variant} disabled={disabled} {...props}>
      <Label variant={variant}>{label}</Label>
    </Wrapper>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
}

Button.defaultProps = {
  variant: 'primary',
  disabled: false,
}

export default Button
