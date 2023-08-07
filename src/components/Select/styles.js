import styled from 'styled-components/native'

export const Select = styled.View`
  position: relative;
`

export const SelectHeader = styled.TouchableOpacity`
  margin-bottom: 15px;
  padding: 15px;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const SelectItems = styled.View`
  width: 100%;
  position: absolute;
  top: 80%;
  left: 0;
  background-color: ${({theme}) => theme.colors.primary};
  z-index: 100;
`

export const SelectItem = styled.TouchableOpacity`
  padding: 15px;
`
