import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { MultiStepFormContext } from '../StepContext';
import { useContext } from 'react';



export const Step3 = () => {
  const {setActiveStep, data, setData, submit} = useContext(MultiStepFormContext)


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
            autoComplete="profession"
            name="profession"
            required
            fullWidth
            id="profession"
            label="profession"
            autoFocus
            value={data["profession"]}
            onChange={(e) => setData({...data, 'profession' : e.target.value})}
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            required
            fullWidth
            id="experience"
            label="experience"
            name="experience"
            autoComplete="experience"
            value={data["experience"]}
            onChange={(e) => setData({...data, 'experience' : e.target.value})}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="degree"
            label="degree"
            name="degree"
            autoComplete="degree"
            value={data["degree"]}
            onChange={(e) => setData({...data, 'degree' : e.target.value})}
          />
        </Grid>

      </Grid>
      <Stack spacing={2} marginTop={"1rem"} direction="row" justifyContent="flex-end">
        <Button variant="contained" onClick={() => setActiveStep(2)}>Préc</Button>
        <Button variant="outlined" onClick={submit}>Soumettre</Button>
      </Stack>
    </Box>
  </Box>
  )
}
