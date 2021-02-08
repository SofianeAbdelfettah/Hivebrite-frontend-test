import React, { useState } from "react";
import styled from "styled-components";
import List from "../List/";

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  place-content: center;
  place-items: center;
  width: 30%;
  color: black;
`;

const CityListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  width: 30%;
  color: black;
  height: 100vh;
`;

const CityList = ({
  setCityPosition,
  setCityInfo,
  formattedCities,
}: {
  setCityPosition: (Position: Position) => void;
  setCityInfo: (popUp: CityInfo) => void;
  formattedCities: FormattedCities;
}) => {
  const [getIndex, setIndex] = useState<number>(0);
  const setPreviousIndex = () =>
    !!formattedCities[getIndex - 1] && setIndex(getIndex - 1);
  const setNextIndex = () =>
    !!formattedCities[getIndex + 1] && setIndex(getIndex + 1);

  return (
    <CityListWrapper>
      <List
        cities={formattedCities[getIndex]}
        setCityPosition={setCityPosition}
        setCityInfo={setCityInfo}
      />
      <ButtonsWrapper>
        <button onClick={() => setPreviousIndex()}>previous</button>
        <button onClick={() => setNextIndex()}>next</button>
      </ButtonsWrapper>
    </CityListWrapper>
  );
};

export default CityList;
