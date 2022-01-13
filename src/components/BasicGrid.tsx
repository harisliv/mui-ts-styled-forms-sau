import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



const BasicGrid: React.FC = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={4}>
          {props.children}
        </Grid>
        <Grid item xs={4}>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BasicGrid