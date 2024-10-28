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
import icon from "@/app/assets/Register-icon.svg";
import { poppins } from "../fonts";
import axios from "axios";
import { useNotification } from "../contexts";
import { BackArrow, SuccessIcon } from "../assets/svg";
import { targetDate } from "../utils/helper";
import { SummaryPage } from "../components/Form/FormSummary";

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
};
export default function Registration() {
  const { notify } = useNotification();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [isCountdownVisible, setIsCountdownVisible] = useState(false);
  const [isRegistrationClosed, setIsRegistrationClosed] = useState(false);
  const [initialRender, setInitialRender] = useState(true);
  const [countdownCheck, setCountdownCheck] = useState(false);

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState(defaultFormData);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleFormChange = (input) => (e) => {
    if (e.target.name === "project_file") {
      const file = e.target.files[0];

      const maxFileSize = 5 * 1024 * 1024;

      if (file && file.size > maxFileSize) {
        notify("Please select a file less than 5MB.", "warn");
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
      notify("Please all the fields are required.", "inform");
      return;
    }

    if (!formData.project_file) {
      notify("Please upload your project proposal.", "warn");
      return;
    }

    // Validate team leader email format
    if (!emailPattern.test(formData.team_leader_email)) {
      notify("Please enter a valid team leader email.", "warn");
      return;
    }

    // Validate team member 1 if applicable
    if (Number(formData.no_of_members) === 2) {
      if (!formData.team_member1_name || !formData.team_member1_email) {
        notify("Please fill out team member 2 details.", "inform");
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
        notify("Please fill out team member 2 details.", "inform");
        return;
      }
      if (!emailPattern.test(formData.team_member2_email)) {
        notify("Please enter a valid email for team member 2.", "warn");
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
          message = errorMessages.join(", ");
        }
      }
      notify(`${message}`, "error");
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
        setIsRegistrationClosed(true);
      } else {
        setIsRegistrationClosed(false);
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

  useEffect(() => {
    setInitialRender(false);
  }, []);

  if (isRegistrationClosed) {
    return (
      <main className={`${poppins.className} bg-[url('/stars.png')] min-h-screen flex justify-center items-center`}>
        <div>
          <h1 className="font-medium text-xl md:text-2xl mb-2 text-center">
            Registration Closed!
          </h1>
          <p className="text-center">
          Registration is now closed. We appreciate your interest! <br /> If you&apos;ve registered already, be on the lookout for our updates.
          </p>
        </div>
      </main>
    );
  }

  if (!initialRender && countdownCheck) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        {!success && (
          <div className="container w-[90%] relative">
            <Link href={"/"} className="absolute top-5 left-0">
              <BackArrow />
            </Link>
          </div>
        )}
        <div className="relative w-full max-w-2xl p-5">
          <div className="w-full flex items-center justify-center mb-8">
            <Link href={"/"}>
              <Image
                src={logo}
                width={1944}
                height={728}
                className="w-fit max-w-[100px] md:max-w-[200px] h-10"
                alt="RAIN-INN logo on the registration page"
              />
            </Link>
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
              {step === 0 && (
                <div>
                  <div className="mt-4">
                    <div className="flex flex-col sm:flex-row justify-between">
                      <h2 className="text-lg font-medium mb-2">
                        Hackathon Terms and Conditions
                      </h2>
                      <div className="flex justify-end mb-2">
                        <a
                          href="/Hackathon_Terms_and_Conditions.pdf"
                          download="RAIN_Hackathon_Terms_and_Conditions.pdf"
                          className="py-2 px-4 w-fit flex justify-center items-center bg-primary hover:scale-90 active:scale-100 transition duration-200 text-dark rounded cursor-pointer"
                        >
                          <span className="flex justify-center items-center">
                            Download PDF{" "}
                            <Image
                              src={icon}
                              alt={``}
                              width={16}
                              height={16}
                              className="ml-2 flex w-5 h-5 rotate-90 aspect-square rounded-full bg-black"
                            />
                          </span>
                        </a>
                      </div>
                    </div>
                    <embed
                      src="/Hackathon_Terms_and_Conditions.pdf"
                      type="application/pdf"
                      className="flex w-full h-full min-h-[400px] mx-auto"
                    />
                  </div>
                  <div className="mt-8">
                  <div className="flex flex-col sm:flex-row justify-between">
                    <h2 className="text-lg font-medium mb-2">
                      Hackathon Proposal Guidelines
                    </h2>
                    <div className="flex justify-end mb-2">
                      <a
                        href="/Hackathon_Proposal_Guidelines.pdf"
                        download="RAIN_Hackathon_Proposal_Guidelines.pdf"
                        className="py-2 px-4 w-fit flex justify-center items-center bg-primary hover:scale-90 active:scale-100 transition duration-200 text-dark rounded cursor-pointer"
                      >
                        <span className="flex justify-center items-center">
                          Download PDF{" "}
                          <Image
                            src={icon}
                            alt={``}
                            width={16}
                            height={16}
                            className="ml-2 flex w-5 h-5 rotate-90 aspect-square rounded-full bg-black"
                          />
                        </span>
                      </a>
                    </div>
                  </div>
                    <embed
                      src="/Hackathon_Proposal_Guidelines.pdf"
                      type="application/pdf"
                      className="flex w-full h-full min-h-[400px] mx-auto"
                    />
                  </div>
                  <div className="flex justify-end mt-8">
                    <button
                      onClick={() => setStep(1)}
                      type="button"
                      className="w-fit max-w-[200px] ml-auto py-2 px-4 bg-primary hover:scale-90 active:scale-100 transition duration-200 rounded"
                    >
                      <span className="flex justify-center items-center">
                        Continue{" "}
                        <Image
                          src={icon}
                          alt={``}
                          width={16}
                          height={16}
                          className="ml-2 flex w-5 h-5 aspect-square rounded-full bg-black"
                        />
                      </span>
                    </button>
                  </div>
                </div>
              )}
              {step === 1 && (
                <Step1
                  formData={formData}
                  handleFormChange={handleFormChange}
                  prevStep={prevStep}
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
                  nextStep={nextStep}
                  prevStep={prevStep}
                  loading={loading}
                />
              )}
              {step === 4 && (
                <SummaryPage
                  formData={formData}
                  setStep={setStep}
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
  );
}
