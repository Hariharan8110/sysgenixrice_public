"use client";
import React, { useState } from "react";
import {
  FaBook,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaClipboardList,
  FaCalendarAlt,
  FaComments,
  FaFileAlt,
  FaGlobe,
  FaFolder,
  FaUsers,
  FaBell,
  FaPenFancy,
  FaCheckCircle,
  FaClipboardCheck,
  FaGraduationCap,
} from "react-icons/fa";

const portalsData = {
  "Student Portal": [
    {
      title: "Interactive Learning Modules",
      icon: <FaChalkboardTeacher />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Digital Library",
      icon: <FaBook />,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Collaborative Discussions",
      icon: <FaComments />,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Assessments & Certifications",
      icon: <FaClipboardList />,
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Career Development",
      icon: <FaUsers />,
      color: "from-teal-500 to-teal-600",
    },
    {
      title: "Class Schedules",
      icon: <FaCalendarAlt />,
      color: "from-red-500 to-red-600",
    },
    {
      title: "Research Resources",
      icon: <FaBook />,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      title: "Skill Certifications",
      icon: <FaCheckCircle />,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Document Management",
      icon: <FaFolder />,
      color: "from-gray-500 to-gray-600",
    },
  ],
  "Parent Portal": [
    {
      title: "Track Student Progress",
      icon: <FaUsers />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Real-time Attendance Updates",
      icon: <FaBell />,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Absentee Alerts",
      icon: <FaClipboardCheck />,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Performance Reports",
      icon: <FaPenFancy />,
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Communication Hub",
      icon: <FaFileAlt />,
      color: "from-teal-500 to-teal-600",
    },
    {
      title: "Latest Announcements",
      icon: <FaGraduationCap />,
      color: "from-red-500 to-red-600",
    },
    {
      title: "School Calendar",
      icon: <FaCalendarAlt />,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      title: "Event Notifications",
      icon: <FaClipboardList />,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Feedback & Communication",
      icon: <FaComments />,
      color: "from-gray-500 to-gray-600",
    },
  ],
  "Teacher Portal": [
    {
      title: "Virtual Classrooms",
      icon: <FaChalkboardTeacher />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Schedule & Planning",
      icon: <FaCalendarAlt />,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Student Attendance Logs",
      icon: <FaClipboardCheck />,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Assessment & Grading",
      icon: <FaClipboardList />,
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Integrated Communication",
      icon: <FaFileAlt />,
      color: "from-teal-500 to-teal-600",
    },
    {
      title: "Event Planning",
      icon: <FaCalendarAlt />,
      color: "from-red-500 to-red-600",
    },
    {
      title: "Performance Analysis",
      icon: <FaPenFancy />,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      title: "Team Collaboration",
      icon: <FaComments />,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Resource Management",
      icon: <FaFolder />,
      color: "from-gray-500 to-gray-600",
    },
  ],
};

const LmsPortals = () => {
  const [activeTab, setActiveTab] = useState("Student Portal");

  return (
    <div
      className="lg:px-20 py-5 bg-cover bg-center bg-gray-100 px-4"
      style={{ backgroundImage: "url(/techobg.webp)" }}
    >
      <h1 className="md:text-4xl text-2xl text-center mt-4 font-title text-primarycolor font-bold mb-2">
        Sysgenixrise: Personalized Learning Portals
      </h1>
      <p className="text-base tracking-wider text-justify mb-3 md:text-center font-medium font-description lg:px-20 md:py-3 text-gray-800">
        Sysgenixrise provides customized learning portals for students, parents,
        and teachers, enabling a seamless and interactive educational
        experience. Enhance engagement, collaboration, and productivity through
        our smart solutions.
      </p>
      <div className="flex flex-col lg:flex-row w-full gap-5">
        <div className="w-full  rounded-lg">
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white rounded-lg shadow-sm p-1">
              {Object.keys(portalsData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-medium rounded-md transition-all ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portalsData[activeTab]?.map(({ title, icon, color }) => (
              <div
                key={title}
                className="group relative bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div
                    className={`flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${color} mb-4`}
                  >
                    <div className="text-white text-2xl">{icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600">
                    Explore all {title.toLowerCase()} features
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LmsPortals;
