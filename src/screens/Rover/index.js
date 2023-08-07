/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import api from '../../api/axios'
import moment from 'moment/moment'

import Header from '../../components/Header'
import Text from '../../components/Text'
import Button from '../../components/Button'
import DateFilter from '../../components/DateFilter'
import Select from '../../components/Select'
import SolFilter from '../../components/SolFilter'

import {FlatList} from 'react-native'

import * as S from './styles'

const optionsCameras = [
  'FHAZ',
  'RHAZ',
  'MAST',
  'CHEMCAM',
  'MAHLI',
  'MARDI',
  'NAVCAM',
  'PANCAM',
  'MINITES',
]

const Rover = ({navigation, route}) => {
  const [date, setDate] = useState(new Date())
  const [openDate, setOpenDate] = useState(false)
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(0)
  const [camera, setCamera] = useState('')
  const [sol, setSol] = React.useState(100)

  useEffect(() => {
    getPhotos()
  }, [])

  useEffect(() => {
    getPhotos()
  }, [page, camera, sol, date])

  const getPhotos = async () => {
    const roverQuery = route.params.rover.toLowerCase()
    const cameraQuery = camera !== '' ? `&camera=${camera}` : ''
    const solQuery = sol !== '' ? `&sol=${sol}` : ''
    const earthDateQuery =
      date !== '' ? `&earth_date=${moment(date).format('YYYY-M-D')}` : ''
    const url = `/${roverQuery}/photos?&api_key=XtOWUHlrgpvVxICVu0tZrzvN2cgGwJJRnbLdVeCe&page=${page}${solQuery}${cameraQuery}${earthDateQuery}`
    const res = await api.get(url)
    setPhotos(res.data.photos)
    // console.log('url', url)
  }

  const handleClearFilter = () => {
    setPage(0)
    setSol(0)
    setCamera('')
    setDate(new Date())
  }

  return (
    <S.Container>
      <Header />
      <S.Rover>
        <S.RoverTop>
          <Icon
            name="arrow-back"
            size={20}
            color="white"
            onPress={() => navigation.goBack()}
          />
          <S.RoverTitle>
            <Text size="medium" color="white">
              {route.params.rover}
            </Text>
          </S.RoverTitle>
        </S.RoverTop>
        <DateFilter
          title="Earth Day Date"
          date={date}
          setDate={setDate}
          open={openDate}
          setOpen={setOpenDate}
        />
        <Select
          options={optionsCameras}
          setSelected={setCamera}
          selected={camera}
        />
        <SolFilter setValue={setSol} value={sol} />
        <Button label="Clear Filter" onPress={handleClearFilter} />
        <FlatList
          data={photos}
          renderItem={({item}) => (
            <S.RoverPhotos>
              <S.RoverPhoto
                source={{uri: item?.img_src}}
                testID="rover-photo"
              />
            </S.RoverPhotos>
          )}
          numColumns={2}
          keyExtractor={(item, index) => item?.id}
        />
        <S.Paginate>
          <S.PaginateItem onPress={() => setPage(page - 1)} disabled={page < 1}>
            <Icon name="chevron-back" size={20} color="white" />
          </S.PaginateItem>
          <S.PaginateItem onPress={() => setPage(page + 1)}>
            <Icon name="chevron-forward" size={20} color="white" />
          </S.PaginateItem>
        </S.Paginate>
      </S.Rover>
    </S.Container>
  )
}

export default Rover
