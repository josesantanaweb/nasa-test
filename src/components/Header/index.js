import React from 'react'

import Text from '../../components/Text'

import * as S from './styles'

const Header = ({navigation}) => {
  return (
    <S.Header>
      <Text size="medium" uppercase="uppercase" color="white">
        Mars Rovers
      </Text>
    </S.Header>
  )
}

export default Header
