import React from "react";
import {
  FaRegSmile,
  FaUserCheck,
  FaTrafficLight,
  FaSearch,
  FaMobileAlt,
} from "react-icons/fa";
import { GoGraph } from "react-icons/go";

const WhyWebTraining = () => {
  const cardData = [
    {
      id: "01",
      icon: <FaRegSmile className="text-4xl text-primarycolor" />,
      name: "Technical Skill Development",
      descriptions:
        "Enhance your IT capabilities with hands-on training in coding, networking, and cybersecurity.",
    },
    {
      id: "02",
      icon: <FaUserCheck className="text-4xl text-secondaryColor" />,
      name: "Cloud & DevOps Training",
      descriptions:
        "Master cloud computing and DevOps methodologies to streamline IT operations.",
    },
    {
      id: "03",
      icon: <FaTrafficLight className="text-4xl text-primarycolor" />,
      name: "Agile & Scrum Certifications",
      descriptions:
        "Gain expertise in Agile frameworks and Scrum methodologies for project management success.",
    },
    {
      id: "04",
      icon: <FaMobileAlt className="text-4xl text-secondaryColor" />,
      name: "Cybersecurity Awareness Programs",
      descriptions:
        "Develop skills to protect systems and data from cyber threats with industry best practices.",
    },
    {
      id: "05",
      icon: <FaSearch className="text-4xl text-primarycolor" />,
      name: "AI & Data Science Training",
      descriptions:
        "Learn AI, machine learning, and data analytics to drive business innovation.",
    },
    {
      id: "06",
      icon: <GoGraph className="text-4xl text-secondaryColor" />,
      name: "End-User IT Training",
      descriptions:
        "Equip teams with essential IT knowledge for enhanced productivity and digital transformation.",
    },
  ];
  

  return (
    <div className="bg-yellow-50 w-full  py-16">
      <div className="flex flex-col md:px-20 px-8 items-center justify-center w-full  text-center ">
        <h1 className="md:text-5xl text-2xl font-extrabold text-gray-800 mb-12 font-title">
        Why Choose SysgenixRise IT Solutions for IT Training & Skill Development?
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

export default WhyWebTraining;
