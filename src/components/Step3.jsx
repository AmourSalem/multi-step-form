import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



export const Step3 = () => {
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
