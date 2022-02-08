/* eslint-disable react/jsx-props-no-spreading */
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import DoneIcon from '@mui/icons-material/Done';
import { Autocomplete, Box, Button, Checkbox, TextField } from '@mui/material';
import Chip from '@mui/material/Chip';
import { useEffect, useState } from 'react';

import noPhoto from '/src/assets/images/nophoto.png';

import styles from './ListOfHouses.module.scss';

const options = ['Payment (Low to High)', 'Payment (High to Low)', 'A-Z', 'Z-A'];
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function ListOfHouses() {
  const [sortType, setSortType] = useState(null);
  const [houseList, setHouseList] = useState([]);
  const [sortedHouses, setSortedHouses] = useState([]);

  const getData = () => {
    fetch('/houses-for-sale.json')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        const obj = myJson.houses;
        const arr = Object.entries(obj);
        setHouseList(arr);
      });
  };

  const handleDelete = () => {
    setSortType(null);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const itemArray = houseList.map((item) => item[1]);
    if (sortType === 'Payment (Low to High)') {
      const sorted = [...itemArray].sort((a, b) => a.price - b.price);
      setSortedHouses(sorted);
    }
    if (sortType === 'Payment (High to Low)') {
      const sorted = [...itemArray].sort((a, b) => b.price - a.price);
      setSortedHouses(sorted);
    }
    if (sortType === 'A-Z') {
      const sorted = [...itemArray].sort((a, b) => a.city.localeCompare(b.city));
      setSortedHouses(sorted);
    }
    if (sortType === 'Z-A') {
      const sorted = [...itemArray].sort((a, b) => b.city.localeCompare(a.city));
      setSortedHouses(sorted);
    }
    if (sortType === null) {
      setSortedHouses([...houseList].map((item) => item[1]));
    }
  }, [houseList, sortType]);

  return (
    <Box component="div" className={styles.housesComponent}>
      <Box component="div" className={styles.sortBy}>
        <div>
          <span>Sort by</span>
          <Autocomplete
            className={styles.options}
            disableClearable
            value={sortType}
            onChange={(event, newValue) => {
              setSortType(newValue);
            }}
            options={options}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>
        <Chip
          icon={<DoneIcon />}
          sx={{ display: sortType !== null ? '' : 'none' }}
          label={`${sortType !== null ? sortType : ''}`}
          onDelete={handleDelete}
        />
      </Box>
      <Box component="div" className={styles.housesList}>
        {sortedHouses.map((item, i) => (
          <Box component="div" className={styles.houseElement} key={i.toString()}>
            <h4>
              {item.city}, {item.streetName} {item.streetNumber}
            </h4>
            <p className={styles.price}>
              {item.price}zł/m<sup>2</sup>
            </p>
            <img src={item.photo_0 ? item.photo_0 : noPhoto} alt="House" />
            <p className={styles.shortInfo}>{item.descriptionField}</p>
            <Button className={styles.moreInfo}>more info</Button>
            <Checkbox
              color="warning"
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              className={styles.icon}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ListOfHouses;
