/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import styles from './AddHouseForm.module.css';
import FacilityCheckbox from './components/FacilityCheckbox/FacilityCheckbox';

const schema = yup.object({
  streetNumber: yup
    .string()
    .required('This field is required.')
    .matches(/^[A-Za-z0-9 ]+$/, 'No special characters allowed.'),
  streetName: yup.string().required('This field is required.'),
  streetSuffix: yup.string().required('This field is required.'),
  city: yup
    .string()
    .required('This field is required.')
    .matches(/^[A-Za-z0-9 ]+$/, 'No special characters allowed.'),
  state: yup
    .string()
    .required('This field is required.')
    .matches(/^[A-Za-z0-9 ]+$/, 'No special characters allowed.'),
  price: yup
    .number('This field must be a number.')
    .positive('Must be a positive number.')
    .required('This field is required.'),
  propertyType: yup.string().required('This field is required.'),
  yearBuilt: yup
    .number('This field must be a number.')
    .positive('Must be a positive number.')
    .required('This field is required.'),
  dimension: yup
    .number('This field must be a number.')
    .positive('Must be a positive number.')
    .required('This field is required.'),
  floor: yup
    .number('This field must be a number.')
    .min(0, 'Cannot be a negative number.')
    .required('This field is required.'),
  floorsInBuilding: yup
    .number('This field must be a number.')
    .min(0, 'Cannot be a negative number.')
    .required('This field is required.'),
  roomsNumber: yup
    .number('This field must be a number.')
    .positive('Must be a positive number.')
    .required('This field is required.'),
  bathroomNumber: yup
    .number('This field must be a number.')
    .positive('Must be a positive number.')
    .required('This field is required.'),
  heating: yup.string().required('This field is required.'),
  descriptionField: yup.string().required('This field is required.'),
});

