import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <Image
        src="/images/header.png"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        style={{ zIndex: -1 }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          zIndex: 0,
        }}
      />
      <Typography variant="h2" sx={{ position: 'relative', zIndex: 1 }}>
        Bienvenidos a la Barra Móvil de Eventos
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 4, backgroundColor: '#fff', color: '#000', position: 'relative', zIndex: 1 }}
      >
        Contáctame
      </Button>
    </Box>
  );
};

export default HeroSection;
