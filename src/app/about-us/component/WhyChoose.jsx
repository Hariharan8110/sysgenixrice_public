"use client"; // Only needed for Next.js App Router (optional)

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function WhyChooseSysGenixRise() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation occurs only once
      easing: "ease-in-out", // Easing effect
    });
  }, []);

  return (
    <div className="min-h-48 flex items-center justify-center bg-gray-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
        {/* Left Side - Content */}
        <div className="space-y-4 sm:space-y-6" data-aos="fade-down">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why Choose{" "}
            <span className="text-black">SysGenixRise?</span>
          </h1>
          <ul className="space-y-3 sm:space-y-4">
            <li className="flex items-start" data-aos="fade-down">
              <p className="text-sm sm:text-base text-gray-700">
                <strong>Innovation-Driven</strong> – We integrate AI, cloud, and
                automation to deliver next-generation IT solutions.
              </p>
            </li>
            <li
              className="flex items-start"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              <p className="text-sm sm:text-base text-gray-700">
                <strong>Client-Focused Approach</strong> – Every solution is
                designed to align with your business goals and industry
                challenges.
              </p>
            </li>
            <li
              className="flex items-start"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <p className="text-sm sm:text-base text-gray-700">
                <strong>Industry Expertise</strong> – Our team brings deep
                domain knowledge and technical proficiency across multiple
                sectors.
              </p>
            </li>
            <li
              className="flex items-start"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <p className="text-sm sm:text-base text-gray-700">
                <strong>Secure & Scalable Solutions</strong> – We build
                future-ready IT infrastructures with top-tier cybersecurity and
                scalability.
              </p>
            </li>
          </ul>
        </div>

        {/* Right Side - Image */}
        <div
          className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]"
          data-aos="fade-up"
        >
          <Image
            src="/WhyChoose.jpeg"
            alt="Why Choose SysGenixRise"
            fill
            className="rounded-lg shadow-lg object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
}