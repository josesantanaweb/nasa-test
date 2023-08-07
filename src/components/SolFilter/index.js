import React from 'react'

import * as S from './styles'

const SolFilter = ({value, setValue}) => {
  return (
    <S.SolFilter
      keyboardType="numeric"
      maxLength={3}
      value={value.toString()}
      onChangeText={e => {
        setValue(e)
      }}
    />
  )
}

export default SolFilter
