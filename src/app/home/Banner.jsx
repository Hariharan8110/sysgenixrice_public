"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ContactForm from "../Common/ContactForm";

import { Modal } from "antd";

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

  const [modalWidth, setModalWidth] = useState("30%");

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  // Handle modal width on screen resize
  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 640) {
        setModalWidth("100%");
      } else if (window.innerWidth < 1100) {
        setModalWidth("50%");
      } else {
        setModalWidth("27%");
      }
    };

    window.addEventListener("resize", updateWidth);
    updateWidth(); // Initial call

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const slides = [
    {
      img:"/banner1.webp",
      title: "Empowering Businesses Through Technology",
      description: "Driving Success with Innovative Tech Solutions",
    },
    {
      img:"/banner2.jpg",
      title: "Transforming Ideas into Reality",
      description: "Providing Scalable and Efficient Solutions",
    },
    {
      img:"/banner4.jpg",
      title: "Innovate. Transform. Succeed.",
      description: "Shaping the Future of Digital Experiences",
    },
  ];

  // Refs for custom navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative md:h-[90vh] h-[50vh] w-full text-white overflow-hidden">
      <ToastContainer />

      {/* GIF Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          src="https://gifer.com/embed/1zLe"
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
          frameBorder="0"
          allowFullScreen
        ></iframe>

        {/* Dark Overlay with Opacity */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
     
      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="relative z-10 h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex md:flex-row flex-col-reverse gap-10 md:gap-0 justify-center items-center h-full px-10 md:ml-5">
              <div className="space-y-5 md:w-[60%] w-full">
                <h1 className="md:text-6xl font-title text-center md:text-left text-2xl font-bold text-secondaryColor">
                  {slide.title}
                </h1>
                <p className="text-xl text-center md:text-left">
                  {slide.description}
                </p>
                <div className="w-full text-center md:text-left">
                <button
  className="text-white font-bold text-center md:text-left rounded-md p-3 transition-transform duration-300 hover:scale-105"
  onClick={handleOpen}
>
  Let’s Get Started
</button>

                </div>
              </div>
              <div className="md:w-[40%] w-full md:block hidden">
                <div className="w-full md:pr-10">
                <div className="w-full md:pr-10">
  <img src={slide.img} alt={slide.title} className="w-full h-auto" />
</div>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <button
        ref={prevRef}
        className="absolute left-2 top-1/2 transform p-2 -translate-y-1/2 z-20 bg-gray-400 text-black rounded-full shadow-lg hover:bg-primarycolor hover:text-white transition-all"
      >
        <FaChevronLeft className="md:text-xl text-sm" />
      </button>

      <button
        ref={nextRef}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-gray-400 text-black p-2 rounded-full shadow-lg hover:bg-primarycolor hover:text-white transition-all"
      >
        <FaChevronRight className="md:text-xl text-sm" />
      </button>

      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleClose}
        footer={null}
        width={modalWidth}
      >
        <ContactForm onClose={handleClose} />
      </Modal>
    </div>
  );
};

export default Banner;
