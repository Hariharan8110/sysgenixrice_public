import React from "react";
import Link from "next/link";

const Cta = () => {
  return (
    <div
      className="relative text-white py-6 px-6 text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/cta.jpg')" }}
    >
      {/* Overlay for Light Opacity */}
      <div className="absolute inset-0 bg-white bg-opacity-20"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="lg:text-3xl text-xl font-bold font-title text-black mb-4">
        One Stop Solutions For Your Business Through Advanced Technologies
        </h2>
        <p className="mb-4 text-lg font-semibold text-black">
          Join us today to leverage the power of technology and take your
          business to the next level.
        </p>
        <Link href="/contact-us">
          <div className="bg-primarycolor text-white font-semibold py-2 px-6 rounded-lg shadow-md w-40 mx-auto ">
            Get Started
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cta;
