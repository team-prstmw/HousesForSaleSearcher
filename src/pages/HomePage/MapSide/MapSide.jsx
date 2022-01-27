import { LocationOn } from '@material-ui/icons';
import { Box, Button, styled, TextField, Typography } from '@mui/material';

import theme from '../../../theme/theme';
import styles from './MapSide.module.css';

const ButtonSearch = styled(Button)({
  color: theme.palette.primary.grey,
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
        <ButtonSearch
          sx={{
            width: { xs: '75%', sm: '250px', md: '90%', lg: '250px', xl: '362px' },
            fontSize: { xs: '14px', md: '16px', lg: '18px' },
            marginBottom: { xs: '10px' },
          }}
          variant="outlined"
          onClick={() => {}}
        >
          <Typography className={styles.searchBy}>SEARCH BY</Typography>
        </ButtonSearch>
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
