import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#000' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          LOGO
        </Typography>
        <Box>
          <Button color="inherit" component="a" href="#hero">
            Home
          </Button>
          <Button color="inherit" component="a" href="#services">
            Servicios
          </Button>
          <Button color="inherit" component="a" href="#about">
            About
          </Button>
          <Button color="inherit" component="a" href="#contact">
            Contacto
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
