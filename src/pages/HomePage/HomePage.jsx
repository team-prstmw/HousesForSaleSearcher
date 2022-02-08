/* eslint-disable react/prop-types */
/* eslint-disable import/no-absolute-path */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

import Footer from '/src/components/Footer/Footer';
import Header from '/src/components/HeaderSection/Header/Header';

import ChangeView from './ChangeView/ChangeView';
import ListOfHouses from './ListOfHouses/ListOfHouses';
import MapHouses from './MapSide/MapSide';

function HomePage({ houses }) {
  const [toggleView, setToggleView] = useState(true);
  return (
    <Grid sx={{ display: 'flex', flexDirection: 'column' }} height="100vh">
      <Grid item xs={12} marginBottom="38px" sx={{ flexBasis: { xs: '0' } }}>
        <Header />
      </Grid>
      <Box
        component="div"
        sx={{
          display: { md: 'flex' },
          maxWidth: '1750px',
          flexBasis: '100%',
          margin: { md: 'auto' },
        }}
      >
        <Grid item xs={12} md={6} sx={{ display: { xs: toggleView ? 'block' : 'none', md: 'block' } }}>
          <MapHouses />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: { xs: toggleView ? 'none' : 'block', md: 'block' } }}>
          <ListOfHouses houses={houses} />
        </Grid>
      </Box>
      <Grid item xs={12} marginTop="28px" sx={{ flexBasis: { xs: '0' } }}>
        <ChangeView toggleView={toggleView} setToggleView={setToggleView} />
        <Footer />
      </Grid>
    </Grid>
  );
}

export default HomePage;
