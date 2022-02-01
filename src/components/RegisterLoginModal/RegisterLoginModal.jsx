/* eslint-disable react/no-children-prop */
/* eslint-disable no-shadow */
/* eslint-disable import/extensions */
/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

import mapError from '/src/utils/services/mapError';
import LoginForm from '@/components/LoginForm/LoginForm';
import RegisterForm from '@/components/RegisterForm/RegisterForm';
import RegisterLoginHeader from '@/components/RegisterLoginHeader/RegisterLoginHeader';

import ActionAlert from '../ActionAlert/ActionAlert';
import styles from './RegisterLoginModal.module.css';

const SignInButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.muted,
  lineHeight: '16px',
  border: `2px solid ${theme.palette.primary.muted}`,
  letterSpacing: 1.25,
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#fff',
    borderColor: theme.palette.primary.muted,
  },
}));

function RegisterLoginModal() {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  const [state, setState] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const changeState = (state) => {
    setState(mapError(state));
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <SignInButton
        onClick={handleOpen}
        sx={{
          marginRight: { xs: '0.8rem', md: '3rem', lg: '3.75rem' },
          width: { xs: '80px', md: '105px', lg: '130px' },
          height: { xs: '35px', md: '45px', lg: '55px' },
          fontSize: { xs: '14px', md: '17px', lg: '20px' },
          padding: { xs: '0px', md: '5px 7px', lg: '10px 14px' },
        }}
      >
        Sign in
      </SignInButton>
      <Modal
        className={styles.registerLoginModal}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box
          className={styles.registerLoginModal__wrapper}
          sx={{
            bgcolor: 'background.paper',
          }}
        >
          <RegisterLoginHeader checked={checked} onChange={handleChange} />
          {checked ? <RegisterForm fn={changeState} /> : <LoginForm fn={changeState} />}
          {state ? <ActionAlert fn={setState} children={state} /> : null}
        </Box>
      </Modal>
    </>
  );
}

export default RegisterLoginModal;
