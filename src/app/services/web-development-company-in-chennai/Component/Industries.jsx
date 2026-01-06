"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const cards = [
  {
    icon: "/retail.gif", // Path to public directory
    title: "Retail",
  },
  {
    icon: "/ecommerce.gif",
    title: "Ecommerce",
  },
  {
    icon: "/healthcare.gif",
    title: "Healthcare",
  },
  {
    icon: "/education.gif",
    title: "Education",
  },
  {
    icon: "/food.webp",
    title: "Food",
  },
  {
    icon: "/travel.gif",
    title: "Travel",
  },
  {
    icon: "/communication.gif",
    title: "Social Network",
  },
  {
    icon: "/money.gif",
    title: "Banking",
  },
  {
    icon: "/makeup.webp",
    title: "Beauty",
  },
  {
    icon: "/lifestyle.gif",
    title: "Lifestyle",
  },
  {
    icon: "/manufacturing.gif",
    title: "Manufacturing",
  },
  {
    icon: "/logistics.gif",
    title: "Logistics",
  },
  {
    icon: "/accounting.gif",
    title: "Accounting",
  },
  {
    icon: "/hospital.gif",
    title: "Hospital",
  },
  {
    icon: "/communication (2).gif",
    title: "Communication",
  },
  // {
  //   icon: "/images/legal.png",
  //   title: "Legal",
  // },
  {
    icon: "/construction.gif",
    title: "Construction",
  },
];

const Industries = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="md:px-20 px-5 md:mt-5">
        <div className="py-3">
          <h1
            data-aos="fade-down"
            className="md:text-4xl text-2xl text-center font-title capitalize text-black  font-bold"
          >
            Industries We Serve
          </h1>

          {/* Outer wrapper for margin and controlling overflow */}
          <div className="overflow-hidden md:px-20 px-5">
            <div className="flex gap-4 py-1 whitespace-nowrap animate-scroll">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mt-6 lg:w-1/5 md:3/6 md:h-full"
                  data-aos={index % 2 === 0 ? "fade-up" : "zoom-in"}
                >
                  <div className="bg-white gap-2 border-2 justify-center items-center border-none shadow-lg flex w-full h-20 rounded-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-lg">
                    <div className="flex justify-center items-center">
                      <Image
                        src={card.icon}
                        alt={card.title}
                        width={64} // Image width
                        height={72} // Image height
                        className="object-contain"
                      />
                    </div>
                    <div className="flex justify-center font-description items-center text-xl">
                      {card.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Outer wrapper for reverse slider margin and overflow control */}
          <div className="overflow-hidden md:px-20">
            <div className="flex gap-4 mb-10 whitespace-nowrap animate-scroll-reverse">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 lg:w-1/5 md:3/6 md:h-full"
                  data-aos={index % 2 === 0 ? "fade-up" : "zoom-in"}
                >
                  <div className="bg-white border-2 mt-7 justify-center items-center border-none shadow-lg flex gap-2 px-2 w-full h-20 rounded-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-lg">
                    <div className="flex justify-center items-center">
                      <Image
                        src={card.icon}
                        alt={card.title}
                        width={64} // Image width
                        height={72} // Image height
                        className="object-contain"
                      />
                    </div>
                    <div className="flex justify-center items-center font-description text-xl">
                      {card.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes for animations */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }

        @keyframes scroll-reverse {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 15s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Industries;
