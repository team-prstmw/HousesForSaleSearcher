/* eslint-disable import/no-absolute-path */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import MapIcon from '@mui/icons-material/Map';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, ButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles';

import theme from '/src/theme/theme';

import styles from './ChangeView.module.scss';

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

function ChangeView(props) {
  const state = { ...props };

  return (
    <Box component="div" className={styles.buttonContainer}>
      <ButtonGroup variant="contained">
        <ChangerButton
          onClick={() => {
            if (!state.isToggle) {
              state.isSetToggle(true);
            }
          }}
        >
          <MapIcon />
          <p>Map</p>
        </ChangerButton>
        <ChangerButton
          onClick={() => {
            if (state.isToggle) {
              state.isSetToggle(false);
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

export default ChangeView;
