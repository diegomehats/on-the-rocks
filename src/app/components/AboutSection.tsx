import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AboutSection: React.FC = () => {
    return (
      <Box  sx={{ py: 8, backgroundColor: '#000', color: '#fff' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Sobre Nosotros
        </Typography>
        <Typography variant="body1" align="center" sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
          Somos una empresa dedicada a ofrecer un servicio de barra móvil de la más alta calidad,
          brindando un toque único a cada evento.
        </Typography>
      </Box>
    );
  };
  export default AboutSection