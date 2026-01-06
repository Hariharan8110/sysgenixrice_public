"use client";

import Image from "next/image";
import {
  FaHammer,
  FaRulerCombined,
  FaPaintRoller,
  FaTools,
} from "react-icons/fa";

export default function RepairingServices() {
  return (
    <section
      className="w-full text-white py-15 px-4 sm:px-6 lg:px-10 z-20 relative flex justify-center mb-20"
      style={{
        backgroundImage: `url(https://img.freepik.com/premium-photo/abstract-black-painted-watercolor-background-generative-ai_69037-2086.jpg?semt=ais_hybrid)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side Content */}
        <div className="md:w-2/4 text-left" data-aos="fade-down">
          <h2 className="text-6xl font-bold text-white mb-8 font-title">
            AI Services
          </h2>
          <p className="text-gray-300 text-2xl mb-8 leading-relaxed">
            We provide top-notch repairing services with expert craftsmanship
            and high-quality materials.
          </p>
        </div>

        {/* Right Side Image */}
        <div
          className="md:w-1/2 flex justify-center mt-8 md:mt-0"
          data-aos="fade-up"
        >
          <Image
            src="/Devices.png"
            alt="Repairing Services"
            width={800}
            height={450}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
