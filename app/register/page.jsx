"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/app/assets/rain_logo2.png";
import Step1 from "@/app/components/Form/Step1";
import Step2 from "@/app/components/Form/Step2";
import Step3 from "@/app/components/Form/Step3";
import StepIndicator from "../components/Form/StepIndicator";
import Link from "next/link";
import rocket from "@/app/assets/rocket.png";
import planet1 from "@/app/assets/planet-1.png";
import planet2 from "@/app/assets/planet-2.png";
import { poppins } from "../fonts";
import axios from "axios";
import { useNotification } from "../contexts";
import { BackArrow, SuccessIcon } from "../assets/svg";
import { targetDate } from "../utils/helper";

const defaultFormData = {
  team_name: "",
  team_leader_name: "",
  team_leader_email: "",
  no_of_members: 1,
  team_member1_name: "",
  team_member1_email: "",
  team_member2_name: "",
  team_member2_email: "",
  area_of_specialization: "Food Security",
  project_file: null,
}
export default function Registration() {
  const { notify } = useNotification();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [isCountdownVisible, setIsCountdownVisible] = useState(false);
  const [initialRender, setInitialRender] = useState(true);
  const [countdownCheck, setCountdownCheck] = useState(false);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(defaultFormData);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleFormChange = (input) => (e) => {
    if (e.target.name === "project_file") {
      const file = e.target.files[0];

    const maxFileSize = 2 * 1024 * 1024;

    if (file && file.size > maxFileSize) {
      notify("Please select a file less than 2MB.", 'warn');
      return;
    }

    setFormData({
      ...formData,
      project_file: file,
    });
    } else {
      setFormData({ ...formData, [input]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate the required fields
    if (
      !formData.team_name ||
      !formData.team_leader_name ||
      !formData.team_leader_email ||
      !formData.area_of_specialization
    ) {
      notify("Please all the fields are required.", 'inform');
      return;
    }

    if(!formData.project_file){
      notify("Please upload your project proposal.", 'warn');
      return;
    }

    // Validate team leader email format
    if (!emailPattern.test(formData.team_leader_email)) {
      notify("Please enter a valid team leader email.", 'warn');
      return;
    }

    // Validate team member 1 if applicable
    if (Number(formData.no_of_members) === 2) {
      if (!formData.team_member1_name || !formData.team_member1_email) {
        notify("Please fill out team member 1 details.", 'inform');
        return;
      }
      if (!emailPattern.test(formData.team_member1_email)) {
        notify("Please enter a valid email for team member 1.", "warn");
        return;
      }
    }

    // Validate team member 2 if applicable
    if (Number(formData.no_of_members) === 3) {
      if (!formData.team_member2_name || !formData.team_member2_email) {
        notify("Please fill out team member 2 details.", 'inform');
        return;
      }
      if (!emailPattern.test(formData.team_member2_email)) {
        notify("Please enter a valid email for team member 2.", 'warn');
        return;
      }
    }

    // Prepare FormData for the file upload
    const submissionData = new FormData();
    submissionData.append("team_name", formData.team_name);
    submissionData.append("team_leader_name", formData.team_leader_name);
    submissionData.append("team_leader_email", formData.team_leader_email);
    submissionData.append("no_of_members", Number(formData.no_of_members));
    if (Number(formData.no_of_members) === 2) {
      submissionData.append("team_member1_name", formData.team_member1_name);
      submissionData.append("team_member1_email", formData.team_member1_email);
    }
    if (Number(formData.no_of_members) === 3) {
      submissionData.append("team_member2_name", formData.team_member2_name);
      submissionData.append("team_member2_email", formData.team_member2_email);
    }
    submissionData.append(
      "area_of_specialization",
      formData.area_of_specialization
    );
    submissionData.append("project_file", formData.project_file);
    setLoading(true);
    try {
      const response = await axios.post(
        "https://rainn.azurewebsites.net/",
        submissionData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSuccess(true);
      setFormData(defaultFormData);
    } catch (error) {
      let message = "An error has occurred";

  if (error.response && error.response.data) {
    const errorData = error.response.data;

    // Collect all error messages
    const errorMessages = [];

    // Check if there are field-specific errors
    for (const field in errorData) {
      if (Array.isArray(errorData[field])) {
        // Add each error for the field
        errorData[field].forEach((errorDetail) => {
          errorMessages.push(`${field}: ${errorDetail}`);
        });
      }
    }

    // If we found specific error messages, update the default message
    if (errorMessages.length > 0) {
      message = errorMessages.join(', ');
    }
  }
      notify(`${message}`, 'error')
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        setIsCountdownVisible(false);
      } else {
        setIsCountdownVisible(true);
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setDays(String(days).padStart(2, "0"));
        setHours(String(hours).padStart(2, "0"));
        setMinutes(String(minutes).padStart(2, "0"));
        setSeconds(String(seconds).padStart(2, "0"));
      }
      setCountdownCheck(true);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

useEffect(()=> {
  setInitialRender(false);
},[])
  
  if (isCountdownVisible) {
    return (
      <main className={`${poppins.className} bg-hero min-h-screen`}>
        <section className="container mx-auto pt-[72px] pb-4 md:pb-[105px] px-4 md:px-10 lg:px-20 bg-[url('/hero-stars.png')] h-screen w-screen relative top-0 left-0">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <Image
              src={logo}
              alt="RAIN-IN"
              width={1944}
              height={728}
              className="w-[200px] mb-20"
            />

            <h1 className="text-sm md:text-base text-center mx-auto w-fit h-fit rounded-lg px-4 md:px-[33px] py-[10px] leading-normal text-dark border border-[#4C4E1C] mb-[18px] md:mb-10">
              Oct 1st - Jan 31st 2025
            </h1>
            <p className="text-center mb-5 -mt-3">
              The registration countdown is on ...
            </p>

            <div
              className={`flex justify-between gap-2 md:gap-4 w-full max-w-[370px] md:max-w-fit mx-auto pt-4 md:pt-0`}
            >
              <div className="flex flex-col items-center p-2 md:p-5 bg-primary min-w-16 md:min-w-24 rounded-lg">
                <h4 className="w-[30px] md:w-[45px] aspect-square rounded-full bg-white flex items-center justify-center text-xs md:text-xl mb-0.5">
                  {days}
                </h4>
                <p className="text-xs md:text-sm text-center">days</p>
              </div>

              <div className="flex flex-col items-center p-2 md:p-5 bg-primary min-w-16 md:min-w-24 rounded-lg">
                <h4 className="w-[30px] md:w-[45px] aspect-square rounded-full bg-white flex items-center justify-center text-xs md:text-xl mb-0.5">
                  {hours}
                </h4>
                <p className="text-xs md:text-sm text-center">hours</p>
              </div>

              <div className="flex flex-col items-center p-2 md:p-5 bg-primary min-w-16 md:min-w-24 rounded-lg">
                <h4 className="w-[30px] md:w-[45px] aspect-square rounded-full bg-white flex items-center justify-center text-xs md:text-xl mb-0.5">
                  {minutes}
                </h4>
                <p className="text-xs md:text-sm text-center md:hidden">mins</p>
                <p className="text-xs md:text-sm text-center hidden md:block">
                  minutes
                </p>
              </div>

              <div className="flex flex-col items-center p-2 md:p-5 bg-primary min-w-16 md:min-w-24 rounded-lg">
                <h4 className="w-[30px] md:w-[45px] aspect-square rounded-full bg-white flex items-center justify-center text-xs md:text-xl mb-0.5">
                  {seconds}
                </h4>
                <p className="text-xs md:text-sm text-center md:hidden">secs</p>
                <p className="text-xs md:text-sm text-center hidden md:block">
                  seconds
                </p>
              </div>
            </div>
            <Link
              href="/"
              className="bg-primary text-sm text-dark py-3 px-6 rounded-lg mt-8"
            >
              Go to Home page
            </Link>
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
        </section>
      </main>
    );
  }

  if(!initialRender && countdownCheck){
    return (
      <main className="min-h-screen flex items-center justify-center">
        {!success && (
          <Link href={"/"} className="absolute top-5 left-4 md:left-[130px]">
            <BackArrow />
          </Link>
        )}
        <div className="relative w-full max-w-xl p-5">
          <div className="w-full flex items-center justify-center mb-8">
            <Image
              src={logo}
              width={1944}
              height={728}
              className="w-fit max-w-[100px] md:max-w-[200px] h-10"
              alt="RAIN-INN logo on the registration page"
            />
          </div>
          {success ? (
            <div className="flex flex-col justify-center items-center">
              <SuccessIcon />
              <div className="flex flex-col justify-center items-center mt-6">
                <h2 className="text-center font-medium text-dark text-lg md:text-xl mb-4">
                  Registration Successful!
                </h2>
                <p className="text-center mb-7">
                  Thanks for registering! A confirmation email has been sent to
                  you.{" "}
                </p>
                <Link
                  href="/"
                  className="bg-primary text-sm text-dark py-3 px-6 rounded-lg text-center mx-auto"
                >
                  Go to Home page
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <StepIndicator currentStep={step} />
              {step === 1 && (
                <Step1
                  formData={formData}
                  handleFormChange={handleFormChange}
                  nextStep={nextStep}
                />
              )}
              {step === 2 && (
                <Step2
                  formData={formData}
                  handleFormChange={handleFormChange}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              )}
              {step === 3 && (
                <Step3
                  formData={formData}
                  handleFormChange={handleFormChange}
                  prevStep={prevStep}
                  loading={loading}
                />
              )}
            </form>
          )}
        </div>
      </main>
    );
  }

  return (
    <div className="flex h-full justify-center items-center w-full min-h-dvh">
      <Image
          src={logo}
          width={1944}
          height={728}
          className="w-fit max-w-[100px] md:max-w-[200px] h-10 animate-bounce"
          alt="RAIN-INN logo on the registration page"
        />
    </div>
  )
}
