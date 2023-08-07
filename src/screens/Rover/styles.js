import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  flex: 1;
`

export const Rover = styled.View`
  padding: 20px;
  flex: 1;
`

export const RoverTop = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
  gap: 20px;
`

export const RoverTitle = styled.View`
  margin-left: 20px;
`

export const RoverPhotos = styled.ScrollView`
  flex: 1;
  flex-direction: column;
  margin: 5px;
`

export const RoverPhoto = styled.Image`
  height: 170px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`

export const Paginate = styled.TouchableOpacity`
  margin-top: 20px;
  margin-left: auto;
  flex-direction: row;
`

export const PaginateItem = styled.TouchableOpacity`
  padding: 15px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.primary};
  width: 50px;
  height: 50px;
  margin: 5px;
`
