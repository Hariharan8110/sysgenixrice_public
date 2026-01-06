import React from "react";
import {
  FaRegSmile,
  FaUserCheck,
  FaTrafficLight,
  FaSearch,
  FaMobileAlt,
} from "react-icons/fa";
import { GoGraph } from "react-icons/go";

const WhyWeb = () => {
  const cardData = [
    {
      id: "01",
      icon: <FaRegSmile className="text-4xl text-primarycolor" />,
      name: "IT solutions provider in Dublin",
      descriptions:
        "A professionally developed website creates a strong first impression, reflecting the credibility and reliability of your business.",
    },
    {
      id: "02",
      icon: <FaUserCheck className="text-4xl text-secondaryColor" />,
      name: "AI and data analytics services",
      descriptions:
        "An efficient web development process ensures smooth navigation and a seamless user experience, encouraging visitors to stay longer and engage with your content.",
    },
    {
      id: "03",
      icon: <FaTrafficLight className="text-4xl text-primarycolor" />,
      name: "Salesforce consulting and CRM integration",
      descriptions:
        "By integrating the latest web technologies, your site will perform better and attract more qualified traffic, increasing your visibility in the competitive online market.",
    },
    {
      id: "04",
      icon: <FaMobileAlt className="text-4xl text-secondaryColor" />,
      name: "IT outsourcing and staffing solutions",
      descriptions:
        "Responsive web development guarantees that your website looks and functions flawlessly across all mobile devices, enhancing user experience on the go.",
    },
    {
      id: "05",
      icon: <FaSearch className="text-4xl text-primarycolor" />,
      name: "Web and mobile app development services",
      descriptions:
        "A well-developed website ensures that your site is optimized for search engines, improving rankings and driving organic traffic.",
    },
    {
      id: "06",
      icon: <GoGraph className="text-4xl text-secondaryColor" />,
      name: "Digital transformation for businesses",
      descriptions:
        "Strategic web development enhances lead generation, providing clear call-to-action elements that convert visitors into valuable customers.",
    },
  ];

  return (
    <div className="bg-yellow-50 w-full  py-16">
      <div className="flex flex-col md:px-20 px-8 items-center justify-center w-full  text-center ">
        <h1 className="md:text-5xl text-2xl font-extrabold text-gray-800 mb-12 font-title">
          Why AI Development?
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

export default WhyWeb;
