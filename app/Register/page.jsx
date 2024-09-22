'use client';

import { useState } from 'react';
import Image from 'next/image';
import logo from "@/app/assets/register-logo.png";
import Step1 from '@/app/components/Form/Step1';
import Step2 from '@/app/components/Form/Step2';
import Step3 from '@/app/components/Form/Step3';
import StepIndicator from '../components/Form/StepIndicator';

export default function Registration() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    teamName: '',
    fullName: '',
    email: '',
    totalMembers: 1,  // Default to working alone
    teamMembers: [{ name: '', email: '' }],
    specialization: '',
    document: null,
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleFormChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-xl p-5 ">
        <div className="w-full flex items-center justify-center mb-20">
          <Image
            src={logo}
            alt="RAIN-IN logo on the registration page"
          />
        </div>
        
        <StepIndicator currentStep={step} />
        {step === 1 && <Step1 formData={formData} handleFormChange={handleFormChange} nextStep={nextStep} />}
        {step === 2 && <Step2 formData={formData} handleFormChange={handleFormChange} nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <Step3 formData={formData} handleFormChange={handleFormChange} prevStep={prevStep} />}
      </div>
    </main>
  );
}