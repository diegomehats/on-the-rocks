import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer: React.FC = () => {
  return (
    <Box sx={{ py: 4, backgroundColor: '#000', color: '#fff', textAlign: 'center' }}>
      <Typography variant="body1">Síguenos en nuestras redes sociales</Typography>
      <Box sx={{ mt: 2 }}>
        <IconButton color="inherit">
          <InstagramIcon />
        </IconButton>
        <IconButton color="inherit">
          <FacebookIcon />
        </IconButton>
      </Box>
      <Typography variant="body2" sx={{ mt: 4 }}>
        © 2024 Barra Móvil de Eventos
      </Typography>
    </Box>
  );
};

export default Footer;
