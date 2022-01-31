/* eslint-disable import/extensions */
/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import Logo from '/src/assets/images/NavLogo.png';
import ThemeSwitcher from '/src/components/HeaderSection/Switcher';
import theme from '/src/theme/theme';

import styles from './Header.module.scss';

const SignInButton = styled(Button)({
  color: theme.palette.primary.muted,
  lineHeight: '16px',
  border: `2px solid ${theme.palette.primary.muted}`,
  letterSpacing: 1.25,
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#fff',
    borderColor: theme.palette.primary.muted,
  },
});

function Header() {
  return (
    <Box
      component="div"
      className={styles.topBarContainer}
      sx={{
        bgcolor: 'background.default',
        flexBasis: '0% !important',
      }}
    >
      <ThemeSwitcher className={styles.switch} />
      <Box component="img" src={Logo} />
      <SignInButton
        sx={{
          marginRight: { xs: '0.8rem', md: '3rem', lg: '3.75rem' },
          width: { xs: '80px', md: '105px', lg: '130px' },
          height: { xs: '35px', md: '45px', lg: '55px' },
          fontSize: { xs: '14px', md: '17px', lg: '20px' },
          padding: { xs: '0px', md: '5px 7px', lg: '10px 14px' },
        }}
      >
        SIGN IN
      </SignInButton>
    </Box>
  );
}

export default Header;
