export default function Step3({ formData, handleFormChange, prevStep }) {
  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-6">Specialization & Proposal Submission</h2>

      <div className="mb-4">
        <label className="block mb-2">Area of Specialization</label>
        <div className="flex flex-col">
          {['Robotics', 'Artificial Intelligence', 'Machine Learning', 'Robotic Process Automation'].map((option) => (
            <label key={option} className="inline-flex items-center">
              <input type="radio" name="specialization" value={option} onChange={handleFormChange('specialization')} />
              <span className="ml-2">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Upload Document</label>
        <div className="border-dashed border-2 rounded-lg p-4 text-center">
          <input type="file" className="hidden" />
          <p className="text-gray-500">Drag and drop your document here or click to upload</p>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button onClick={prevStep} className="py-2 px-4 bg-gray-300 rounded">Back</button>
        <button className="py-2 px-4 bg-yellow-500 text-white rounded">Submit</button>
      </div>
    </div>
  );
}