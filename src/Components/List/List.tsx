import React from 'react'
import styled from 'styled-components'

const ListWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  border-width: 1px;
  border: solid;
  height: 100px;
  width: 100%;
  margin-top: 1px;
  font-size: 30px;
  flex-direction: column;
  place-items: center;
  place-content: center;
`

interface ListProps {
  cities: City[]
  setCityPosition: (Position: Position) => void
  setCityInfo: (CityInfo: CityInfo) => void
}

const List: React.FC<ListProps> = ({
  cities,
  setCityPosition,
  setCityInfo,
}) => {
  return (
    <>
      {cities.map((city: City) => (
        <ListWrapper
          key={city.city}
          onClick={() => {
            setCityPosition({ lat: city.latitude, lng: city.longitude })
            setCityInfo({
              population: city.population,
              rank: city.rank,
              state: city.state,
            })
          }}
        >
          {city.city}
        </ListWrapper>
      ))}
    </>
  )
}

export default List
