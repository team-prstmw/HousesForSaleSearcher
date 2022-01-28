import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

import mapError from '/src/utils/services/mapError';
import LoginForm from '@/components/LoginForm/LoginForm';
import RegisterForm from '@/components/RegisterForm/RegisterForm';
import RegisterLoginHeader from '@/components/RegisterLoginHeader/RegisterLoginHeader';

import ActionAlert from '../ActionAlert/ActionAlert';
import styles from './RegisterLoginModal.module.css';

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
      <Button onClick={handleOpen}>Sign in</Button>
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
          <IconButton aria-label="Close" className={styles.closeButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <RegisterLoginHeader checked={checked} onChange={handleChange} onClick={handleClose} />
          {checked ? <RegisterForm fn={changeState} /> : <LoginForm fn={changeState} />}
          {state ? <ActionAlert fn={setState} children={state} /> : null}
        </Box>
      </Modal>
    </>
  );
}

export default RegisterLoginModal;
