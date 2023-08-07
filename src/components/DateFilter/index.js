import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import moment from 'moment/moment'

import Text from '../../components/Text'

import DatePicker from 'react-native-date-picker'

import * as S from './styles'

const DateFilter = ({title, date, setDate, open, setOpen}) => {
  return (
    <S.DateFilterItems>
      <S.DateFilterItem onPress={() => setOpen(true)}>
        <Text size="medium" color="white">
          {title}: {moment(date).format('DD MMM YYYY')}
        </Text>
        <Icon name="calendar-outline" size={20} color="white" />
      </S.DateFilterItem>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </S.DateFilterItems>
  )
}

export default DateFilter
