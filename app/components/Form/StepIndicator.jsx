import { StepStraight } from "@/app/assets/svg";
import { poppins } from "@/app/fonts";

export default function StepIndicator({ currentStep }) {
  return (
    <section className={`${poppins.className}`}>
      <div>
        <h1 className="font-medium text-xl md:text-2xl mb-2">Welcome, Innovators!</h1>
        <p>Please complete the form below to register and submit your team&apos;s proposal</p>
      </div>
    
      <div className=" mb-6">
        <div className="step-indicator flex items-center space-x-2 md:space-x-5">
          <span className={`w-8 md:w-10 h-8 md:h-10 aspect-square flex justify-center items-center text-sm md:text-base text-center rounded-full border ${currentStep >= 1 ? 'text-black font-bold' : 'text-gray-400'}`}>
            1
          </span>
          <StepStraight />
          <span className={`w-8 md:w-10 h-8 md:h-10 aspect-square flex justify-center items-center text-sm md:text-base text-center rounded-full border ${currentStep >= 2 ? 'text-black font-bold' : 'text-gray-400'}`}>2</span>
          <StepStraight />
          <span className={`w-8 md:w-10 h-8 md:h-10 aspect-square flex justify-center items-center text-sm md:text-base text-center rounded-full border ${currentStep >= 3 ? 'text-black font-bold' : 'text-gray-400'}`}>3</span>
        </div>
      </div>
    </section>
  );
}