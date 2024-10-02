import { useNotification } from "@/app/contexts";

export default function Step2({
  formData,
  handleFormChange,
  nextStep,
  prevStep,
}) {
  const { notify } = useNotification();
  const handleNext = () => {
    if (Number(formData.no_of_members) === 2) {
      if (!formData.team_member1_name || !formData.team_member1_email) {
        notify("Please fill in team member 1 details", "inform");
        return;
      }
    } else if (Number(formData.no_of_members) === 3) {
      if (
        !formData.team_member1_name ||
        !formData.team_member1_email ||
        !formData.team_member2_name ||
        !formData.team_member2_email
      ) {
        notify("Please fill in all team members details", "inform");
        return;
      }
    } 
    nextStep();
  };
  return (
    <div>
      <h2 className="text-lg md:text-xl font-medium mb-5">Team Members Information</h2>
      <p className="hidden text-center mb-6">
        Complete your team&apos;s details
      </p>

      <div className="mb-5">
        <label className="text-[#323232] block mb-2">Total number</label>
        <select
          value={formData.no_of_members}
          onChange={handleFormChange("no_of_members")}
          className="w-full max-w-[147px] p-2 bg-[#FAFAFA] border border-transparent focus:border-secondary outline-none transition duration-200 rounded"
        >
          {[1, 2, 3].map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
      </div>

      {/* If the user selects more than 1 member, display input fields for team members */}
      {formData.no_of_members > 1 &&
        Array.from({ length: formData.no_of_members - 1 }).map((_, index) => (
          <div key={index} className="mb-4">
            <label className="text-[#323232] block mb-2">
              Team Member {index + 2}
            </label>
            <input
              type="text"
              name={`team_member${index + 1}_name`}
              value={formData[`team_member${index + 1}_name`]}
              onChange={handleFormChange(`team_member${index + 1}_name`)}
              placeholder="Full Name"
              className="w-full p-2 bg-[#FAFAFA] border border-transparent focus:border-secondary outline-none transition duration-200 rounded mb-5"
            />
            <input
              type="email"
              name={`team_member${index + 1}_email`}
              value={formData[`team_member${index + 1}_email`]}
              onChange={handleFormChange(`team_member${index + 1}_email`)}
              placeholder="Email Address"
              className="w-full p-2 bg-[#FAFAFA] border border-transparent focus:border-secondary outline-none transition duration-200 rounded"
            />
          </div>
        ))}

      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={prevStep}
          className="py-2 px-4 w-full max-w-[116px] bg-transparent border border-primary text-[#1D1D1D] rounded"
        >
          Back
        </button>

        {/* If the user selects 1 member, show the "Skip" button; otherwise show "Next" */}
        {Number(formData.no_of_members) === 1 ? (
          <button
            type="button"
            onClick={handleNext}
            className="py-2 px-4 w-full max-w-[116px] bg-yellow-500 text-dark rounded"
          >
            Skip
          </button>
        ) : (
          <button
            type="button"
            onClick={handleNext}
            className="py-2 px-4 w-full max-w-[116px] bg-yellow-500 text-dark rounded"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
