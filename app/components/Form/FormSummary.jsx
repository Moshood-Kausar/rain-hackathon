import { LoadingIndicator } from "@/app/assets/svg";
import Image from "next/image";
import icon from "@/app/assets/Register-icon.svg";
import { useState } from "react";

export const SummaryPage = ({ formData, setStep, loading }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <div className="space-y-5">
      <h2 className="font-medium text-lg md:text-xl">Summary</h2>

      <section className="space-y-3.5">
        <div className="flex justify-between">
          <h3 className="text-dark font-medium text-base md:text-lg">
            Team Member 1 Information
          </h3>
          <button
            className="text-primary font-medium text-lg underline underline-offset-2 hover:opacity-70"
            onClick={() => setStep(1)}
          >
            Edit
          </button>
        </div>
        <div className="space-y-7">
          <div className="space-y-2">
            <p className="text-[#4C4C4C]">Team Name</p>
            <p className="text-[#323232]">{formData.team_name}</p>
          </div>
          <div className="space-y-2">
            <p className="text-[#4C4C4C]">Full Name</p>
            <p className="text-[#323232]">{formData.team_leader_name}</p>
          </div>
          <div className="space-y-2">
            <p className="text-[#4C4C4C]">E-mail Address</p>
            <p className="text-[#323232]">{formData.team_leader_email}</p>
          </div>
        </div>
      </section>

      {Number(formData.no_of_members) >= 2 && (
        <section className="space-y-3.5">
          <div className="flex justify-between">
            <h3 className="text-dark font-medium text-base md:text-lg">
              Team Member 2 Information
            </h3>
            <button
              className="text-primary font-medium text-lg underline underline-offset-2 hover:opacity-70"
              onClick={() => setStep(2)}
            >
              Edit
            </button>
          </div>
          <div className="space-y-7">
            <div className="space-y-2">
              <p className="text-[#4C4C4C]">Name</p>
              <p className="text-[#323232]">{formData.team_member1_name}</p>
            </div>
            <div className="space-y-2">
              <p className="text-[#4C4C4C]">Email Address</p>
              <p className="text-[#323232]">{formData.team_member1_email}</p>
            </div>
          </div>
        </section>
      )}

      {Number(formData.no_of_members) === 3 && (
        <section className="space-y-3.5">
          <div className="flex justify-between">
            <h3 className="text-dark font-medium text-base md:text-lg">
              Team Member 3 Information
            </h3>
            <button
              className="text-primary font-medium text-lg underline underline-offset-2 hover:opacity-70"
              onClick={() => setStep(2)}
            >
              Edit
            </button>
          </div>
          <div className="space-y-7">  
            <div className="space-y-2">
              <p className="text-[#4C4C4C]">Name</p>
              <p className="text-[#323232]">{formData.team_member2_name}</p>
            </div>
            <div className="space-y-2">
              <p className="text-[#4C4C4C]">Email Address</p>
              <p className="text-[#323232]">{formData.team_member2_email}</p>
            </div>
          </div>
        </section>
      )}

      <section className="space-y-3.5">
        <div className="flex justify-between">
          <h3 className="text-dark font-medium text-base md:text-lg">
            Project Focus & Proposal Submission
          </h3>
          <button
            className="text-primary font-medium text-lg underline underline-offset-2 hover:opacity-70"
            onClick={() => setStep(3)}
          >
            Edit
          </button>
        </div>
        <div className="space-y-7">
          <div className="space-y-2">
            <p className="text-[#4C4C4C]">Thematic Area of Project Focus</p>
            <p className="text-[#323232]">{formData.area_of_specialization}</p>
          </div>
          <div className="space-y-2">
            <p className="text-[#4C4C4C]">Uploaded Document</p>
            <p className="text-[#323232]">{formData.project_file?.name}</p>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-start">
        <input type="checkbox" name="agree" id="agree" onChange={handleCheckboxChange} />
        <label htmlFor="agree" className="ml-2 text-sm cursor-pointer">I have read and agree to the terms and conditions for participating in RAIN Hackathon 1.0.</label>
      </div>

      <div className="flex justify-end md:pr-5">
        <button
          disabled={loading || !isChecked}
          type="submit"
          className="py-2 px-4 w-full flex justify-center items-center max-w-[116px] bg-primary hover:scale-90 active:scale-100 transition duration-200 text-dark rounded disabled:cursor-not-allowed"
        >
          {loading ? (
            <LoadingIndicator />
          ) : (
            <span className="flex justify-center items-center">
              Submit{" "}
              <Image
                src={icon}
                alt={``}
                width={16}
                height={16}
                className="ml-2 flex w-5 h-5 aspect-square rounded-full bg-black"
              />
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
