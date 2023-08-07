import styled from 'styled-components/native'

export const Wrapper = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.white};
  height: 40px;
  border-radius: 8px;
  opacity: ${props => (props.disabled ? 0.6 : 1)};
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`

export const Label = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-family: 'OpenSans-SemiBold';
  font-size: 16px;
`
