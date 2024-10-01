export default function Step1({ formData, handleFormChange, nextStep }) {
  return (
    <div>

      <div className="mb-4">
        <label className="block mb-2">Team Name</label>
        <input
          type="text"
          value={formData.team_name}
          onChange={handleFormChange('team_name')}
          placeholder="Enter your team name"
          className="w-full p-2 border border-secondary/50 focus:border-secondary outline-none transition duration-200 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Full Name</label>
        <input
          type="text"
          value={formData.team_leader_name}
          onChange={handleFormChange('team_leader_name')}
          placeholder="Enter your full name"
          className="w-full p-2 border border-secondary/50 focus:border-secondary outline-none transition duration-200 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Email Address</label>
        <input
          type="email"
          value={formData.team_leader_email}
          onChange={handleFormChange('team_leader_email')}
          placeholder="Enter your email address"
          className="w-full p-2 border border-secondary/50 focus:border-secondary outline-none transition duration-200 rounded"
        />
      </div>

      <button type="button" onClick={nextStep} className="w-full py-2 px-4 bg-yellow-500 text-white rounded mt-4">
        Next
      </button>
    </div>
  );
}
