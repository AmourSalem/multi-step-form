import CssBaseline from '@mui/material/CssBaseline';
import {Container, Box, StepLabel, Stepper, Step} from '@mui/material';
import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';
import { Step3 } from './components/Step3';
import { useContext } from 'react';
import { MultiStepFormContext } from './StepContext';


function App() {
const {activeStep} = useContext(MultiStepFormContext)
  function showStep(step) {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      default:
        return null;
    }
  }

  return (
    <>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          textAlign: 'center',
          margin: 'auto',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <CssBaseline />
        <h2 style={{ color: 'blue' }}>React Multi Step form</h2>
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={activeStep - 1} alternativeLabel>
            <Step>
              <StepLabel>Step 1</StepLabel>
            </Step>
            <Step>
              <StepLabel>Step 2</StepLabel>
            </Step>
            <Step>
              <StepLabel>Step 3</StepLabel>
            </Step>
          </Stepper>
        </Box>
        {showStep(activeStep)}
      </Container>
    </>
  );
}


export default App
