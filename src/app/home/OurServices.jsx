import Link from "next/link";
import React from "react";

const OurServices = () => {
  const cards = [
    {
      id: 1,
      title: "AI & Data Analytics",
      content:
        "We help businesses harness the power of artificial intelligence and machine learning to automate tasks, enhance decision-making, and drive efficiency.",
      image: "/cart1.webp",
      href: "/services/ai-data-analytics"
    },
    {
      id: 2,
      title: "Salesforce Consulting & Integration",
      content:
        "As a Salesforce solutions provider, we specialize in Salesforce CRM implementation, automation, and system integration to improve customer experience and boost productivity.",
      image: "/cart2.webp",
      href: "/services/salesforce-consulting-integration"
    },
    {
      id: 3,
      title: "IT Infrastructure & Managed Services",
      content:
        "Our managed IT services ensure that your business operations run seamlessly with high availability, security, and efficiency.",
      image: "/cart5.jpg",
      href: "/services/it-infrastructure-managed-services"
    },
    {
      id: 4,
      title: "Custom Software & App Development",
      content:
        "We build custom web and mobile applications to drive digital transformation and enhance customer engagement.",
      image: "/cart6.jpg",
      href: "/services/custom-software-app-development"
    },
    {
      id: 5,
      title: "IT Staffing & HR Solutions",
      content:
        "We provide IT staffing solutions to help businesses scale their workforce with expert professionals.",
      image: "/cart8.webp",
      href: "/services/it-staffing-hr-solutions"
    },
    {
      id: 6,
      title: "IT Project Management & Digital Transformation",
      content:
        "We specialize in IT project management and digital transformation strategies to ensure smooth execution and maximum ROI.",
      image: "/cart7.webp",
      href: "/services/it-project-management-digital-transformation"
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="relative flex flex-col items-center justify-center py-10 md:py-16">
        {/* Large Faded Background Text */}
        <h1 className="absolute sm:text-[7rem] text-[4rem] font-semibold text-gray-300 opacity-30 leading-none select-none">
          Services
        </h1>

        {/* Foreground Heading */}
        <h2 className="relative sm:top-14 top-8 text-3xl font-title text-primarycolor sm:text-4xl font-bold ">
          Our Services
        </h2>

        {/* Underline */}
        <div className="relative sm:top-14 top-8 mt-2 w-12 h-[2px] bg-gray-600"></div>
      </div>
      <div>
        <p className="text-center sm:text-2xl  text-lg sm:mt-5 font-semibold">
          Discover Our Modern Tech Solutions
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 p-5  md:p-10 w-[95%] md:w-[85%]">
          {cards.map((card) => (
            <Link key={card.id} href={card.href}>
              <div className="group w-full rounded-lg shadow-lg overflow-hidden transition-all duration-300 cursor-pointer">
                <div className="h-48 w-full overflow-hidden bg-black">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 bg-white text-black"
                  />
                </div>

                <div className="p-5 text-center">
                  <h3 className="text-xl font-bold h-12 flex items-center justify-center font-title transition-all duration-300">
                    {card.title}
                  </h3>
                  <p className="mt-4 line-clamp-3 text-sm transition-all duration-300">
                    {card.content}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Link href="/services">
          <button
            className={`mb-6 px-6 py-2 rounded-full bg-primarycolor transition-transform duration-300 hover:scale-105 text-white shadow-lg  `}
          >
            Click Here
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurServices;