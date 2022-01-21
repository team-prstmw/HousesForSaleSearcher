import create from './api';

export default addHouse = (
  streetNumber,
  streetName,
  streetSuffix,
  city,
  state,
  price,
  typeOfProperty,
  yearBuilt,
  dimension,
  floor,
  floorsInBuilding,
  numberOfRooms,
  numberOfBathrooms,
  heating,
  moreFacilities = [],
  moreInformation,
  images = []
) => {
  const newHouseData = {
    streetNumber,
    streetName,
    streetSuffix,
    city,
    state,
    price,
    typeOfProperty,
    yearBuilt,
    dimension,
    floor,
    floorsInBuilding,
    numberOfRooms,
    numberOfBathrooms,
    heating,
    moreFacilities,
    moreInformation,
    images,
    createdAt: new Date().toISOString(),
  };

  return create(key, newHouseData);
};
