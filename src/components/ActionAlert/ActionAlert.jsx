import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

export default function ActionAlert({ severity, fn }) {
  return (
    <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
      <Alert
        severity={severity}
        onClose={() => {
          fn('');
        }}
      />
    </Stack>
  );
}

ActionAlert.propTypes = {
  severity: PropTypes.oneOf(['success', 'error']).isRequired,
  fn: PropTypes.func.isRequired,
};
