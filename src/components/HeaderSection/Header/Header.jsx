/* eslint-disable import/extensions */
/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import Box from '@mui/material/Box';

import Logo from '/src/assets/images/NavLogo.png';
import ThemeSwitcher from '/src/components/HeaderSection/Switcher';
import RegisterLoginModal from '/src/components/RegisterLoginModal/RegisterLoginModal';

import styles from './Header.module.scss';

function Header() {
  return (
    <Box
      component="div"
      className={styles.topBarContainer}
      sx={{
        bgcolor: 'background.default',
      }}
    >
      <ThemeSwitcher className={styles.switch} />
      <Box component="img" src={Logo} />
      <RegisterLoginModal />
    </Box>
  );
}

export default Header;
