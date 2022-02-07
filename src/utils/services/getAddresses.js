import makeRequest from './makeRequest';

export default function getAddresses(source) {
  return makeRequest(source)
    .then((res) => res.json())
    .then((res) => {
      const addressesList = [];
      Object.values(res.houses).forEach((house) => {
        const houseAddress = `${house.city} ${house.streetNumber} ${house.streetName}`;
        addressesList.push(houseAddress);
      });
      return addressesList;
    });
}
