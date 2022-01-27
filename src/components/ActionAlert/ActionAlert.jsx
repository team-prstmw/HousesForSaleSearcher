import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function ActionAlert() {
  return (
    <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
      <Alert severity="error" onClose={() => {}}>
        Error
      </Alert>
    </Stack>
  );
}
