export default function Step1({ formData, handleFormChange, nextStep }) {
  return (
    <div>
      {/* <h2 className="text-center text-2xl font-bold mb-6">Welcome, Innovators!</h2>
      <p className="text-center mb-6">Please complete the form below to register and submit your team’s proposal</p>
      <div className="flex justify-center mb-6">
        <div className="step-indicator">
          <span className="step active">1</span> <span>------&gt;</span>
          <span className="step">2</span> <span>------&gt;</span>
          <span className="step">3</span>
        </div>
      </div> */}

      <div className="mb-4">
        <label className="block mb-2">Team Name</label>
        <input
          type="text"
          value={formData.teamName}
          onChange={handleFormChange('teamName')}
          placeholder="Enter your team name"
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Full Name</label>
        <input
          type="text"
          value={formData.fullName}
          onChange={handleFormChange('fullName')}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={handleFormChange('email')}
          className="w-full p-2 border rounded"
        />
      </div>

      <button onClick={nextStep} className="w-full py-2 px-4 bg-yellow-500 text-white rounded mt-4">
        Next
      </button>
    </div>
  );
}
