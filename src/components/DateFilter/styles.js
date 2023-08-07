import styled from 'styled-components/native'

export const DateFilterItems = styled.View``

export const DateFilterItem = styled.TouchableOpacity`
  margin-bottom: 15px;
  padding: 15px;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
