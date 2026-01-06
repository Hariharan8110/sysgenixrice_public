"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Card } from "antd";

const OurClients = () => {
  const cards = [
    { image: "/client_img_1.webp", name: "Client 1" },
    { image: "/client_img_2.webp", name: "Client 2" },
    { image: "/client_img_3.webp", name: "Client 4" },
    { image: "/client_img_4.webp", name: "Client 6" },
    { image: "/client_img_5.webp", name: "Client 7" },
    { image: "/client_img_6.webp", name: "Client 8" },
    { image: "/client_img_7.webp", name: "Client 9" },
    { image: "/client_img_8.webp", name: "Client 10" },
    { image: "/client_img_9.webp", name: "Client 11" },
    { image: "/client_img_10.webp", name: "Client 12" },
    { image: "/client_img_11.webp", name: "Client 13" },
    { image: "/client_img_12.webp", name: "Client 14" },
    { image: "/client_img_13.webp", name: "Client 15" },
    { image: "/client_img_14.webp", name: "Client 16" },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8 space-y-6 md:space-y-8 bg-primarycolor">
      {/* Header Section */}
      <div className="text-center space-y-2 md:space-y-3 max-w-4xl mx-auto">
        <h3 className="text-sm md:text-base font-semibold text-secondaryColor">
          Transformative IT Solutions
        </h3>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug font-title text-white">
          One Stop Solutions For Your Business Through Advanced Technologies
        </h1>
      </div>
      
      {/* Clients Grid - Hidden on mobile */}
      <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 md:gap-6 w-full">
        {cards.map((item, ind) => (
          <div key={ind} className="bg-white shadow-lg rounded-md p-2 flex items-center justify-center">
            <Image 
              src={item.image} 
              alt={item.name} 
              width={150} 
              height={100} 
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
      
      {/* Mobile Carousel - Shows only on mobile */}
      <div className="md:hidden w-full max-w-md mx-auto relative pb-10"> {/* Added pb-10 for padding at bottom */}
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination', // Specify custom pagination container
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {cards.map((item, ind) => (
            <SwiperSlide key={ind}>
              <div className="bg-white shadow-lg rounded-md p-2 flex items-center justify-center h-24">
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  width={120} 
                  height={80} 
                  className="w-full h-auto object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom pagination container */}
        <div className="custom-pagination absolute bottom-0 left-0 right-0 flex justify-center mt-4" />
      </div>

      {/* Add custom styles for the pagination */}
      <style jsx global>{`
        .custom-pagination {
          position: absolute;
          bottom: -25px; /* Adjust this value to move dots up/down */
        }
        .custom-pagination .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
          width: 8px;
          height: 8px;
          margin: 0 4px;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          opacity: 1;
          background: white;
        }
      `}</style>
    </div>
  );
};

export default OurClients;