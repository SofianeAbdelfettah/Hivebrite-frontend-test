import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import Map from './Components/Map'
import CityList from './Components/CityList'
import cities from './cities.json'
import { getFormattedCities } from './Utils/utils'

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  place-content: center;
  place-items: center;
  width: 100%;
  height: 100vh;
  color: white;
`

const App = () => {
  const cachedFormattedCities = useMemo(() => getFormattedCities(cities), [])

  const [getCity, setCityPosition] = useState<Position>({
    lat: cachedFormattedCities[0][0].latitude,
    lng: cachedFormattedCities[0][0].longitude,
  })

  const [getCityInfo, setCityInfo] = useState<CityInfo>({
    rank: cachedFormattedCities[0][0].rank,
    population: cachedFormattedCities[0][0].population,
    state: cachedFormattedCities[0][0].state,
  })

  const changeCity = ({ lat, lng }: Position): void =>
    setCityPosition({ lat, lng })

  return (
    <Layout>
      <CityList
        setCityPosition={changeCity}
        setCityInfo={setCityInfo}
        formattedCities={cachedFormattedCities}
      />
      <Map city={getCity} cityInfo={getCityInfo} />
    </Layout>
  )
}

export default App
