/* eslint-disable react/jsx-props-no-spreading */
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import DoneIcon from '@mui/icons-material/Done';
import { Autocomplete, Box, Button, Checkbox, TextField } from '@mui/material';
import Chip from '@mui/material/Chip';
import { useEffect, useState } from 'react';

import styles from './ListOfHouses.module.scss';

const options = ['Cena rosnąco', 'Cena malejąco', 'Alfabetycznie'];
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function ListOfHouses() {
  const [value, setValue] = useState(null);
  const [data, setData] = useState();

  const getData = () => {
    fetch('/houses-for-sale.json')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        const obj = myJson.houses;
        const arr = Object.entries(obj);
        setData(arr);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = () => {
    setValue(null);
  };

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
        {data.map((item) => (
          <Box component="div" className={styles.houseElement}>
            <h4>
              {item[1].city}, {item[1].streetName} {item[1].streetNumber}
            </h4>
            <p className={styles.price}>
              {item[1].price}zł/m<sup>2</sup>
            </p>
            <img src="\src\assets\images\House.png" alt="House" />
            <p className={styles.shortInfo}>{item[1].descriptionField}</p>
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
