import React, { useState } from 'react';
import App from './App';

export const MultiStepFormContext = React.createContext();

export const StepContext = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [data, setData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  function submit() {
    console.log(data)
  }
  
  return (
      <MultiStepFormContext.Provider value={{activeStep, setActiveStep, data, setData, finalData, setFinalData, submit}}>
        <App />
      </MultiStepFormContext.Provider>
  );
};

