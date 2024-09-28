import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const ServicesSection: React.FC = () => {
    return (
      <Box  sx={{ py: 8, backgroundColor: '#111', color: '#fff' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Nuestros Servicios
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1">
              Ofrecemos una experiencia única de coctelería móvil para cualquier tipo de evento.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: '100%',
                height: 300,
                backgroundColor: '#333',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
              }}
            >
              Imagen/Gráfico
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  };
  export default ServicesSection