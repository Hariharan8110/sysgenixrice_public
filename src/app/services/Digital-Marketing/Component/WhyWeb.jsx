import React from "react";
import {
  FaBullhorn,
  FaUserFriends,
  FaChartLine,
  FaSearch,
  FaMobileAlt,
  FaEnvelopeOpenText,
} from "react-icons/fa";

const WhyWebAiData = () => {
  const cardData = [
    {
      id: "01",
      icon: <FaBullhorn className="text-4xl text-primarycolor" />,
      name: "Brand Awareness Campaigns",
      descriptions:
        "Boost your brand’s reach with strategic campaigns across digital platforms tailored to your target audience.",
    },
    {
      id: "02",
      icon: <FaUserFriends className="text-4xl text-secondaryColor" />,
      name: "Social Media Engagement",
      descriptions:
        "Connect with your audience through dynamic social media strategies that drive conversations and loyalty.",
    },
    {
      id: "03",
      icon: <FaChartLine className="text-4xl text-primarycolor" />,
      name: "Performance Marketing",
      descriptions:
        "Maximize ROI through result-driven PPC and paid media campaigns on Google, Facebook, and more.",
    },
    {
      id: "04",
      icon: <FaMobileAlt className="text-4xl text-secondaryColor" />,
      name: "Mobile Marketing",
      descriptions:
        "Reach your customers where they are with targeted mobile ads and app-based marketing strategies.",
    },
    {
      id: "05",
      icon: <FaSearch className="text-4xl text-primarycolor" />,
      name: "Search Engine Optimization (SEO)",
      descriptions:
        "Improve your website visibility and organic traffic with on-page, off-page, and technical SEO.",
    },
    {
      id: "06",
      icon: <FaEnvelopeOpenText className="text-4xl text-secondaryColor" />,
      name: "Email Marketing Automation",
      descriptions:
        "Nurture leads and retain customers with personalized email campaigns and marketing automation.",
    },
  ];

  return (
    <div className="bg-yellow-50 w-full py-16">
      <div className="flex flex-col md:px-20 px-8 items-center justify-center w-full text-center">
        <h1 className="md:text-5xl text-2xl font-extrabold text-gray-800 mb-12 font-title">
          Why Choose SysgenixRise IT Solutions for Digital Marketing?
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

export default WhyWebAiData;
