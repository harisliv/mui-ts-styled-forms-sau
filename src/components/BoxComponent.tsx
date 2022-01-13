import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function BoxComponent() {
  return (
    <Box component="span" sx={{ p: 1, border: '15px dashed grey' }}>
      <Button>Save</Button>
    </Box>
  );
}