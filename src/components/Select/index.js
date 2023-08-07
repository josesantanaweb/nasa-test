import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

import Text from '../../components/Text'

import * as S from './styles'

const Select = ({options, setSelected, selected}) => {
  const [open, setOpen] = useState(false)

  const handleSelectCamera = item => {
    setSelected(item)
    setOpen(false)
  }

  return (
    <S.Select>
      <S.SelectHeader onPress={() => setOpen(!open)}>
        <Text size="medium" color="white">
          Camera: {selected}
        </Text>
        <Icon name="chevron-down" size={20} color="white" />
      </S.SelectHeader>
      {open && (
        <S.SelectItems>
          {options.map(item => (
            <S.SelectItem key={item} onPress={() => handleSelectCamera(item)}>
              <Text size="medium" color="white">
                {item}
              </Text>
            </S.SelectItem>
          ))}
        </S.SelectItems>
      )}
    </S.Select>
  )
}

export default Select
