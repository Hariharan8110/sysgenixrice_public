"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutAiDataSaleForce = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center px-4 py-6 md:px-6 md:py-8 lg:px-20 space-y-8 md:space-y-0">
        {/* Image Section */}
        <div
          className="lg:w-1/2 flex justify-center items-center"
          data-aos="fade-down"
        >
          <img
            src="/Creative team.gif"
            alt="About Web Development"
            className="rounded-lg lg:w-[400px] lg:h-[450px] md:w-full object-cover"
          />
        </div>

        {/* Text Content Section */}
        <div className="lg:w-1/2" data-aos="fade-up">
          <div className="text-md font-heading uppercase flex gap-1 text-primarycolor">
            <span className="md:mt-1 font-bold">About</span>
          </div>
          <h1 className="md:text-4xl font-title text-2xl md:mt-3 mt-2 font-bold text-black ">
Salesforce Consulting & Integration Services
          </h1>
          <p className="text-gray-800 md:text-base tracking-wider text-justify font-medium md:py-5 py-2">
          At SysgenixRise IT Solutions, we harness the power of Artificial Intelligence (AI) and Machine Learning (ML) to automate processes, analyze vast amounts of data, and drive smarter business decisions. Our AI-powered solutions help businesses reduce costs, increase efficiency, and improve customer engagement.
          We offer a range of AI services to help businesses leverage automation, predictive analytics, natural language processing (NLP), and generative AI to stay ahead of the competition.
          </p>
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-medium md:gap-6 gap-2 py-2 md:py-0">
              {[
                "Custom Web Designing",
                "E-Commerce Solutions",
                "Responsive Websites",
                "CMS Implementation",
                "Web App Development",
                "Website Maintenance",
              ].map((service, index) => (
                <div
                  key={index}
                  className="px-8 py-2 w-90 rounded-lg cursor-pointer shadow-md hover:shadow-lg transform transition-transform duration-300 ease-in hover:scale-105 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-500 text-white"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <h3 className="text-base text-center flex justify-center items-center">
                    {service}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <style jsx>{`
        .card-inner {
          transition: transform 0.3s, background 0.3s;
          background: linear-gradient(
            135deg,
            #ffc107,
            #f7931e,
            #f7931e,
            #f7931e,
            #d67e22
          );
        }
        .card:hover .card-inner {
          transform: scale(1.05) rotateX(-15deg);
        }
      `}</style>
    </div>
  );
};

export default AboutAiDataSaleForce;
