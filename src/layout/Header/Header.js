
import { Box, AppBar, Toolbar, IconButton } from '@mui/material';
import TechoLogo from '../../assets/images/negative_logo.png';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useThemeContext } from '../../theme/Theme';

export const Logo = () => {
  return (
    <Box
      component="img"
      sx={{
        height: 50,
        width: 'auto',
      }}
      alt="Techo Logo"
      src={TechoLogo}
    />
  );
};

export default function Header() {

  const { colorMode, theme } = useThemeContext();

  return (
    <AppBar position="sticky" elevation={0} enableColorOnDark>
     
      <Toolbar disableGutters sx={{margin: "0 auto"}}>
        <Logo />
        

        <IconButton
          sx={{ ml: 1 }}
          color="inherit"
          onClick={colorMode.toggleColorMode}
        >
          {theme.palette.mode === 'dark' ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
