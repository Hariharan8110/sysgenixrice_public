import React from "react";
import {
  FaRegSmile,
  FaUserCheck,
  FaTrafficLight,
  FaSearch,
  FaMobileAlt,
} from "react-icons/fa";
import { GoGraph } from "react-icons/go";

const WhyWebBiData = () => {
  const cardData = [
    {
      id: "01",
      icon: <FaRegSmile className="text-4xl text-primarycolor" />,
      name: "Interactive Dashboards",
      descriptions:
        "Transform raw data into visually compelling, interactive dashboards that provide real-time insights for decision-making.",
    },
    {
      id: "02",
      icon: <FaUserCheck className="text-4xl text-secondaryColor" />,
      name: "AI-Driven Business Analytics",
      descriptions:
        "Utilize AI-powered BI tools to uncover trends, track KPIs, and generate predictive insights for strategic growth.",
    },
    {
      id: "03",
      icon: <FaTrafficLight className="text-4xl text-primarycolor" />,
      name: "Data-Driven Performance Optimization",
      descriptions:
        "Leverage BI to analyze operational performance, streamline workflows, and enhance efficiency across business units.",
    },
    {
      id: "04",
      icon: <FaMobileAlt className="text-4xl text-secondaryColor" />,
      name: "Mobile BI & Real-Time Reporting",
      descriptions:
        "Access real-time business insights on mobile devices, ensuring informed decision-making from anywhere, anytime.",
    },
    {
      id: "05",
      icon: <FaSearch className="text-4xl text-primarycolor" />,
      name: "Advanced Data Visualization",
      descriptions:
        "Transform complex datasets into intuitive charts, graphs, and infographics to simplify data interpretation.",
    },
    {
      id: "06",
      icon: <GoGraph className="text-4xl text-secondaryColor" />,
      name: "Predictive & Prescriptive Analytics",
      descriptions:
        "Enhance decision-making by leveraging predictive analytics to forecast trends and prescriptive analytics for strategic actions.",
    },
  ];
  

  return (
    <div className="bg-yellow-50 w-full  py-16">
      <div className="flex flex-col md:px-20 px-8 items-center justify-center w-full  text-center ">
        <h1 className="md:text-5xl text-2xl font-extrabold text-gray-800 mb-12 font-title">
        Why Choose SysgenixRise IT Solutions for Business Intelligence (BI) & Data Visualization?
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

export default WhyWebBiData;
