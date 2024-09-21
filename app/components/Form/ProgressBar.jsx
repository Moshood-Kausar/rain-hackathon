export default function ProgressBar({ currentStep }) {
  const steps = [1, 2, 3];
  return (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div className={`w-8 h-8 rounded-full border ${currentStep >= step ? 'bg-yellow-500' : 'bg-gray-300'}`}>{step}</div>
          {index < steps.length - 1 && <div className="flex-1 border-t-2 border-gray-300 mx-2"></div>}
        </div>
      ))}
    </div>
  );
}