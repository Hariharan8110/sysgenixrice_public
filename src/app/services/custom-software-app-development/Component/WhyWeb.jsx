import React from "react";
import {
  FaRegSmile,
  FaUserCheck,
  FaTrafficLight,
  FaSearch,
  FaMobileAlt,
} from "react-icons/fa";
import { GoGraph } from "react-icons/go";

const WhyWebCustomer = () => {
  const cardData = [
    {
      id: "01",
      icon: <FaRegSmile className="text-4xl text-primarycolor" />,
      name: "Bespoke Software Development",
      descriptions:
        "Tailored software solutions to meet your unique business needs.",
    },
    {
      id: "02",
      icon: <FaUserCheck className="text-4xl text-secondaryColor" />,
      name: "Cross-Platform App Development",
      descriptions:
        "Seamless applications built for web, mobile, and desktop platforms.",
    },
    {
      id: "03",
      icon: <FaTrafficLight className="text-4xl text-primarycolor" />,
      name: "Agile Development Process",
      descriptions:
        "Iterative and adaptive development to ensure fast, quality delivery.",
    },
    {
      id: "04",
      icon: <FaMobileAlt className="text-4xl text-secondaryColor" />,
      name: "Scalable & Secure Architecture",
      descriptions:
        "Future-proof applications with top-tier security and scalability.",
    },
    {
      id: "05",
      icon: <FaSearch className="text-4xl text-primarycolor" />,
      name: "User-Centric UI/UX Design",
      descriptions:
        "Intuitive and engaging interfaces designed for seamless user experience.",
    },
    {
      id: "06",
      icon: <GoGraph className="text-4xl text-secondaryColor" />,
      name: "Cloud-Enabled Solutions",
      descriptions:
        "Leverage cloud technology for enhanced performance and accessibility.",
    },
  ];
  

  return (
    <div className="bg-yellow-50 w-full  py-16">
      <div className="flex flex-col md:px-20 px-8 items-center justify-center w-full  text-center ">
        <h1 className="md:text-5xl text-2xl font-extrabold text-gray-800 mb-12 font-title">
        Why Choose SysgenixRise IT Solutions for  Custom Software & App Development?        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="p-8 flex flex-col items-start h-72">
                <div className="mb-6">{item.icon}</div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  {item.name}
                </h2>
                <p className="text-gray-600 line-clamp-3 leading-relaxed">
                  {item.descriptions}
                </p>
              </div>
              <div
                className={`p-4 text-right font-semibold text-lg ${
                  parseInt(item.id) % 2 === 0
                    ? "bg-secondaryColor text-white"
                    : "bg-primarycolor text-white"
                }`}
              >
                {item.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyWebCustomer;
