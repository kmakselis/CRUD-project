import React from 'react';
import {
  Paper,
  Button,
  Typography,
} from '@mui/material';

const Header = ({ openModal }) => (
  <Paper
    sx={{
      p: 2, bgcolor: 'white', width: '100%',
    }}
  >
    <Typography variant="h6" sx={{ mb: 1 }}>Administratoriaus veiksmai</Typography>
    <Button variant="contained" color="success" onClick={openModal}>Sukurti naują pasiūlymą</Button>
  </Paper>
);

export default Header;
