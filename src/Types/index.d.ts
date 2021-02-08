interface Position {
  lat: number;
  lng: number;
}

interface CityInfo {
  population: string;
  rank: string;
  state: string;
}

interface City extends CityInfo {
  city: string;
  growth_from_2000_to_2013: string;
  latitude: number;
  longitude: number;
}

interface FormattedCities {
  [key: number]: City[];
}