const AddHouseForm = () => {
  const [moreFacilitiesShown, setMoreFacilitiesShown] = useState(false);
  const [images, setImages] = useState();

  const [url, setUrl] = useState('');
  const [progress, setProgress] = useState(0);

  // const imagesRef = ref(storage);
  // const imagesRef = ref(storage, 'images/mountains.jpg');

  const metadata = {
    contentType: 'image/jpeg',
  };
  const storage = getStorage();
  const imagesRef = ref(storage, 'houses');

  const handleUpload = async (event) => {
    // if (!firebase) return;

    const uploadedFile = images[0];
    console.log(uploadedFile);
    if (!uploadedFile) return;

    console.log('storage', storage);
    console.log('storageref', imagesRef);

    try {
      await uploadBytes(imagesRef, uploadedFile, metadata);

      alert('Successfully uploaded picture!');
    } catch (error) {
      console.log('error', error);
    }
  };

  // const storage = getStorage();
  getDownloadURL(ref(storage, 'houses/'))
    .then((url) => {
      // `url` is the download URL for 'images/stars.jpg'

      // This can be downloaded directly:
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();

      // Or inserted into an <img> element
      const img = document.getElementById('myimg');
      img.setAttribute('src', url);
    })
    .catch((error) => {
      // Handle any errors
    });

  // uploadTask.on(
  //   'state_changed',
  //   (snapshot) => {
  //     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  //     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //     console.log('Upload is ' + progress + '% done');
  //     switch (snapshot.state) {
  //       case 'paused':
  //         console.log('Upload is paused');
  //         break;
  //       case 'running':
  //         console.log('Upload is running');
  //         break;
  //     }
  //   },
  //   (error) => {
  //     // A full list of error codes is available at
  //     // https://firebase.google.com/docs/storage/web/handle-errors
  //     switch (error.code) {
  //       case 'storage/unauthorized':
  //         // User doesn't have permission to access the object
  //         break;
  //       case 'storage/canceled':
  //         // User canceled the upload
  //         break;

  //       // ...

  //       case 'storage/unknown':
  //         // Unknown error occurred, inspect error.serverResponse
  //         break;
  //     }
  //   },
  //   () => {
  //     // Upload completed successfully, now we can get the download URL
  //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //       console.log('File available at', downloadURL);
  //     });
  //   }
  // );

  // console.log('image: ', images);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

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
    <Box component="form" className={styles.formContainer} onSubmit={handleSubmit(handleSend)}>
      <div className={styles.formSection}>
        <Typography variant="h6" color="primary">
          Address Information
        </Typography>
        <TextField
          id="street-number"
          {...register('streetNumber')}
          label="Street number"
          error={errors?.streetNumber}
          helperText={errors?.streetNumber && errors?.streetNumber.message}
          autoComplete="address-line1"
        />
        <span className={styles.formRow}>
          <TextField
            id="street-name"
            {...register('streetName')}
            label="Street name"
            error={errors?.streetName}
            helperText={errors?.streetName && errors?.streetName.message}
            sx={{ width: '100%' }}
            autoComplete="address-line2"
          />
          <FormControl sx={{ minWidth: '45%' }} error={errors?.streetSuffix}>
            <InputLabel id="street-suffix">Street Suffix</InputLabel>
            <Select
              labelId="street-suffix"
              id="street-suffix"
              label="Street Suffix"
              defaultValue=""
              {...register('streetSuffix')}
            >
              <MenuItem value="street">St</MenuItem>
              <MenuItem value="avenue">Ave</MenuItem>
              <MenuItem value="boulevard">Blvd</MenuItem>
              <MenuItem value="lane">Ln</MenuItem>
              <MenuItem value="place">Pl</MenuItem>
              <MenuItem value="road">Rd</MenuItem>
            </Select>
            {errors?.streetSuffix && <FormHelperText>{errors?.streetSuffix.message}</FormHelperText>}
          </FormControl>
        </span>
        <span className={styles.formRow}>
          <TextField
            id="city"
            {...register('city')}
            label="City"
            error={errors?.city}
            helperText={errors?.city && errors?.city.message}
            autoComplete="address-level12"
          />
          <TextField
            id="state"
            {...register('state')}
            label="State"
            error={errors?.state}
            helperText={errors?.state && errors?.state.message}
            autoComplete="state"
          />
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
            defaultValue={1}
            {...register('price')}
            label="Price"
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            error={errors?.price}
            helperText={errors?.price && errors?.price.message}
          />
          <FormControl fullWidth error={errors?.propertyType}>
            <InputLabel id="property-type">Type of property</InputLabel>
            <Select
              labelId="property-type"
              id="property-type-select"
              label="Type of property"
              defaultValue="sda"
              {...register('propertyType')}
              helperText={errors?.propertyType && errors?.propertyType.message}
            >
              <MenuItem value="apartment">Apartment</MenuItem>
              <MenuItem value="house">House</MenuItem>
              <MenuItem value="multi-family">Multi-family</MenuItem>
              <MenuItem value="townhome">Townhome</MenuItem>
              <MenuItem value="lot">Lot</MenuItem>
              <MenuItem value="condo">Condo</MenuItem>
            </Select>
            {errors?.propertyType && <FormHelperText>{errors?.propertyType.message}</FormHelperText>}
          </FormControl>
        </span>
        <span className={styles.formRow}>
          <TextField
            id="year-built"
            type="number"
            defaultValue={2000}
            {...register('yearBuilt')}
            label="Year built"
            error={errors?.yearBuilt}
            helperText={errors?.yearBuilt && errors?.yearBuilt.message}
          />
          <TextField
            id="dimension"
            type="number"
            defaultValue={0}
            {...register('dimension')}
            label="Dimension (sqft)"
            error={errors?.dimension}
            helperText={errors?.dimension && errors?.dimension.message}
          />
        </span>
        <span className={styles.formRow}>
          <TextField
            id="floor"
            type="number"
            defaultValue={0}
            {...register('floor')}
            label="Floor"
            error={errors?.floor}
            helperText={errors?.floor && errors?.floor.message}
          />
          <TextField
            id="floors-in-building"
            type="number"
            defaultValue={0}
            {...register('floorsInBuilding')}
            label="Floors in building"
            error={errors?.floorsInBuilding}
            helperText={errors?.floorsInBuilding && errors?.floorsInBuilding.message}
          />
        </span>
        <span className={styles.formRow}>
          <TextField
            id="rooms-number"
            type="number"
            defaultValue={0}
            {...register('roomsNumber')}
            label="Number of rooms"
            error={errors?.roomsNumber}
            helperText={errors?.roomsNumber && errors?.roomsNumber.message}
          />
          <TextField
            id="bathroom-number"
            type="number"
            defaultValue={0}
            {...register('bathroomNumber')}
            label="Number of bathrooms"
            error={errors?.bathroomNumber}
            helperText={errors?.bathroomNumber && errors?.bathroomNumber.message}
          />
        </span>
        <FormControl fullWidth error={errors?.heating}>
          <InputLabel id="heating">Heating</InputLabel>
          <Select
            labelId="heating"
            id="heating"
            label="Heating"
            defaultValue="sadas"
            {...register('heating')}
            helperText={errors?.heating && errors?.heating.message}
          >
            <MenuItem value="forced-air">Forced Air</MenuItem>
            <MenuItem value="radiators">Radiators</MenuItem>
            <MenuItem value="heat-pump">Heat Pump</MenuItem>
            <MenuItem value="hybrid-heating">Hybrid</MenuItem>
            <MenuItem value="radiant-heating">Radiant</MenuItem>
            <MenuItem value="baseboard-heaters">Baseboard Heaters</MenuItem>
          </Select>
          {errors?.heating && <FormHelperText>{errors?.heating.message}</FormHelperText>}
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
      <TextField
        id="description-field"
        label="More information"
        multiline
        rows={8}
        {...register('descriptionField')}
        error={errors?.descriptionField}
        helperText={errors?.descriptionField && errors?.descriptionField.message}
      />
      <label htmlFor="images-upload">
        <input
          style={{ display: 'none' }}
          id="images-upload"
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => addImages(e.target.files)}
        />
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
      <Button type="submit" variant="contained" sx={{ margin: '10px 0' }}>
        SEND
      </Button>
    </Box>
  );
};

export default AddHouseForm;
