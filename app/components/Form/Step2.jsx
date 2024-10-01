export default function Step2({ formData, handleFormChange, nextStep, prevStep }) {
  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-6">Team Members Information</h2>
      <p className="text-center mb-6">Complete your team&apos;s details</p>

      <div className="mb-4">
        <label className="block mb-2">Total Members</label>
        <select value={formData.no_of_members} onChange={handleFormChange('no_of_members')} className="w-full p-2 border rounded">
          {[1, 2, 3, 4].map((number) => (
            <option key={number} value={number}>{number}</option>
          ))}
        </select>
      </div>

      {/* If the user selects more than 1 member, display input fields for team members */}
      {formData.no_of_members > 1 &&
        Array.from({ length: formData.no_of_members - 1 }).map((_, index) => (
          <div key={index} className="mb-4">
            <label className="block mb-2">Team Member {index + 1} Details</label>
            <input type="text" name={`team_member${index+1}_name`} value={formData[`team_member${index+1}_name`]} onChange={handleFormChange(`team_member${index+1}_name`)} placeholder="Full Name" className="w-full p-2 border border-secondary/50 focus:border-secondary outline-none transition duration-200 rounded mb-2" />
            <input type="email" name={`team_member${index+1}_email`} value={formData[`team_member${index+1}_email`]} onChange={handleFormChange(`team_member${index+1}_email`)} placeholder="Email Address" className="w-full p-2 border border-secondary/50 focus:border-secondary outline-none transition duration-200 rounded" />
          </div>
        ))}

      <div className="flex justify-between mt-6">
        <button onClick={prevStep} className="py-2 px-4 bg-gray-300 rounded">Back</button>

        {/* If the user selects 1 member, show the "Skip" button; otherwise show "Next" */}
        {formData.no_of_members === 1 ? (
          <button type="button" onClick={nextStep} className="py-2 px-4 bg-yellow-500 text-white rounded">Skip</button>
        ) : (
          <button type="button" onClick={nextStep} className="py-2 px-4 bg-yellow-500 text-white rounded">Next</button>
        )}
      </div>
    </div>
  );
}
