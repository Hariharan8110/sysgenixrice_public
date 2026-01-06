"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Transfer = () => {
  // Business cards data
  const cards = [
    {
      id: 1,
      image: "/ss1.jpg",
      title: "Learning Management System",
      path: "/lms",
    },
    {
      id: 2,
      image: "/ss2.jpg",
      title: "Enterprise CRM",
      path: "/crm",
    },
    // { id: 3, image: "/person-1.jpg", title: "AR/VR Applications" },
    // {
    //   id: 4,
    //   image: "/person-1.jpg",
    //   title: "Human Resources Management System",
    // },
    // { id: 5, image: "/person-1.jpg", title: "Job Portal" },
    // { id: 6, image: "/person-1.jpg", title: "Food Delivery App" },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between lg:pl-20 lg:py-10 lg:p-0 p-10 space-y-10 lg:space-y-0">
      <div className="lg:w-[30%] space-y-5">
        <h3 className="text-primarycolor font-semibold">
          Transformative IT Solutions
        </h3>
        <h1 className="text-4xl font-bold font-title leading-snug">
          Empowering Your Business Through Innovative Technology
        </h1>

        {/* Custom Navigation Arrows */}
        <div className="flex space-x-4 mt-5">
          <button className="custom-prev p-3 rounded-full bg-white shadow-lg hover:scale-105 transition-transform">
            <FaChevronLeft />
          </button>
          <button className="custom-next p-3 rounded-full bg-white shadow-lg hover:scale-105 transition-transform">
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Right Section - Swiper Slider */}
      <div className="lg:w-[65%] w-full relative">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          breakpoints={{
            320: { slidesPerView: 1 }, // Mobile
            640: { slidesPerView: 1 }, // Small tablets
            768: { slidesPerView: 2 }, // Tablets
            1024: { slidesPerView: 2 }, // Desktops
            1440: { slidesPerView: 4 }, // Large screens
          }}
          className="mt-8"
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <Link href={card.path}>
                <div className="rounded-xl overflow-hidden  shadow-xl hover:scale-105 transition-transform duration-300">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={100}
                    height={300}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-2 h-20 flex items-center justify-center  bg-white shadow-xl border">
                    <h3 className="text-lg text-center   flex items-center justify-center  font-semibold line-clamp-1">
                      {card.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="lg:absolute lg:inset-0 lg:bg-gray-900 rounded-l-lg lg:-z-10 lg:h-[340px] lg:w-[85%] lg:ml-[15%]"></div>
      </div>
    </div>
  );
};

export default Transfer;
