import { Cloud } from "@/app/assets/svg";
import { useNotification } from "@/app/contexts";

export default function Step3({
  formData,
  handleFormChange,
  nextStep,
  prevStep,
}) {
  const { notify } = useNotification();
  const specializations = [
    { name: "Food Security", value: "Food Security" },
    { name: "National Security", value: "National Security" },
    { name: "Health Care", value: "Health Care" },
    { name: "E-Commerce", value: "E-Commerce" },
    { name: "Special Education", value: "Special Education" },
  ];

  const handleNext = () => {
    if (formData.project_file && formData.area_of_specialization) {
      nextStep();
    } else {
      notify("Please fill in all required fields", "inform");
    }
  };

  return (
    <div>
      <h2 className="text-lg md:text-xl font-medium mb-6">
        Project Focus & Proposal Submission
      </h2>

      <div className="mb-4">
        <label className="block mb-2">Thematic Area of Project Focus</label>
        <div className="flex flex-col">
          {specializations.map((option) => (
            <div key={option.name} className="inline-flex items-center">
              <input
                type="radio"
                name="area_of_specialization"
                id={option.name}
                value={option.value}
                checked={formData.area_of_specialization === option.value}
                onChange={handleFormChange("area_of_specialization")}
              />
              <label htmlFor={option.name} className="ml-2">
                {option.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="block mb-2">Upload Document (PDF/doc/docx)  <span className="text-red-500"> *</span></p>
        <label
          htmlFor="project_file"
          className="border-dashed border-2 border-primary rounded-lg p-4 text-center cursor-pointer flex justify-center"
        >
          <input
            name="project_file"
            id="project_file"
            type="file"
            accept=".doc,.docx,.pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf"
            className="hidden"
            onChange={handleFormChange("project_file")}
          />
          {formData.project_file ? (
            <p className="text-gray-500 text-center">
              {formData.project_file.name} was selected
            </p>
          ) : (
            <p className="text-gray-500 text-center flex flex-col justify-center">
              <Cloud />
              Click to select document (max. 5MB)
            </p>
          )}
        </label>
      </div>

      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={prevStep}
          className="py-2 px-4 w-full max-w-[116px] bg-transparent border border-primary rounded"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="py-2 px-4 w-full max-w-[116px] bg-yellow-500 text-dark rounded disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}
