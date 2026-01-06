"use client";

import React, { useEffect } from "react";

import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const WhoWeAre = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="p-6 md:p-10 md:px-20 flex flex-col lg:flex-row justify-center gap-10 md:gap-5 lg:gap-16">
      {/* Left Section */}
      <div className="w-full lg:w-1/2" data-aos="fade-up">
        <h1 className="ml-4 md:ml-8 text-secondaryColor font-semibold">
          Who We Are
        </h1>

        <div className="flex flex-row gap-2 mt-4">
          <div className="w-3 h-16 md:w-5 md:h-20 bg-gradient-to-b from-primarycolor to-transparent"></div>
          <p className="text-3xl md:text-5xl font-title font-bold leading-tight">
            Our Journey: From Dreams{" "}
            <span className="text-primarycolor">to Deliverables</span>
          </p>
        </div>

        <div className="rounded-md mt-6 md:mt-10">
          <img
            src="/person.jpg"
            alt="image"
            className="rounded-md h-60 md:h-80 w-full object-cover"
          />
        </div>
      </div>

      {/* Right Section */}
      <div
        className="w-full lg:w-1/2 flex flex-col gap-8 md:gap-8"
        data-aos="fade-down"
      >
        <div className="flex flex-row gap-5">
          {/* <div className="">
            <img src="/person-1.jpg" alt="" className="rounded-md shadow-lg" />
          </div>
          <div>
            <img src="/person-1.jpg" alt="" className="rounded-md shadow-lg" />
          </div> */}
        </div>

        <p className="text-sm md:text-base leading-relaxed mt-0 text-justify lg:mt-28">
          SysGenixRise is a leading IT services provider based in Dublin,
          Ireland, dedicated to delivering smart, scalable, and secure
          technology solutions. Our mission is to help businesses leverage
          technology effectively, enabling seamless operations and long-term
          growth.Our team comprises highly skilled IT consultants, software
          engineers, and business strategists, working collaboratively to
          optimize technology adoption. Whether you're a startup or an
          enterprise, we provide future-proof solutions tailored to your unique
          business needs.
        </p>
        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 items-center text-center">
          {[
            { value: "20+", label: "Years of experience" },
            { value: "10+", label: "Countries" },
            { value: "10+", label: "Sectors" },
            { value: "300+", label: "Employees" },
            { value: "60+", label: "Happy Clients" },
          ].map((item, index) => (
            <div
              key={index}
              className="border p-2 shadow-xl rounded-md h-28 w-28 overflow-hidden"
            >
              <p className="text-2xl text-primarycolor font-title md:text-3xl font-bold">
                {item.value}
              </p>
              <p className="text-sm mt-1 h-12 flex items-center justify-center md:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="">
          <Link href="/about-us">
            <button className="bg-primarycolor transition-transform duration-300 hover:scale-105 hover:shadow-lg text-white p-3 rounded-md w-full sm:w-auto">
              Know More..
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
