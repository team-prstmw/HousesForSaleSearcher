import React from 'react';

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import RegisterLoginHeader from '../RegisterLoginHeader/RegisterLoginHeader';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterLoginModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Sign in</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexWrap: 'nowrap',
            alignContent: 'center',
            bgcolor: 'background.paper',
            width: 375,
            height: 812,
          }}
        >
          <RegisterLoginHeader />
          <RegisterForm />
        </Box>
      </Modal>
    </>
  );
}

export default RegisterLoginModal;
