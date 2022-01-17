import './SellHousePage.css';

import { Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React from 'react';

import AddHouseForm from '../../components/AddHouseForm/AddHouseForm';
import theme from '../../utils/theme';

const SellHousePage = () => {
  return (
    <Container component={Paper} maxWidth={false} className="shp-container">
      <div className="shp-content">
        <span className="shp-header">
          <Typography
            variant="h3"
            sx={{
              [theme.breakpoints.down('sm')]: {
                fontSize: '2.2rem',
              },
            }}
            mb={2}
          >
            Sell House Form
          </Typography>
        </span>
        <AddHouseForm />
      </div>
    </Container>
  );
};

export default SellHousePage;
