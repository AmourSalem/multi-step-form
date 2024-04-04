import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { MultiStepFormContext } from '../StepContext';
import { useContext } from 'react';




export const Step2 = () => {
  const {setActiveStep, data, setData} = useContext(MultiStepFormContext)


  return (
    <Box
    sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Box component="form" noValidate sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <TextField
            autoComplete="city"
            name="city"
            required
            fullWidth
            id="city"
            label="city"
            autoFocus
            value={data["city"]}
            onChange={(e) => setData({...data, 'city' : e.target.value})}
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            required
            fullWidth
            id="address"
            label="address"
            name="address"
            autoComplete="address"
            value={data["address"]}
            onChange={(e) => setData({...data, 'address' : e.target.value})}
          />
        </Grid>

      </Grid>
      <Stack spacing={2} marginTop={"1rem"} direction="row" justifyContent="flex-end">
        <Button variant="contained" onClick={() => setActiveStep(1)}>Préc</Button>
        <Button variant="outlined" onClick={() => setActiveStep(3)}>Suiv</Button>
      </Stack>
    </Box>
  </Box>
  )
}
