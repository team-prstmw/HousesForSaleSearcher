/* eslint-disable react/jsx-props-no-spreading */
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import DoneIcon from '@mui/icons-material/Done';
import { Autocomplete, Box, Button, Checkbox, TextField } from '@mui/material';
import Chip from '@mui/material/Chip';
import React from 'react';

import styles from './ListOfHouses.module.scss';

const options = ['Option 1', 'Option 2'];
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function ListOfHouses() {
  const [value, setValue] = React.useState(null);

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
        <Box component="div" className={styles.houseElement}>
          <h4>420 Baker St, London</h4>
          <p className={styles.price}>299,999£</p>
          <img src="\src\assets\images\House.png" alt="House" />
          <p className={styles.shortInfo}>2 bds 1 ba 1555 sqft - Apartament for sale</p>
          <Button className={styles.moreInfo}>more info</Button>
          <Checkbox
            color="warning"
            {...label}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            className={styles.icon}
          />
        </Box>
        <Box component="div" className={styles.houseElement}>
          <h4>420 Baker St, London</h4>
          <p className={styles.price}>299,999£</p>
          <img src="\src\assets\images\House.png" alt="House" />
          <p className={styles.shortInfo}>2 bds 1 ba 1555 sqft - Apartament for sale</p>
          <Button className={styles.moreInfo}>more info</Button>
          <Checkbox
            color="warning"
            {...label}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            className={styles.icon}
          />
        </Box>
        <Box component="div" className={styles.houseElement}>
          <h4>420 Baker St, London</h4>
          <p className={styles.price}>299,999£</p>
          <img src="\src\assets\images\House.png" alt="House" />
          <p className={styles.shortInfo}>2 bds 1 ba 1555 sqft - Apartament for sale</p>
          <Button className={styles.moreInfo}>more info</Button>
          <Checkbox
            color="warning"
            {...label}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            className={styles.icon}
          />
        </Box>
        <Box component="div" className={styles.houseElement}>
          <h4>420 Baker St, London</h4>
          <p className={styles.price}>299,999£</p>
          <img src="\src\assets\images\House.png" alt="House" />
          <p className={styles.shortInfo}>2 bds 1 ba 1555 sqft - Apartament for sale</p>
          <Button className={styles.moreInfo}>more info</Button>
          <Checkbox
            color="warning"
            {...label}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            className={styles.icon}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default ListOfHouses;
