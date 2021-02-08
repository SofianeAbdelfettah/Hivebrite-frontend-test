import React from "react";
import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapWrapper = styled.div`
  display: flex;
  place-content: center;
  place-items: center;
  width: 100%;
  height: 100%;
  background-color: red;
`;

const iconPerson = new L.Icon({
  iconUrl: `${process.env.PUBLIC_URL}/marker.svg`,
  iconRetinaUrl: `${process.env.PUBLIC_URL}/marker.svg`,
  iconSize: new L.Point(60, 75),
});

const SetViewOnClick = ({ city }: { city: Position }) => {
  const map = useMap();
  map.setView(city, map.getZoom());

  return null;
};

const Map = ({ city, cityInfo }: { city: Position; cityInfo: CityInfo }) => {
  return (
    <MapWrapper>
      <MapContainer
        center={city}
        zoom={13}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={city} icon={iconPerson}>
          <Popup>
            <p>rank: {cityInfo.rank}</p>
            <p>population: {cityInfo.population}</p>
            <p>state: {cityInfo.state}</p>
          </Popup>
        </Marker>
        <SetViewOnClick city={city} />
      </MapContainer>
    </MapWrapper>
  );
};

export default Map;
