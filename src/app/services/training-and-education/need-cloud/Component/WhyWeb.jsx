import React from "react";
import {
  FaRegSmile,
  FaUserCheck,
  FaTrafficLight,
  FaSearch,
  FaMobileAlt,
} from "react-icons/fa";
import { GoGraph } from "react-icons/go";

const WhyWebNeed = () => {
  const cardData = [
    {
      id: "01",
      icon: <FaRegSmile className="text-4xl text-primarycolor" />,
      name: "Cloud Consulting & Strategy",
      descriptions:
        "Leverage expert cloud consulting to develop a tailored strategy that aligns with your business goals, ensuring a seamless transition to the cloud.",
    },
    {
      id: "02",
      icon: <FaUserCheck className="text-4xl text-secondaryColor" />,
      name: "Cloud Migration Services",
      descriptions:
        "Seamlessly migrate your applications and data to the cloud with minimal downtime, improving performance and scalability.",
    },
    {
      id: "03",
      icon: <FaTrafficLight className="text-4xl text-primarycolor" />,
      name: "Cloud Security & Compliance",
      descriptions:
        "Protect your cloud infrastructure with advanced security protocols, ensuring compliance with industry regulations and safeguarding sensitive data.",
    },
    {
      id: "04",
      icon: <FaMobileAlt className="text-4xl text-secondaryColor" />,
      name: "Multi-Cloud & Hybrid Cloud Solutions",
      descriptions:
        "Optimize your IT ecosystem with hybrid and multi-cloud strategies, balancing flexibility, performance, and cost efficiency.",
    },
    {
      id: "05",
      icon: <FaSearch className="text-4xl text-primarycolor" />,
      name: "Cloud Application Development",
      descriptions:
        "Build and deploy cloud-native applications that enhance business agility, scalability, and efficiency in a rapidly evolving digital world.",
    },
    {
      id: "06",
      icon: <GoGraph className="text-4xl text-secondaryColor" />,
      name: "Cloud Optimization & Cost Management",
      descriptions:
        "Maximize cloud efficiency with cost optimization strategies, ensuring you only pay for the resources you need while maintaining peak performance.",
    },
  ];
  

  return (
    <div className="bg-yellow-50 w-full  py-16">
      <div className="flex flex-col md:px-20 px-8 items-center justify-center w-full  text-center ">
        <h1 className="md:text-5xl text-2xl font-extrabold text-gray-800 mb-12 font-title">
        Why Choose SysgenixRise IT Solutions for Need Cloud?
        </h1>

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

export default WhyWebNeed;
