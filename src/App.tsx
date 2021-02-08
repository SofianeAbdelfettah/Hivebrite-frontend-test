import React, { useState, useMemo } from "react";
import Map from "./Components/Map";
import CityList from "./Components/CityList";
import styled from "styled-components";
import cities from "./cities.json";

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  place-content: center;
  place-items: center;
  width: 100%;
  height: 100vh;
  color: white;
`;

const getFormattedCities = () => {
  let newCities: FormattedCities = {};
  let start = 0;
  let end = 10;
  let arrayNumber = 10;

  for (let i = 0; i < Math.round(cities.length / arrayNumber); i++) {
    newCities[i] = cities.slice(start, end);
    start += arrayNumber;
    end += arrayNumber;
  }

  return newCities;
};

const App = () => {
  const cachedFormattedCities = useMemo(() => getFormattedCities(), []);

  const [getCity, setCityPosition] = useState<Position>({
    lat: cachedFormattedCities[0][0].latitude,
    lng: cachedFormattedCities[0][0].longitude,
  });

  const [getCityInfo, setCityInfo] = useState<CityInfo>({
    rank: cachedFormattedCities[0][0].rank,
    population: cachedFormattedCities[0][0].population,
    state: cachedFormattedCities[0][0].state,
  });

  const changeCity = ({ lat, lng }: Position): void =>
    setCityPosition({ lat, lng });

  return (
    <Layout>
      <CityList
        setCityPosition={changeCity}
        setCityInfo={setCityInfo}
        formattedCities={cachedFormattedCities}
      />
      <Map city={getCity} cityInfo={getCityInfo} />
    </Layout>
  );
};

export default App;
