/* eslint-disable react/jsx-props-no-spreading */
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import DoneIcon from '@mui/icons-material/Done';
import { Autocomplete, Box, Button, Checkbox, TextField } from '@mui/material';
import Chip from '@mui/material/Chip';
import { useEffect, useState } from 'react';

import styles from './ListOfHouses.module.scss';

const options = ['Cena rosnąco', 'Cena malejąco', 'A-Z', 'Z-A'];
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function ListOfHouses() {
  const [value, setValue] = useState(null);
  const [data, setData] = useState([]);
  const [sort, setSort] = useState([]);

  const getData = () => {
    fetch('/houses-for-sale.json')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        const obj = myJson.houses;
        const arr = Object.entries(obj);
        setSort(arr);
      });
  };

  const handleDelete = () => {
    setValue(null);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (value === 'Cena rosnąco') {
      const itemArray = sort.map((item) => item[1]);
      const sorted = [...itemArray].sort((a, b) => a.price - b.price);
      setData(sorted);
    }
    if (value === 'Cena malejąco') {
      const itemArray = sort.map((item) => item[1]);
      const sorted = [...itemArray].sort((a, b) => b.price - a.price);
      setData(sorted);
    }
    if (value === 'A-Z') {
      const itemArray = sort.map((item) => item[1]);
      const sorted = [...itemArray].sort((a, b) => a.city.localeCompare(b.city));
      setData(sorted);
    }
    if (value === 'Z-A') {
      const itemArray = sort.map((item) => item[1]);
      const sorted = [...itemArray].sort((a, b) => b.city.localeCompare(a.city));
      setData(sorted);
    }
    if (value === null) {
      const itemArray = [...sort].map((item) => item[1]);
      setData(itemArray);
    }
    // Za pierwszym ładowaniem strony są dwa renderowania. Nie do końca wiem czy można to zrobić tak aby było jedno renderowanie. Obstawiam że tak ale nie umiem. Ogólnie pierwsze renderowanie jest jak są puste tablice czyli stan z useState a kolejny render jest już z ustawionymi tablicami.
  }, [sort, value]);

  return (
    <Box component="div" className={styles.housesComponent}>
      <Box component="div" className={styles.sortBy}>
        <div>
          <span>Sort by</span>
          <Autocomplete
            className={styles.options}
            disableClearable
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            options={options}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>
        <Chip
          icon={<DoneIcon />}
          sx={{ display: value !== null ? '' : 'none' }}
          label={`${value !== null ? value : ''}`}
          onDelete={handleDelete}
        />
      </Box>
      <Box component="div" className={styles.housesList}>
        {data.map((item, i) => (
          <Box component="div" className={styles.houseElement} key={sort[i][0].toString()}>
            {/* Przez to że jest tyle renderowań nie moge sobie poradzić z ustawieniem Key. bo dając w mapie drugi arkument jaki np id jest ono array. Jakoś tak wykombinowałem ale nie wiem czy by tak mogło zostac */}
            <h4>
              {item.city}, {item.streetName} {item.streetNumber}
            </h4>
            <p className={styles.price}>
              {item.price}zł/m<sup>2</sup>
            </p>
            <img src="\src\assets\images\House.png" alt="House" />
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
