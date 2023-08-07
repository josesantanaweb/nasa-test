import React from 'react'

import PropTypes from 'prop-types'

import {Text as StyledText} from './styles'

const Text = ({children, color, size, align, uppercase, style, family}) => {
  return (
    <StyledText
      color={color}
      size={size}
      style={style}
      family={family}
      align={align}
      uppercase={uppercase}>
      {children}
    </StyledText>
  )
}

Text.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  uppercase: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Text.defaultProps = {
  uppercase: 'capitalize',
  size: 'small',
  disabled: false,
}

export default Text
