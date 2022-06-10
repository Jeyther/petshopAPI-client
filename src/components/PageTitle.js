import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const PageTitle = ({ title, buttonTitle, handleToggleAddModal }) => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={4}
      mb={4}
    >
      <Typography variant="h1" sx={{ textTransform: 'uppercase' }}>
        {title}
      </Typography>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleToggleAddModal}
      >
        {buttonTitle}
      </Button>
    </Stack>
  );
};

export default PageTitle;
