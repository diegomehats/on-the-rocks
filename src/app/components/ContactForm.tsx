import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ContactForm: React.FC = () => {
    return (
      <Box sx={{ py: 8, backgroundColor: '#111', color: '#fff', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Contáctanos
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="https://forms.gle/tuFormulario"
          target="_blank"
          sx={{ mt: 4 }}
        >
          Ir al Formulario
        </Button>
      </Box>
    );
  };
  export default ContactForm