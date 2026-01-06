"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const services = [
  {
    title: "AI & Data Analytics",
    content:"Transform Business Operations with AI-Powered Insights We help businesses harness the power of artificial intelligence and machine learning to automate tasks, enhance decision-making, and drive efficiency.",
    image: "/Tele.jpg",
    href: "/services/ai-data-analytics",
  },
  {
    title: "Salesforce Consulting & Integration",
    content:"Maximize Customer Engagement & Sales Performance As a Salesforce solutions provider, we specialize in Salesforce CRM implementation, automation, and system integration to improve customer experience and boost productivity",

    image: "/services.avif",
    href: "/services/salesforce-consulting-integration",
  },
  {
    title: "IT Infrastructure & Managed Services",
    content:"Reliable IT Solutions for Business Continuity Our managed IT services ensure that your business operations run seamlessly with high availability, security, and efficiency.",

    image: "/Lapservices.jpg",
    href: "/services/it-infrastructure-managed-services",
  },
  {
    title: "Custom Software & App Development",
    content:"Scalable & User-Friendly Software Solution We build custom web and mobile applications to drive digital transformation and enhance customer engagement.",

    image: "/ss.jpg",
    href: "/services/custom-software-app-development",
  },
  {
    title: "IT Staffing & HR Solutions",
    content:"Hire Skilled IT Professionals with Ease We provide IT staffing solutions to help businesses scale their workforce with expert professionals.",

    image: "/ss1.jpg",
    href: "/services/it-staffing-hr-solutions",
  },
  {
    title: "IT Project Management & Digital Transformation",
    content:"Seamless Execution of IT Projects We specialize in IT project management and digital transformation strategies to ensure smooth execution and maximum ROI.",

    image: "/ss2.jpg",
    href: "/services/it-project-management-digital-transformation",
  },
  {
    title: "Training And Education",
    content:"Empower your team with cutting-edge IT training and education. We offer specialized programs in project management, digital transformation, and emerging technologies to enhance skills and drive business success.",

    image: "/soln2.webp",
    href: "/services/training-and-education",
  },
];


export default function ServicesCarts() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen text-black p-8">
      <div className="max-w-6xl mx-auto space-y-12 mb-16">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.href}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } group cursor-pointer`}
            data-aos="fade-up"
          >
            <div className="w-full md:w-1/2">
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="rounded-lg shadow-lg group-hover:opacity-90 transition-opacity"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primarycolor transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-800 mb-4">{service.content}</p>
              <div className="text-primarycolor group-hover:underline font-bold">
                Learn More
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}