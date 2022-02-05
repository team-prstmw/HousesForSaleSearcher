import makeRequest from './makeRequest';

export default function getAddresses() {
  return makeRequest('https://houses-for-sale-sandbox-default-rtdb.europe-west1.firebasedatabase.app/.json')
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
