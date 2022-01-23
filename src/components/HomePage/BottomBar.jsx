import '@fontsource/roboto/400.css';

import { Box, Link } from '@mui/material';

import styles from './BottomBar.module.css';
import ChangePage from './changePage';

function BottomBar() {
  return (
    <Box component="div" className={styles.fotterContainer}>
      <ChangePage />
      <Link className={styles.fotterText} href="https://github.com/team-prstmw" underline="none" display="inherit">
        You can follow us on Github:
        <Box component="img" className={styles.fotterImage} src="\src\assets\images\GitHub_Logo.png" />
      </Link>
    </Box>
  );
}

export default BottomBar;
