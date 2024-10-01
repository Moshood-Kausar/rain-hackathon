import { StepStraight } from "@/app/assets/svg";

export default function StepIndicator({ currentStep }) {
  return (
    <main>
      <div>
        <h1 className="font-medium text-sm md:text-lg lg:text-2xl">Welcome, Innovators!</h1>
        <p className="font-normal text-[16px]">Please complete the form below to register and submit your team&apos;s proposal</p>
      </div>
    
      <div className=" mb-6">
        <div className="step-indicator flex items-center space-x-2">
          <span className={`step ${currentStep >= 1 ? 'text-black font-bold' : 'text-gray-400'}`}>1</span>
          <StepStraight />
          <span className={`step ${currentStep >= 2 ? 'text-black font-bold' : 'text-gray-400'}`}>2</span>
          <StepStraight />
          <span className={`step ${currentStep >= 3 ? 'text-black font-bold' : 'text-gray-400'}`}>3</span>
        </div>
      </div>
    </main>
  );
}