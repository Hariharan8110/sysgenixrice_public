"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {
  FaUsers,
  FaChartLine,
  FaRobot,
  FaSync,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

const features = [
  {
    icon: <FaUsers size={40} className="text-adseccolor" />,
    title: "Customer-Centric Approach",
  },
  {
    icon: <FaRobot size={40} className="text-adseccolor" />,
    title: "AI-Powered Insights",
  },
  {
    icon: <FaChartLine size={40} className="text-adseccolor" />,
    title: "Real-Time Data Analytics",
  },
  {
    icon: <FaSync size={40} className="text-adseccolor" />,
    title: "Seamless Integration",
  },
  {
    icon: <FaEnvelopeOpenText size={40} className="text-adseccolor" />,
    title: "Personalized Marketing Automation",
  },
];

const SpecialFeature = () => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            WHY CHOOSE OUR CRM?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Build Stronger
            </span>{" "}
            Customer Relationships
          </h2>
        </div>

        {/* Features Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            // navigation={{
            //   nextEl: ".swiper-button-next",
            //   prevEl: ".swiper-button-prev",
            // }}
            breakpoints={{
              1024: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              640: { slidesPerView: 1 },
            }}
            className="py-6 px-2"
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className="h-full p-1">
                  <div className="bg-white h-full rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
                    <div className="p-8 text-center">
                      <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full mx-auto mb-6 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all">
                        <div className="text-blue-600 group-hover:text-indigo-600 transition-all">
                          {feature.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          {/* <div className="swiper-button-prev hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer hover:bg-gray-50 transition-all">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <div className="swiper-button-next hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer hover:bg-gray-50 transition-all">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div> */}
        </div>
      </div>
    </section>
  );
};

export default SpecialFeature;
