import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import styles from './AddHouseForm.module.css';
import FacilityCheckbox from './components/FacilityCheckbox/FacilityCheckbox';

const AddHouseForm = () => {
  const [moreFacilitiesShown, setMoreFacilitiesShown] = useState(false);
  const [images, setImages] = useState();

  const addImages = (rawImages) => {
    setImages(Array.from(rawImages));
  };

  const removeImage = (name) => setImages((prevState) => prevState?.filter((img) => img.name !== name));

  const handleSend = (fields) => {
    console.log({ fields });
  };

  const facilities = [
    'Garage',
    'Parking spot',
    'Garden',
    'Elevator',
    'Basement',
    'Loggy',
    'Balcony',
    'Terrace',
    'Entresol',
    'Playground',
    'Internet',
    'Swimming pool',
    'Gym',
    'Kitchenette',
  ];
  return (
    <Box component="form" className={styles.formContainer}>
      <div className={styles.formSection}>
        <Typography variant="h6" color="primary">
          Address Information
        </Typography>
        <TextField id="street-number" label="Street number" autoComplete="address-line1" />
        <span className={styles.formRow}>
          <TextField id="street-address" label="Street name" autoComplete="address-line2" sx={{ width: '100%' }} />
          <FormControl sx={{ minWidth: '45%' }}>
            <InputLabel id="street-suffix">Street Suffix</InputLabel>
            <Select labelId="street-suffix" id="street-suffix" label="Street Suffix" defaultValue="">
              <MenuItem value="street">St</MenuItem>
              <MenuItem value="avenue">Ave</MenuItem>
              <MenuItem value="boulevard">Blvd</MenuItem>
              <MenuItem value="lane">Ln</MenuItem>
              <MenuItem value="place">Pl</MenuItem>
              <MenuItem value="road">Rd</MenuItem>
            </Select>
          </FormControl>
        </span>
        <span className={styles.formRow}>
          <TextField id="city" label="City" autoComplete="address-level12" />
          <TextField id="state" label="State" autoComplete="state" />
        </span>
      </div>
      <div className={styles.formSection}>
        <Typography variant="h6" color="primary">
          Property Information
        </Typography>
        <span className={styles.formRow}>
          <TextField
            id="price"
            type="number"
            label="Price"
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
          />
          <FormControl fullWidth>
            <InputLabel id="property-type">Type of property</InputLabel>
            <Select labelId="property-type" id="property-type-select" label="Type of property" defaultValue="">
              <MenuItem value="apartment">Apartment</MenuItem>
              <MenuItem value="house">House</MenuItem>
              <MenuItem value="multi-family">Multi-family</MenuItem>
              <MenuItem value="townhome">Townhome</MenuItem>
              <MenuItem value="lot">Lot</MenuItem>
              <MenuItem value="condo">Condo</MenuItem>
            </Select>
          </FormControl>
        </span>
        <span className={styles.formRow}>
          <TextField id="year-built" type="number" defaultValue={2000} label="Year built" />
          <TextField id="dimension" type="number" label="Dimension (sqft)" />
        </span>
        <span className={styles.formRow}>
          <TextField id="floor" type="number" label="Floor" />
          <TextField id="floors-in-building" type="number" label="Floors in building" />
        </span>
        <span className={styles.formRow}>
          <TextField id="rooms-number" type="number" label="Number of rooms" />
          <TextField id="bathroom-number" type="number" label="Number of bathrooms" />
        </span>
        <FormControl fullWidth>
          <InputLabel id="heating">Heating</InputLabel>
          <Select labelId="heating" id="heating" label="Heating" defaultValue="">
            <MenuItem value="forced-air">Forced Air</MenuItem>
            <MenuItem value="radiators">Radiators</MenuItem>
            <MenuItem value="heat-pump">Heat Pump</MenuItem>
            <MenuItem value="hybrid-heating">Hybrid</MenuItem>
            <MenuItem value="radiant-heating">Radiant</MenuItem>
            <MenuItem value="baseboard-heaters">Baseboard Heaters</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Button
        variant="outlined"
        onClick={() => setMoreFacilitiesShown((prevState) => !prevState)}
        endIcon={moreFacilitiesShown ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        sx={{ margin: '10px 0' }}
      >
        MORE FACILITIES
      </Button>

      {moreFacilitiesShown && (
        <FormGroup>
          <span className={styles.moreParamsCheckbox}>
            {facilities.map((facility) => (
              <FacilityCheckbox key={facility} label={facility} />
            ))}
          </span>
        </FormGroup>
      )}
      <TextField id="description-field" label="More information" multiline rows={8} />
      <input
        style={{ display: 'none' }}
        id="images-upload"
        type="file"
        multiple
        accept="image/*"
        onChange={(e) => addImages(e.target.files)}
      />
      <label htmlFor="images-upload">
        <Button variant="contained" color="primary" component="span" sx={{ margin: '10px 0' }}>
          Upload images
        </Button>
      </label>
      {images?.map(
        (image) =>
          image && (
            <div key={image.name} className={styles.formImagesContainer}>
              <img src={URL.createObjectURL(image)} alt={image.name} className={styles.formImage} />
              <button type="button" className={styles.formImageRemoveButton} onClick={() => removeImage(image.name)}>
                <DeleteForeverIcon color="secondary" />
              </button>
            </div>
          )
      )}
      <Button variant="contained" onClick={() => {}} sx={{ margin: '10px 0' }}>
        SEND
      </Button>
    </Box>
  );
};

export default AddHouseForm;
