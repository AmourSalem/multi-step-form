import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



export const Step2 = () => {
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
          />
        </Grid>

      </Grid>
      <Stack spacing={2} marginTop={"1rem"} direction="row" justifyContent="flex-end">
        <Button variant="contained">Préc</Button>
        <Button variant="outlined">Suiv</Button>
      </Stack>
    </Box>
  </Box>
  )
}
