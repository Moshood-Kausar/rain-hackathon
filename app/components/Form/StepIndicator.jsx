import { StepStraight } from "@/app/assets/svg";

export default function StepIndicator({ currentStep }) {
  return (
    <div className="flex justify-center mb-6">
      <div className="step-indicator flex items-center space-x-2">
        <span className={`step ${currentStep >= 1 ? 'text-black font-bold' : 'text-gray-400'}`}>1</span>
        <StepStraight />
        <span className={`step ${currentStep >= 2 ? 'text-black font-bold' : 'text-gray-400'}`}>2</span>
        <StepStraight />
        <span className={`step ${currentStep >= 3 ? 'text-black font-bold' : 'text-gray-400'}`}>3</span>
      </div>
    </div>
  );
}