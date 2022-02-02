import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

export default function ActionAlert({ severity, onCloseFn, children }) {
  return (
    <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
      <Alert
        severity={severity}
        onClose={() => {
          onCloseFn('');
        }}
      >
        {children}
      </Alert>
    </Stack>
  );
}

ActionAlert.propTypes = {
  severity: PropTypes.oneOf(['success', 'error']).isRequired,
  onCloseFn: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
