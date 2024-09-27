'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from "@/app/assets/register-logo.png";
import Step1 from '@/app/components/Form/Step1';
import Step2 from '@/app/components/Form/Step2';
import Step3 from '@/app/components/Form/Step3';
import StepIndicator from '../components/Form/StepIndicator';
import Link from 'next/link';
import rocket from "@/app/assets/rocket.png";
import planet1 from "@/app/assets/planet-1.png";
import planet2 from "@/app/assets/planet-2.png";
import { poppins } from '../fonts';

export default function Registration() {

  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [isCountdownVisible, setIsCountdownVisible] = useState(false);
  const [countdownCheck, setCoundownCheck] = useState(false);
  const [isInitialRender, setRender] = useState(true);

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

 let targetDate="2024-10-01T00:00:00";
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        setIsCountdownVisible(false);
      } else {
        setIsCountdownVisible(true)
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setDays(String(days).padStart(2, "0"));
        setHours(String(hours).padStart(2, "0"));
        setMinutes(String(minutes).padStart(2, "0"));
        setSeconds(String(seconds).padStart(2, "0"));
      }
    }, 1000);

    setCoundownCheck(true);

    return () => clearInterval(interval);
  }, [targetDate]);

  useEffect(()=> {
    setTimeout(()=>{
      setRender(false);
  }, 2000)
  },[])

  if (isCountdownVisible) {
    return (
      <section className="bg-hero min-h-screen">
      <main className="container mx-auto pt-[72px] pb-4 md:pb-[105px] px-4 md:px-10 lg:px-20 bg-[url('/hero-stars.png')] h-screen w-screen relative top-0 left-0">
        <div className="w-full h-full flex flex-col items-center justify-center">
          < Image
            src={logo}
            alt="RAIN-IN"
            className="w-[100px] mb-20" />

          <h1 className="text-sm md:text-base text-center mx-auto w-fit h-fit rounded-lg px-4 md:px-[33px] py-[10px] leading-normal text-dark border border-[#4C4E1C] mb-[18px] md:mb-10">
              Oct 1st - Jan 31st 2025
          </h1>
          <p className="mb-5 -mt-3">The registration countdown is on....</p>
          
          
          <div
        className={`${poppins.className} flex justify-between gap-4 shrink-0 w-full max-w-[274px] md:max-w-[370px] mx-auto pt-4 md:pt-0`}
      >
        <div className="flex flex-col items-center p-2 md:p-5 bg-primary rounded-lg">
          <h4 className="w-[30px] md:w-[45px] aspect-square rounded-full bg-white flex items-center justify-center text-xs md:text-xl mb-0.5">{days}</h4>
          <p className="text-xs md:text-sm text-center">days</p>
        </div>
        
        <div className="flex flex-col items-center p-2 md:p-5 bg-primary rounded-lg">
          <h4 className="w-[30px] md:w-[45px] aspect-square rounded-full bg-white flex items-center justify-center text-xs md:text-xl mb-0.5">{hours}</h4>
          <p className="text-xs md:text-sm text-center">hours</p>
        </div>
        
        <div className="flex flex-col items-center p-2 md:p-5 bg-primary rounded-lg">
          <h4 className="w-[30px] md:w-[45px] aspect-square rounded-full bg-white flex items-center justify-center text-xs md:text-xl mb-0.5">{minutes}</h4>
          <p className="text-xs md:text-sm text-center">minutes</p>
        </div>
        
        <div className="flex flex-col items-center p-2 md:p-5 bg-primary rounded-lg">
          <h4 className="w-[30px] md:w-[45px] aspect-square rounded-full bg-white flex items-center justify-center text-xs md:text-xl mb-0.5">{seconds}</h4>
          <p className="text-xs md:text-sm text-center">seconds</p>
        </div>
      </div>

          <Link href='/' className="bg-dark text-sm text-white py-3 px-6 rounded-lg mt-8">Go to Home</Link>
        </div>
        
        <Image
          src={planet1}
          width={127}
          height={123}
          alt=""
          className="absolute top-10 md:top-[60px] left-4 md:left-10 animate-bounce-slowTop w-[45px] md:w-[125px]"
        />
        <Image
          src={rocket}
          width={111}
          height={104}
          alt=""
          className="absolute top-[80%] md:top-[63%] lg:top-1/2 left-4 md:left-10 animate-bounce-slow w-[50px] md:w-[110px]"
        />
        <Image
          src={planet2}
          width={111}
          height={104}
          alt=""
          className="absolute top-10 right-4 animate-bounce-slow w-[45px] md:w-[110px]"
        />
        <Image
          src={planet1}
          width={111}
          height={104}
          alt=""
          className="absolute top-2/3 right-12 animate-bounce-slowTop w-[45px] md:w-[110px] md:scale-90"
        />
      </main>
    </section>
    );
  }

  if (!isInitialRender && countdownCheck) {
    return (
      <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-xl p-5">
        <div className="w-full flex items-center justify-center mb-20">
          <Image
            src={logo}
            alt="RAIN-INN logo on the registration page"
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

  return (
    <div className='flex min-h-screen w-full justify-center items-center'>
      <Image
            src={logo}
            alt="RAIN-INN logo on the registration page"
            className='animate-bounce'
          />
    </div>
  );
}