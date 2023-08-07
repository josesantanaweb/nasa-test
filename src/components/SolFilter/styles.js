import styled from 'styled-components/native'

export const SolFilter = styled.TextInput`
  padding: 15px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.primary};
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  color: ${({theme}) => theme.colors.white};
  font-weight: 600;
  font-size: 16px;
`
