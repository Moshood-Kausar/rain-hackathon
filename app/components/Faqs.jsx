'use client'
import React, { useState } from "react";
import { Minus, Plus } from "../assets/svg";

const faqData = [
  {
    title: "Can I apply as an individual?",
    content: "Gather your friends, colleauges or enthustiast, choose a team leader who will serve as point of contact, choose a team",
  },
  {
    title: "Can I apply as an individual?",
    content: "Gather your friends, colleauges or enthustiast, choose a team leader who will serve as point of contact, choose a team",
  },
  {
    title: "Can I apply as an individual?",
    content: "Gather your friends, colleauges or enthustiast, choose a team leader who will serve as point of contact, choose a team",
  },
  {
    title: "Can I apply as an individual?",
    content: "Gather your friends, colleauges or enthustiast, choose a team leader who will serve as point of contact, choose a team",
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
        <div className="flex w-12 justify-end transition duration-300">
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
          className={`text-sm md:text-base text-dark overflow-hidden pr-[18px]`}
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
      className="container mx-auto mt-[50px] px-4 md:px-10 lg:px-20 mb-[50px] md:mb-8"
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
