"use client";
import React, { useState } from "react";
import {
  FaChartLine,
  FaBullhorn,
  FaHeadset,
  FaUserShield,
  FaUsers,
  FaClipboardList,
  FaCalendarAlt,
  FaComments,
  FaTasks,
  FaGlobe,
  FaFileAlt,
  FaSyncAlt,
  FaCog,
  FaEnvelopeOpenText,
  FaShieldAlt,
} from "react-icons/fa";

const portalsData = {
  "Sales Portal": [
    {
      title: "Lead Management",
      icon: <FaUsers className="" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Sales Automation",
      icon: <FaSyncAlt className="" />,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Pipeline Tracking",
      color: "from-purple-500 to-purple-600",
      icon: <FaChartLine className="" />,
    },
    {
      title: "Customer Insights",
      color: "from-orange-500 to-orange-600",
      icon: <FaClipboardList className="" />,
    },
    {
      title: "Performance Reports",
      color: "from-teal-500 to-teal-600",
      icon: <FaFileAlt className="" />,
    },
  ],
  "Marketing Portal": [
    {
      title: "Campaign Management",
      icon: <FaBullhorn className="" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Email Marketing",
      color: "from-green-500 to-green-600",
      icon: <FaEnvelopeOpenText className="" />,
    },
    {
      title: "Social Media Insights",
      color: "from-purple-500 to-purple-600",
      icon: <FaGlobe className="" />,
    },
    {
      title: "SEO Analytics",
      color: "from-orange-500 to-orange-600",
      icon: <FaChartLine className="" />,
    },
    {
      title: "Lead Scoring",
      color: "from-teal-500 to-teal-600",
      icon: <FaClipboardList className="" />,
    },
  ],
  "Support Portal": [
    {
      title: "Help Desk & Tickets",
      icon: <FaHeadset className="" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Live Chat Support",
      icon: <FaComments className="" />,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Customer Feedback",
      icon: <FaClipboardList className="" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Service Level Tracking",
      icon: <FaTasks className="" />,
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Automated Responses",
      icon: <FaSyncAlt className="" />,
      color: "from-teal-500 to-teal-600",
    },
  ],
  "Admin Portal": [
    {
      title: "User Management",
      icon: <FaUserShield className="" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Access Control",
      icon: <FaCog className="" />,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Data Security",
      icon: <FaShieldAlt className="" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "System Monitoring",
      icon: <FaTasks className="" />,
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Audit Logs",
      icon: <FaFileAlt className="" />,
      color: "from-teal-500 to-teal-600",
    },
  ],
};

const CrmPortals = () => {
  const [activeTab, setActiveTab] = useState("Sales Portal");

  return (
    <div
      className="lg:px-20 py-5 bg-cover bg-center bg-gray-100 px-4"
      style={{ backgroundImage: "url(/crm-bg.webp)" }}
    >
      <h1 className="md:text-4xl text-2xl text-center mt-4 font-title text-adseccolor font-bold mb-2">
        CRM Portals: Empowering Business Growth
      </h1>
      <p className="text-base tracking-wider text-justify mb-3 md:text-center font-medium font-description lg:px-20 md:py-3 text-gray-800">
        Our CRM provides dedicated portals for sales, marketing, support, and
        administration, ensuring seamless collaboration and efficiency. Optimize
        your business workflow with smart automation and AI-powered insights.
      </p>
      <div className="flex flex-col lg:flex-row w-full gap-5">
        <div className="w-full rounded-lg">
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
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 gap-6">
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
    </div>
  );
};

export default CrmPortals;
