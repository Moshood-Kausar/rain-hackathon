import React, { useState } from "react";
import { useRouter } from "next/router";

const SummaryPage = ({ formData }) => {
  const router = useRouter();

  // Go back to the respective form pages for editing
  const handleEdit = (step) => {
    router.push(`/register/step-${step}`);
  };

  const handleSubmit = () => {
    // Submit form logic here (could be API call)
    console.log("Submitting form data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="summary-page">
      <h2>Summary</h2>

      <section>
        <h3>Team Leader Information</h3>
        <p>Team Name: {formData.teamName}</p>
        <p>Full Name: {formData.teamLeader.name}</p>
        <p>E-mail Address: {formData.teamLeader.email}</p>
        <button onClick={() => handleEdit(1)}>Edit</button>
      </section>

      <section>
        <h3>Team Member Information</h3>
        {formData.teamMembers.map((member, index) => (
          <div key={index}>
            <p>Name: {member.name}</p>
            <p>E-mail Address: {member.email}</p>
          </div>
        ))}
        <button onClick={() => handleEdit(2)}>Edit</button>
      </section>

      <section>
        <h3>Specialization & Proposal Submission</h3>
        <p>Area of Specialization: {formData.specialization}</p>
        <p>Uploaded Document: {formData.proposal}</p>
        <button onClick={() => handleEdit(3)}>Edit</button>
      </section>

      <button onClick={handleSubmit} className="submit-button">
        Submit
      </button>
    </div>
  );
};

export default SummaryPage;