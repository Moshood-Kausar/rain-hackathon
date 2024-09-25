'use client'
import React, { useState } from "react";
import { Minus, Plus } from "../assets/svg";

const faqData = [
  {
    title: "Can I apply as an individual?",
    content: "Yes, individuals can apply as a one-person team.",
  },
  {
    title: "Are there any specifications for MVP?",
    content: "Yes, MVPs should be functional prototypes that demonstrate the core value and application of AI and Robotics in addressing the chosen challenge.",
  },
  {
    title: "Is there a registration fee?",
    content: "No, registration for the hackathon is completely free.",
  },
  {
    title: "What are the criteria for judging the MVPs?",
    content: "MVPs will be evaluated based on innovation, functionality, feasibility, and the potential impact of the solution.",
  },
  {
    title: "What is the deadline for submitting proposals?",
    content: "The deadline for submitting proposals is October 28th, so make sure your team submits on time!",
  },
  {
    title: "Can I make changes to my team after registration?",
    content: "No, team members cannot be changed after registration. Ensure your team is finalized before submitting your application.",
  },
  {
    title: "Is prior experience in AI and Robotics required?",
    content: "No, participants of all skill levels are welcome, from beginners to experts.",
  },
  {
    title: "What support is provided during the hackathon?",
    content: "Mentors and experts in AI and Robotics will be available to provide guidance and answer questions throughout the hackathon.",
  },
  {
    title: "How will the winners be announced?",
    content: "Winners will be announced at the end of the live presentation phase, with further details to be communicated to all participants.",
  }
];

const FAQ = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div data-aos='fade-up' className="mx-auto mb-5 py-2.5 md:py-5 px-2 md:px-4 bg-white border border-[#95772B] rounded-md flex w-full max-w-[587px] flex-col transition duration-200">
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="cursor-pointer mb-0.5 flex min-w-[90%] items-center justify-between"
      >
        <p className="text-sm md:text-lg font-medium text-dark transition duration-300">
          {title}
        </p>
        <div className="flex w-10 justify-end transition duration-300">
          {isActive? <Minus /> : <Plus />}
        </div>
      </div>
      <div
        className={`${
          !isActive
            ? "transition-all duration-800 grid-rows-[0fr] opacity-0"
            : "transition-all duration-800 grid-rows-[1fr] opacity-100"
        } overflow-hidden grid`}
      >
        <p
          aria-hidden={isActive}
          className={`text-xs md:text-base text-dark overflow-hidden pr-[18px]`}
        >
          {content}
        </p>
      </div>
    </div>
  );
};


export const FAQS = () => {
  return (
    <section
      id="faqs"
      className="container mx-1 mt-[50px] px-6 md:px-10 lg:px-20 mb-[50px] md:mb-8"
    >
      <div className="flex flex-col">
        <div className="w-full mx-auto text-center">
          <h2 className="w-fit text-center text-dark mx-auto text-lg md:text-[32px] font-medium flex items-center mb-[14px] md:mb-[42px]">
            FAQs
          </h2>
        </div>
        <div className="w-full mx-auto">
          {faqData.map((faq, index) => (
            <FAQ key={index} title={faq.title} content={faq.content} />
          ))}
        </div>
      </div>
    </section>
  );
};
