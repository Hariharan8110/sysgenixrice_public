"use client";

import React, { useEffect } from "react";
import { TbTargetArrow } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { FaHandHoldingHeart } from "react-icons/fa";
import Image from "next/image";

const OurVissionMission = () => {
  // const renderButton = () => {
  //   const currentPath = location.pathname;

  //   if (currentPath.includes("/about-us")) {
  //     return null;
  //   } else {
  //     return (
  //       <div className="py-4 text-center md:text-left">
  //         <button className="rounded-full border-2 hover:text-white hover:bg-primary duration-300 border-primary text-primary font-semibold px-4 py-2">
  //           <Link href="/about-us">Read More</Link>
  //         </button>
  //       </div>
  //     );
  //   }
  // };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="overflow-hidden">
      <div
        className="flex flex-col lg:flex-row justify-center px-4 sm:px-6 py-8 md:px-6 md:py-6 lg:px-20 lg:py-10 gap-5 md:gap-10"
        data-aos="fade-down"
      >
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <div className="w-full flex justify-center items-center relative lg:mt-[15%]">
            <Image
              src={"/ss.jpg"}
              alt="Creative Team"
              width={540}
              height={580}
              className="transition-transform duration-500 ease-in-out hover:scale-95 object-cover borderclass w-full max-w-[540px]"
              priority
            />
            <div className="absolute border-2 border-yellow-500 top-4 md:top-8 lg:flex gap-1 -left-2 md:-left-4 bg-white p-2 md:p-4 rounded-lg shadow-md shadow-yellow-300 hidden sm:flex">
              <VscWorkspaceTrusted className="text-2xl md:text-4xl text-green-600" />
              <p className="text-sm md:text-base font-medium font-description text-black mt-1">
                <span className="text-primarycolor text-lg md:text-xl font-description font-semibold">
                  52+
                </span>{" "}
                Happy Clients.
              </p>
            </div>
            <div className="absolute border-2 border-yellow-500 bottom-3 md:bottom-8 lg:flex right-2 md:right-4 bg-white p-2 md:p-4 rounded-lg shadow-md shadow-yellow-300 hidden sm:flex">
              <VscWorkspaceTrusted className="text-2xl md:text-4xl text-green-600" />
              <p className="text-sm md:text-base font-md text-black font-description font-medium mt-1">
                <span className="text-primarycolor font-description text-lg md:text-xl font-semibold">
                  3+ Years
                </span>{" "}
                of Quality Experience.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex-col lg:w-1/2 text-left order-1 lg:order-2 lg:-ml-6 mt-0 lg:mt-28">
          <h2
            className="text-3xl sm:text-4xl text-black font-title font-bold"
            data-aos="fade-up"
          >
            Your Success<span className="text-black"> is Our Priority</span>
          </h2>
          <div
            className="grid grid-cols-1 gap-4 mt-6 md:mt-8"
            data-aos="fade-up"
          >
            <div className="flex gap-3 md:gap-5 rounded-lg">
              <div className="text-primary">
                <TbTargetArrow className="w-8 h-8 md:w-12 md:h-12 text-white bg-secondaryColor rounded-full p-2" />
              </div>
              <div className="flex flex-col gap-1 md:gap-2">
                <h1 className="text-xl md:text-2xl text-black font-title font-bold">
                  Our Vision
                </h1>
                <h4 className="font-description font-medium text-gray-600 text-sm md:text-base text-justify">
                  To be a trusted global technology partner, helping
                  organizations achieve sustainable growth through intelligent
                  digital solutions.
                </h4>
              </div>
            </div>
            <div className="flex gap-3 md:gap-5 rounded-lg">
              <div className="text-primary">
                <TbTargetArrow className="w-8 h-8 md:w-12 md:h-12 text-white bg-secondaryColor rounded-full p-2" />
              </div>
              <div className="flex flex-col gap-1 md:gap-2">
                <h1 className="text-xl md:text-2xl text-black font-title font-bold">
                  Our Mission
                </h1>
                <h4 className="font-description font-medium text-gray-600 text-sm md:text-base text-justify">
                  To empower businesses with innovative IT solutions that
                  enhance efficiency, security, and digital transformation.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVissionMission;