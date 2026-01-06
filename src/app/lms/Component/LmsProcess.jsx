"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FaClipboardCheck,
  FaChartLine,
  FaBook,
  FaChalkboardTeacher,
  FaFolder,
} from "react-icons/fa";

const LmsProcess = () => {
  const [activeTab, setActiveTab] = useState(2);
  const tabs = [
    {
      id: 2,
      title: "Dashboard",
      description:
        "Get an overview of key metrics, course progress, and student engagement at a glance.",
      image: "/ss2.png",
      icon: <FaChartLine />,
    },
    {
      id: 1,
      title: "Attendance",
      description:
        "Track student attendance effortlessly with automated logging and real-time reports.",
      image: "/ss1.png",
      icon: <FaClipboardCheck />,
    },
    {
      id: 3,
      title: "Branches",
      description:
        "Manage multiple branches with centralized control over courses, faculty, and students.",
      image: "/ss4.png",
      icon: <FaBook />,
    },
    {
      id: 4,
      title: "E-Faculty",
      description:
        "Empower educators with digital tools for efficient course management and student interaction.",
      image: "/ss3.png",
      icon: <FaChalkboardTeacher />,
    },
    {
      id: 5,
      title: "Subjects",
      description:
        "Organize and categorize subjects seamlessly with structured curriculum planning.",
      image: "/ss5.png",
      icon: <FaFolder />,
    },
  ];

  return (
    <div
      className="lg:px-20 px-4 md:px-6 py-6 bg-cover bg-center"
      style={{ backgroundImage: "url(/background.jpg)" }}
    >
      <h1 className="text-2xl md:text-4xl py-4 text-center font-title text-primarycolor font-bold">
        Learning Management System
      </h1>
      <div className="hidden md:flex flex-col lg:flex-row py-6 rounded-md gap-10">
        <div className="w-full flex lg:justify-center justify-center items-start">
          <div className="flex lg:flex-row flex-col lg:gap-x-4 space-y-2 lg:space-y-0 w-full lg:justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`p-3 lg:px-6 flex gap-3 text-left text-md font-semibold rounded-md group transition-all duration-300 
                  ${
                    activeTab === tab.id
                      ? "text-black border-b-4 border-primarycolor"
                      : "bg-gray-100 text-black"
                  }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="group-hover:text-black mt-1 text-primarycolor">
                  {tab.icon}
                </span>
                {tab.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full md:w-full space-y-6 md:block hidden">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="space-y-4 px-[20%]">
                <h2 className="text-sm font-semibold uppercase flex gap-1 text-primarycolor font-title">
                  {tab.title}
                </h2>
                <p className="text-gray-800 font-medium text-base tracking-wider">
                  {tab.description}
                </p>
                <Image
                  src={tab.image}
                  alt={tab.title}
                  width={1000}
                  height={400}
                  className="object-cover rounded-md shadow-lg"
                />
              </div>
            )
        )}
      </div>

      <div className="md:hidden p-5 space-y-5 flex flex-col justify-center items-center">
        {tabs.map((tab) => (
          <div key={tab.id} className="space-y-2">
            <h2 className="text-xl font-bold flex items-center">
              {tab.icon}
              <span className="ml-2">{tab.title}</span>
            </h2>
            <p className="text-gray-700 text-justify">{tab.description}</p>
            <div className="flex flex-col justify-center items-center">
              <Image
                src={tab.image}
                alt={tab.title}
                height={400}
                width={300}
                className="object-cover rounded-md shadow-lg mx-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LmsProcess;
