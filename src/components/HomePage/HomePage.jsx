import Grid from '@mui/material/Grid';

import BottomBar from './BottomBar';
import ListOfHouses from './ListOfHouses';
import MapHouses from './MapSide';
import TopBar from './TopBar';

function HomePage() {
  return (
    <Grid container>
      <Grid item xs={12} marginBottom="38px">
        <TopBar />
      </Grid>
      <Grid item xs={12} md={6}>
        <MapHouses />
      </Grid>
      <Grid item xs={12} md={6}>
        <ListOfHouses />
      </Grid>
      <Grid item xs={12} marginTop="28px">
        <BottomBar />
      </Grid>
    </Grid>
  );
}

export default HomePage;
