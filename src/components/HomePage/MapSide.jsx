import { LocationOn } from '@material-ui/icons';
import { Box, Button, styled, TextField, Typography } from '@mui/material';

import styles from './MapSide.module.css';

const ButtonSerch = styled(Button)({
  color: '#535C6899',
  lineHeight: '16px',
  height: '54px',
  letterSpacing: '1.25px',
  borderColor: '#0000001F',
  '&:hover': {
    backgroundColor: '#FFF',
    borderColor: '#000000',
  },
  '&:active': {
    backgroundColor: '#FFF',
    borderColor: '#000000',
  },
});

function MapHouses() {
  return (
    <Box component="div" className={styles.mapContainer}>
      <Box component="form">
        <TextField
          label="Location"
          className={styles.location}
          InputProps={{
            endAdornment: <LocationOn className={styles.icoLocat} />,
          }}
        />
        <ButtonSerch
          sx={{
            width: { xs: '90%', sm: '250px', md: '90%', lg: '250px', xl: '362px' },
            fontSize: { xs: '14px', md: '16px', lg: '18px' },
            marginBottom: { xs: '10px' },
          }}
          variant="outlined"
          onClick={() => {}}
        >
          <Typography className={styles.searchBy}>SEARCH BY</Typography>
        </ButtonSerch>
      </Box>
      <Box
        component="img"
        sx={{
          width: { xs: '90%', md: '90%', xl: '803px' },
          height: { xl: '626px' },
        }}
        src="\src\assets\images\Map.png"
      />
    </Box>
  );
}

export default MapHouses;
