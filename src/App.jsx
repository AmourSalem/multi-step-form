import CssBaseline from '@mui/material/CssBaseline';
import {Container, Box, StepLabel, Stepper, Step} from '@mui/material';
import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';
import { Step3 } from './components/Step3';

const steps = [
  'Select master blaster campaign settings',
  'Create an ad group',
  'Create an ad',
];

function StepperComponent() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}




function App() {

  return (
    <>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          textAlign: 'center', // Centrer horizontalement
          margin: 'auto', // pour centrer verticalement
          height: '100vh', // CEci me permet de centrer verticalement sur l'écran entier
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <CssBaseline />
        <StepperComponent />
        <Step1 />
      </Container>

    </>
  )
}

export default App
