"use client";

import React from "react";
import CountUp from "react-countup";

const WhoWeAre = () => {
  const stats = [
    { value: 20, suffix: "+", label: "Years of Experience" },
    { value: 10, suffix: "+", label: "Countries Served" },
    { value: 10, suffix: "+", label: "Sectors Covered" },
    { value: 100, suffix: "+", label: "Employees" },
    // { value: 520, suffix: "+", label: "Happy Clients" },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-10 lg:px-20 flex flex-col lg:flex-row justify-center gap-8 md:gap-10 lg:gap-16">
      {/* Left Section */}
      <div className="w-full lg:w-1/2">
        <div className="flex flex-row gap-2 mt-2 sm:mt-4">
          <div className="w-3 h-12 sm:h-16 md:w-4 md:h-20 lg:w-5 bg-gradient-to-b from-primarycolor to-transparent"></div>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-title leading-tight">
            Innovating Technology,{" "}
            <span className="text-primarycolor">Empowering Businesses</span>
          </p>
        </div>

        <div className="rounded-md mt-4 sm:mt-6 md:mt-8 lg:mt-10">
          <img
            src="/person.jpg"
            alt="image"
            className="rounded-md h-48 sm:h-60 md:h-72 lg:h-80 w-full object-cover"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 sm:gap-8 md:gap-10 mt-8 sm:mt-12 md:mt-16 lg:mt-0">
        <p className="text-xs sm:text-sm md:text-base leading-relaxed">
          At SysGenixRise, we specialize in advanced technologies IT solutions that drive digital transformation for businesses worldwide. From AI-driven automation to cloud computing and enterprise software development, we empower organizations to enhance efficiency, scale operations, and stay ahead in today's fast-evolving technological landscape.
          <br /><br />
          With expertise in Salesforce consulting, IT outsourcing, web and mobile app development, and cybersecurity, we create customized digital solutions that fuel business growth and success.
        </p>

        {/* 🔥 Animated Stats Section */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="p-2 sm:p-3 md:p-4 bg-white shadow-md h-24 sm:h-28 md:h-32 w-full rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-center items-center"
            >
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-primarycolor">
                <CountUp start={0} end={item.value} duration={3} />
                {item.suffix}
              </p>
              <p className="text-xs sm:text-sm md:text-base font-medium text-black">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button - Uncomment if needed */}
        {/* <div>
          <button className="bg-primarycolor text-black p-2 sm:p-3 rounded-md w-full sm:w-auto hover:bg-opacity-80 transition duration-300 text-sm sm:text-base">
            Know More..
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default WhoWeAre;