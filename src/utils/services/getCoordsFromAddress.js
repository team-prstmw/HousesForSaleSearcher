export default async function getCoordsFromAddress(response, geocoder) {
  const coordsList = [];
  const addressesList = await response;
  addressesList.forEach((address) => {
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK') {
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();
        // console.log(address, lat, lng);
        coordsList.push([lat, lng]);
      } else {
        // console.log(`${address} ,Geocode error: ${status}`);
      }
    });
  });
  //   console.log(coordsList);
  return coordsList;
}
