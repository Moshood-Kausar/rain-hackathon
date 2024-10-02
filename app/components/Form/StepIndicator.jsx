import { StepStraight, CheckMark } from "@/app/assets/svg";
import { poppins } from "@/app/fonts";

export default function StepIndicator({ currentStep }) {
  return (
    <section className={`${poppins.className}`}>
      {currentStep === 0 && (
        <div>
        <h1 className="font-medium text-xl md:text-2xl mb-2">
          Welcome, Innovators!
        </h1>
        <p>
          Before continuing, ensure you&apos;ve gone through the Hackathon Terms
          and Condition and the Hackathon Proposal Guidelines to avoid disqualification.
        </p>
      </div>
      )}
      {(currentStep === 1 || currentStep === 4) && (
        <div>
          <h1 className="font-medium text-xl md:text-2xl mb-2">
            Welcome, Innovators!
          </h1>
          <p>
            Please complete the form below to register and submit your
            team&apos;s proposal.
          </p>
        </div>
      )}

      {currentStep === 2 && (
        <p>
          You can pick a maximum of 2 members, which makes you 3 in the team,
          you can skip if you don&apos;t have a team.
        </p>
      )}

      {currentStep === 3 && (
        <p>
          Make sure you select the right project focus and upload the right
          file.
        </p>
      )}

      <div className="mt-4 mb-6">
        <div className="step-indicator flex items-center space-x-2 md:space-x-5">
          <span
            className={`w-8 md:w-10 h-8 md:h-10 aspect-square flex justify-center items-center text-sm md:text-base text-center font-medium rounded-full border ${
              currentStep >= 1 ? "text-black border-primary" : "text-gray-400"
            } ${currentStep > 1 ? "bg-primary" : ""}`}
          >
            {currentStep > 1 ? <CheckMark /> : "1"}
          </span>
          <StepStraight />
          <span
            className={`w-8 md:w-10 h-8 md:h-10 aspect-square flex justify-center items-center text-sm md:text-base text-center font-medium rounded-full border ${
              currentStep >= 2 ? "text-black border-primary" : "text-gray-400"
            } ${currentStep > 2 ? "bg-primary" : ""}`}
          >
            {currentStep > 2 ? <CheckMark /> : "2"}
          </span>
          <StepStraight />
          <span
            className={`w-8 md:w-10 h-8 md:h-10 aspect-square flex justify-center items-center text-sm md:text-base text-center font-medium rounded-full border ${
              currentStep >= 3 ? "text-black border-primary" : "text-gray-400"
            } ${currentStep > 3 ? "bg-primary" : ""}`}
          >
            {currentStep > 3 ? <CheckMark /> : "3"}
          </span>
        </div>
      </div>
    </section>
  );
}
