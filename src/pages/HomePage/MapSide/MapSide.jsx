import { LocationOn } from '@material-ui/icons';
import { Box, Button, styled, TextField, Typography } from '@mui/material';

import GoogleMapComp from '../../../components/mapComp/GoogleMapComp';
import styles from './MapSide.module.scss';

const ButtonSearch = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.muted,
  lineHeight: '16px',
  height: '54px',
  letterSpacing: '1.25px',
  borderColor: '#0000001F',
  '&:hover': {
    backgroundColor: theme.palette.primary.contrastText,
    borderColor: theme.palette.primary.bgDark,
  },
  '&:active': {
    backgroundColor: theme.palette.primary.contrastText,
    borderColor: theme.palette.primary.bgDark,
  },
}));

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
        <ButtonSearch
          sx={{
            width: { xs: '100%', sm: '250px', md: '100%', lg: '250px', xl: '362px' },
            fontSize: { xs: '14px', md: '16px', lg: '18px' },
            marginBottom: { xs: '10px' },
          }}
          variant="outlined"
          onClick={() => {}}
        >
          <Typography className={styles.searchBy}>SEARCH BY</Typography>
        </ButtonSearch>
      </Box>
      <GoogleMapComp style={{ height: '600px', width: '90%', minWidth: '420px' }} />
    </Box>
  );
}

export default MapHouses;
