import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { MultiStepFormContext } from '../StepContext';




export const Step1 = () => {

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
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
            value={data["firstName"]}
            onChange={(e) => setData({...data, 'firstName' : e.target.value})}
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
            value={data["lastName"]}
            onChange={(e) => setData({...data, 'lastName' : e.target.value})}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={data["email"]}
            onChange={(e) => setData({...data, 'email' : e.target.value})}
          />
        </Grid>

      </Grid>
      <Box display="flex" justifyContent="flex-end">
        <Button style={{ marginTop: '1em' }} variant="outlined" onClick={() => setActiveStep(2)}>Suiv</Button>
      </Box>
    </Box>
  </Box>
  )
}
