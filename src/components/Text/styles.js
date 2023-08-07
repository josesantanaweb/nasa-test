import styled from 'styled-components/native'

export const Text = styled.Text`
  text-align: ${({align}) => (align === 'center' ? 'center' : 'left')};
  font-family: 'OpenSans-SemiBold';
  color: ${({color, theme}) =>
    color === 'black'
      ? theme.colors.black
      : color === 'white'
      ? theme.colors.white
      : theme.colors.graydark};
  text-transform: ${({uppercase}) =>
    uppercase === 'uppercase' ? 'uppercase' : 'capitalize'};
  font-size: ${({size}) =>
    size === 'small'
      ? '14px'
      : size === 'normal'
      ? '16px'
      : size === 'medium'
      ? '18px'
      : size === 'large'
      ? '24px'
      : size === 'xlarge'
      ? '36px'
      : '12px'};
`
