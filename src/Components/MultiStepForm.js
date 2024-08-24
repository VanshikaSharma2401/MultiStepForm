import React, { useState, useEffect } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { Button, Container, Typography } from '@mui/material';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('formData');
    return savedData ? JSON.parse(savedData) : {
      name: '',
      email: '',
      phone: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zipCode: '',
    };
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateStep = () => {
    let valid = true;
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
        valid = false;
      }
      if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Valid email is required';
        valid = false;
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
        valid = false;
      }
    }

    if (currentStep === 2) {
      if (!formData.addressLine1.trim()) {
        newErrors.addressLine1 = 'Address Line 1 is required';
        valid = false;
      }
      if (!formData.city.trim()) {
        newErrors.city = 'City is required';
        valid = false;
      }
      if (!formData.state.trim()) {
        newErrors.state = 'State is required';
        valid = false;
      }
      if (!formData.zipCode.trim()) {
        newErrors.zipCode = 'Valid Zip Code is required';
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep(prevStep => prevStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Multi-Step Form
      </Typography>
      {currentStep === 1 && <Step1 data={formData} onChange={handleChange} errors={errors} />}
      {currentStep === 2 && <Step2 data={formData} onChange={handleChange} errors={errors} />}
      {currentStep === 3 && <Step3 data={formData} />}

      <div className="navigation-buttons">
        {currentStep > 1 && (
          <Button onClick={handleBack} variant="contained" color="secondary">
            Back
          </Button>
        )}
        {currentStep < 3 ? (
          <Button onClick={handleNext} variant="contained" color="primary">
            Next
          </Button>
        ) : (
          <Button variant="contained" color="success" onClick={()=>alert("Your data is submitted!!")}>
            Submit
          </Button>
        )}
      </div>
    </Container>
  );
};

export default MultiStepForm;
