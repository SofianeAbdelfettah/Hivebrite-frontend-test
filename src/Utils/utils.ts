export const getFormattedCities = (cities: City[]) => {
  const newCities: FormattedCities = {}
  let start = 0
  let end = 10
  const arrayNumber = 10

  for (let i = 0; i < Math.round(cities.length / arrayNumber); i++) {
    newCities[i] = cities.slice(start, end)
    start += arrayNumber
    end += arrayNumber
  }

  return newCities
}
