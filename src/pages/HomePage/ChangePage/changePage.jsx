import MapIcon from '@mui/icons-material/Map';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, ButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useContext } from 'react';

import theme from '../../../theme/theme';
// eslint-disable-next-line import/no-cycle
import { changePageContext } from '../HomePage';
import styles from './changePage.module.css';

const ChangerButton = styled(Button)({
  flexDirection: 'column',
  width: '83px',
  height: '56px',
  backgroundColor: theme.palette.primary.main,
  borderRadius: '0px',
  borderColor: `${theme.palette.secondary.btnChangePage} !important`,
  '&:hover': {
    backgroundColor: theme.palette.secondary.btnChangePage,
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
              setToggleMap(!toggleMap);
              setToggleHouse(!toggleHouse);
            }
          }}
        >
          <MapIcon />
          <p>Map</p>
        </ChangerButton>
        <ChangerButton
          onClick={() => {
            if (!toggleHouse) {
              setToggleHouse(!toggleHouse);
              setToggleMap(!toggleMap);
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
