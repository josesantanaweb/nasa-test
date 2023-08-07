import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  flex: 1;
`

export const Rovers = styled.View`
  padding: 20px;
`

export const RoversTitle = styled.View`
  margin-bottom: 20px;
`

export const RoversItems = styled.View``

export const RoversItem = styled.TouchableOpacity`
  margin-bottom: 15px;
  padding: 15px;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
