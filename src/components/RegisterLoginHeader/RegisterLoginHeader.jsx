import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Login Register Switch' } };

function RegisterLoginHeader() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'nowrap',
        alignContent: 'center',
        height: 245,
      }}
    >
      <Typography variant="h2" component="h2" sx={{ fontFamily: 'Zilla Slab', color: '#30336BBF' }}>
        Welcome!
      </Typography>
      <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
        <Typography>Log in</Typography>
        <Switch {...label} defaultChecked />
        <Typography>Register</Typography>
      </Stack>
    </Box>
  );
}

export default RegisterLoginHeader;
