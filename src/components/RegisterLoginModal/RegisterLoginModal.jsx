import React from 'react';

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import RegisterLoginHeader from '../RegisterLoginHeader/RegisterLoginHeader';
import RegisterForm from '../RegisterForm/RegisterForm';
import LoginForm from '../LoginForm/LoginForm';

import styles from './RegisterLoginModal.module.css';

function RegisterLoginModal() {
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <Button onClick={handleOpen}>Sign in</Button>
      <Modal
        className={styles.registerLoginModal}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className={styles.registerLoginModal__wrapper}
          sx={{
            bgcolor: 'background.paper',
          }}
        >
          <RegisterLoginHeader checked={checked} onChange={handleChange} />
          {checked ? <RegisterForm /> : <LoginForm />}
        </Box>
      </Modal>
    </>
  );
}

export default RegisterLoginModal;
