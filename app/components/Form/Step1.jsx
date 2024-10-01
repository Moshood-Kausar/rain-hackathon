import { useNotification } from "@/app/contexts";

export default function Step1({ formData, handleFormChange, nextStep }) {
  const { notify } = useNotification();
  const handleNext = () => {
    if (formData.team_name && formData.team_leader_name && formData.team_leader_email) {
      nextStep();
    } else {
      notify('Please fill in all required fields', 'inform');
    }
  }
  return (
    <div className="flex flex-col">

      <div className="mb-4">
        <label className="block mb-2">Team Name</label>
        <input
          type="text"
          value={formData.team_name}
          onChange={handleFormChange('team_name')}
          placeholder="Enter your team name"
          className="w-full p-2 bg-[#FAFAFA] border border-transparent focus:border-secondary outline-none transition duration-200 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Full Name</label>
        <input
          type="text"
          value={formData.team_leader_name}
          onChange={handleFormChange('team_leader_name')}
          placeholder="Enter your full name"
          className="w-full p-2 bg-[#FAFAFA] border border-transparent focus:border-secondary outline-none transition duration-200 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Email Address</label>
        <input
          type="email"
          value={formData.team_leader_email}
          onChange={handleFormChange('team_leader_email')}
          placeholder="Enter your email address"
          className="w-full p-2 bg-[#FAFAFA] border border-transparent focus:border-secondary outline-none transition duration-200 rounded"
        />
      </div>

      <button type="button" onClick={handleNext} className="w-full max-w-[116px] ml-auto py-2 px-4 bg-primary rounded mt-4">
        Next
      </button>
    </div>
  );
}
