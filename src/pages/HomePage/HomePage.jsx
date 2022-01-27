import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { createContext, useEffect, useState } from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
// eslint-disable-next-line import/no-cycle
import ChangePage from './ChangePage/changePage';
import ListOfHouses from './ListOfHouses/ListOfHouses';
import MapHouses from './MapSide/MapSide';

export const changePageContext = createContext(null);

function HomePage() {
  const [toggleMap, setToggleMap] = useState(true);
  const [toggleHouse, setToggleHouse] = useState(true);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 900px)');
    media.addEventListener('change', () => {
      // eslint-disable-next-line no-unused-expressions
      media.matches ? setToggleHouse(false) : setToggleHouse(true);
    });
  }, []);

  return (
    <changePageContext.Provider value={{ toggleMap, setToggleMap, toggleHouse, setToggleHouse }}>
      <Grid container>
        <Grid item xs={12} marginBottom="38px">
          <Header />
        </Grid>
        <Box
          component="div"
          sx={{
            display: { md: 'flex' },
            maxWidth: '1750px',
            margin: 'auto',
          }}
        >
          <Grid item xs={12} md={6}>
            {toggleMap && <MapHouses />}
          </Grid>
          <Grid item xs={12} md={6}>
            {toggleHouse && <ListOfHouses />}
          </Grid>
        </Box>
        <Grid item xs={12} marginTop="28px">
          <ChangePage />
          <Footer />
        </Grid>
      </Grid>
    </changePageContext.Provider>
  );
}

export default HomePage;
