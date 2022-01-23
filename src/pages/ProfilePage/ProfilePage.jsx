import { Container } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';

import theme from '../../utils/theme';
import styles from './ProfilePage.module.css';

const ProfilePage = () => {
  return (
    <div>
      <div className={styles.profilePageHeaderContainer}>
        <span className={styles.profilePageHeader}>
          <Typography
            variant="h3"
            sx={{
              [theme.breakpoints.down('sm')]: {
                fontSize: '2.2rem',
              },
            }}
            mb={2}
          >
            Welcome, Name!
          </Typography>
        </span>
      </div>
      <Container component={Paper} maxWidth={false} className={styles.shpContainer}>
        <Avatar sx={{ bgcolor: deepOrange[500] }} alt="Remy Sharp" src="/broken-image.jpg">
          N
        </Avatar>
      </Container>
    </div>
  );
};

export default ProfilePage;
