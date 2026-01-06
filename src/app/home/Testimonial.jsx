"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { PiQuotesFill } from "react-icons/pi";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const Testimonials = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const testimonials = [
    {
      name: "Robert Johnson",
      title: "Founder, Sysgenixrise",
      image: "/ss.jpg",
      quote:
        "As a startup, we needed reliable and scalable solutions. Sysgenixrise delivered beyond expectations, helping us scale efficiently and effectively.",
    },
    {
      name: "John Doe",
      title: "CEO, Sysgenixrise",
      image: "/ss.jpg",
      quote:
        "Sysgenixrise transformed our business with their  advanced technologies solutions. Their expertise and commitment to excellence are unmatched!",
    },
    {
      name: "Jane Smith",
      title: "CTO, Sysgenixrise",
      image: "/ss.jpg",
      quote:
        "Sysgenixrise has greatly benefited from the exceptional services provided by this team. Their innovative approach and dedication to success are truly commendable.",
    },
    {
      name: "Robert Johnson",
      title: "Founder, Sysgenixrise",
      image: "/ss.jpg",
      quote:
        "As a startup, we needed reliable and scalable solutions. Sysgenixrise delivered beyond expectations, helping us scale efficiently and effectively.",
    },
  ];

  return (
    <div className="bg-gray-50 relative px-[5%] py-[2%] ">
      <div className="w-full flex flex-col justify-center items-center">
        <p className="text-base uppercase tracking-wider mb-3 text-center font-heading font-semibold text-secondaryColor">
          ----What Our Clients Say----
        </p>
        <h2 className="text-black text-2xl  font-title text-center font-bold mb-2">
          Hear from industry leaders who have partnered with us to achieve
          success and innovation.
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row items-start gap-6 justify-between">
        <div className="lg:w-[100%] w-full mb-5 md:mb-0 md:py-6 h-full relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="md:p-4 mt-12 md:mt-10">
                  <div className="bg-white shadow-lg rounded-lg md:p-6 p-2 relative mx-auto max-w-sm">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -top-12">
                      <img
                        className="w-24 h-24 rounded-full border-2 border-green"
                        src={testimonial.image}
                        alt="user"
                      />
                    </div>
                    <div className="absolute text-green right-5 bottom-4">
                      <PiQuotesFill className="size-16 text-primarycolor" />
                    </div>
                    <div className="mt-12">
                      <blockquote className="md:text-gray-600 text-justify font-body italic">
                        {testimonial.quote}
                      </blockquote>
                      <p className="font-bold text-secondaryColor font-heading mt-4 uppercase">
                        {testimonial.name}
                      </p>
                      <p className="font-body">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
