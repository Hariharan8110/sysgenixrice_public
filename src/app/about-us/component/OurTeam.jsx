"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const teamData = [
  {
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Mr. John Doe",
    position: "CEO",
  },
  {
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Mr. Alex Carter",
    position: "Technical Head",
  },
  {
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Ms. Emma Wilson",
    position: "Web Development Manager",
  },
  {
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Mr. Michael Brown",
    position: "Digital Marketing Manager",
  },
  {
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Ms. Sophia Miller",
    position: "Assistant Project Manager",
  },
];

const OurTeam = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8 md:px-6 lg:px-16 ">
      <p className="text-base uppercase tracking-wider mb-3 text-center font-title font-semibold text-secondaryColor">
        ----Expert Team----
      </p>
      <h2 className="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-title text-center font-bold mb-8">
        Our Team Members
      </h2>

      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            1024: { slidesPerView: 4 }, // Large screens: 4 items
            768: { slidesPerView: 2 }, // Medium screens: 2 items
            640: { slidesPerView: 1 }, // Small screens: 1 item
          }}
          className="pb-10"
        >
          {teamData.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center bg-gray-800 p-4 rounded-lg shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="w-36 h-36 rounded-full object-cover mb-4"
                />
                <h3 className="text-lg md:text-xl text-white font-heading font-semibold mb-2">
                  {member.name}
                </h3>
                <p className="text-sm md:text-md font-description text-gray-300">
                  {member.position}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurTeam;
