import { useState } from 'react';

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import RegisterLoginHeader from '@/components/RegisterLoginHeader/RegisterLoginHeader';
import LoginForm from '@/components/LoginForm/LoginForm';
import RegisterForm from '@/components/RegisterForm/RegisterForm';
import ActionAlert from '../ActionAlert/ActionAlert';

import styles from './RegisterLoginModal.module.css';
import mapError from '/src/utils/services/mapError';

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
          <RegisterLoginHeader checked={checked} onChange={handleChange} />
          {checked ? <RegisterForm fn={changeState} /> : <LoginForm fn={changeState} />}
          {state ? <ActionAlert fn={setState} children={state} /> : null}
        </Box>
      </Modal>
    </>
  );
}

export default RegisterLoginModal;
