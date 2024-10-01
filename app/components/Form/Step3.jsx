export default function Step3({ formData, handleFormChange, prevStep }) {
  // console.log("formData", formData)
  const specializations = [
    { name: "Robotics", value: "Robotics" },
    { name: "Artificial Intelligence", value: "AI" },
    { name: "Machine Learning", value: "ML" },
    { name: "Robotic Process Automation", value: "Robotic Process Automation" },
  ];
  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-6">
        Specialization & Proposal Submission
      </h2>

      <div className="mb-4">
        <label className="block mb-2">Area of Specialization</label>
        <div className="flex flex-col">
          {specializations.map((option) => (
            <div
              key={option.name}
              className="inline-flex items-center"
            >
              <input
                type="radio"
                name="area_of_specialization"
                id={option.name}
                value={option.value}
                checked={formData.area_of_specialization === option.value}
                onChange={handleFormChange("area_of_specialization")}
              />
              <label htmlFor={option.name} className="ml-2">{option.name}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="block mb-2">Upload Document</p>
        <label
          htmlFor="project_file"
          className="border-dashed border-2 rounded-lg p-4 text-center cursor-pointer flex justify-center"
        >
          <input
            name="project_file"
            id="project_file"
            type="file"
            className="hidden"
            onChange={handleFormChange("project_file")}
          />
          {formData.project_file?
          <p className="text-gray-500 text-center">{formData.project_file.name} was selected</p>
        :  <p className="text-gray-500 text-center">Click to upload</p>
        }
        </label>
      </div>

      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={prevStep}
          className="py-2 px-4 bg-gray-300 rounded"
        >
          Back
        </button>
        <button
          type="submit"
          className="py-2 px-4 bg-yellow-500 text-white rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
