export default function Step2({ formData, handleFormChange, nextStep, prevStep }) {
  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-6">Team Members Information</h2>
      <p className="text-center mb-6">Complete your team’s details</p>

      <div className="mb-4">
        <label className="block mb-2">Total Members</label>
        <select value={formData.totalMembers} onChange={handleFormChange('totalMembers')} className="w-full p-2 border rounded">
          {[1, 2, 3, 4].map((number) => (
            <option key={number} value={number}>{number}</option>
          ))}
        </select>
      </div>

      {/* If the user selects more than 1 member, display input fields for team members */}
      {formData.totalMembers > 1 &&
        Array.from({ length: formData.totalMembers - 1 }).map((_, index) => (
          <div key={index} className="mb-4">
            <label className="block mb-2">Team Member {index + 1} Name</label>
            <input type="text" placeholder="Name" className="w-full p-2 border rounded mb-2" />
            <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          </div>
        ))}

      <div className="flex justify-between mt-6">
        <button onClick={prevStep} className="py-2 px-4 bg-gray-300 rounded">Back</button>

        {/* If the user selects 1 member, show the "Skip" button; otherwise show "Next" */}
        {formData.totalMembers === 1 ? (
          <button onClick={nextStep} className="py-2 px-4 bg-yellow-500 text-white rounded">Skip</button>
        ) : (
          <button onClick={nextStep} className="py-2 px-4 bg-yellow-500 text-white rounded">Next</button>
        )}
      </div>
    </div>
  );
}
