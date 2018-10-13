// @flow
import data from "./data";
import type { CitiesDataType } from "./data";

export const getProvinceCities = (provinceKey: string): Array<CitiesDataType> =>
  data.filter(
    (province: CitiesDataType) => province.key.toString() === provinceKey
  );

type CityType = { name: string, key: number | string };
export const getCityByKey = (
  provinceKey: string,
  cityKey: string
): Array<CityType> => {
  const province = getProvinceCities(provinceKey);

  return province[0].cities.filter(
    (city: { name: string, key: number | string }) => city.key === cityKey
  );
};
