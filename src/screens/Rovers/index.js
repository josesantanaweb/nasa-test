import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

import Header from '../../components/Header'
import Text from '../../components/Text'

import * as S from './styles'

const Rovers = ({navigation}) => {
  return (
    <S.Container>
      <Header />
      <S.Rovers>
        <S.RoversTitle>
          <Text size="medium" color="white">
            Rovers
          </Text>
        </S.RoversTitle>
        <S.RoversItems>
          <S.RoversItem
            testID="rover-button"
            onPress={() =>
              navigation.navigate('Rover', {
                rover: 'Curiosity',
              })
            }>
            <Text size="medium" color="white">
              Curiosity
            </Text>
            <Icon name="chevron-forward" size={20} color="white" />
          </S.RoversItem>
          <S.RoversItem
            onPress={() =>
              navigation.navigate('Rover', {
                rover: 'Opportunity',
              })
            }>
            <Text size="medium" color="white">
              Opportunity
            </Text>
            <Icon name="chevron-forward" size={20} color="white" />
          </S.RoversItem>
          <S.RoversItem
            onPress={() =>
              navigation.navigate('Rover', {
                rover: 'Spirit',
              })
            }>
            <Text size="medium" color="white">
              Spirit
            </Text>
            <Icon name="chevron-forward" size={20} color="white" />
          </S.RoversItem>
        </S.RoversItems>
      </S.Rovers>
    </S.Container>
  )
}

export default Rovers
