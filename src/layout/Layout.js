import { Box, Container } from '@mui/material';
import Header from './Header/Header';

export default function Layout({ children }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      {/* Agregar la siguiente prop para centrar verticalmente el contenido
        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, py: 5 }} */}
      <Container maxWidth={'xl'} sx={{ py: 5 }}>
        {children}
      </Container>
    </Box>
  );
}
