import MapIcon from '@mui/icons-material/Map';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, ButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useContext } from 'react';

import theme from '../../../theme/theme';
// eslint-disable-next-line import/no-cycle
import { changePageContext } from '../HomePage';
import styles from './changePage.module.scss';

const ChangerButton = styled(Button)({
  flexDirection: 'column',
  width: '83px',
  height: '56px',
  backgroundColor: theme.palette.primary.main,
  borderRadius: '0px',
  borderRight: 'none',
  '&:hover': {
    backgroundColor: 'none !important',
  },
  '&:focus': {
    backgroundColor: 'none',
  },
});

function ChangePage() {
  const { toggleMap, setToggleMap, toggleHouse, setToggleHouse } = useContext(changePageContext);
  return (
    <Box component="div" className={styles.buttonContainer}>
      <ButtonGroup variant="contained">
        <ChangerButton
          onClick={() => {
            if (!toggleMap) {
              setToggleMap(true);
              setToggleHouse(false);
            }
          }}
        >
          <MapIcon />
          <p>Map</p>
        </ChangerButton>
        <ChangerButton
          onClick={() => {
            if (!toggleHouse) {
              setToggleHouse(true);
              setToggleMap(false);
            }
          }}
        >
          <SearchIcon />
          <p>Search</p>
        </ChangerButton>
      </ButtonGroup>
    </Box>
  );
}

export default ChangePage;
