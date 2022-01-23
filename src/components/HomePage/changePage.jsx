import MapIcon from '@mui/icons-material/Map';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, ButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles';

import styles from './changePage.module.css';

const ChangerButton = styled(Button)({
  flexDirection: 'column',
  width: '83px',
  height: '56px',
  backgroundColor: '#7ED6DF',
  borderRadius: '0px',
  borderColor: '#37d1e2 !important',
  '&:hover': {
    backgroundColor: '#37d1e2',
  },
});

function ChangePage() {
  return (
    <Box component="div" className={styles.buttonContainer}>
      <ButtonGroup variant="contained">
        <ChangerButton>
          <MapIcon />
          <p>Map</p>
        </ChangerButton>
        <ChangerButton>
          <SearchIcon />
          <p>Search</p>
        </ChangerButton>
      </ButtonGroup>
    </Box>
  );
}

export default ChangePage;
