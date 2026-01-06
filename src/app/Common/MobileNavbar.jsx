"use client";

import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { Modal } from "antd";
import { ToastContainer } from "react-toastify";
import { RiAdvertisementLine } from "react-icons/ri";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Image from "next/image";
import EnquireForm from "./EnquiryForm";

const MobileNavBar = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const navbarRef = useRef(null);

  const showModal = () => {
    setIsModalOpen(true);
    setOpen(false);
  };

  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

  const handleCategoryClick = (index) => {
    setActiveSubDropdown(activeSubDropdown === index ? null : index);
  };

  const handleLinkClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setOpen(false);
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const toggleNavbar = () => {
    if (!isModalOpen) {
      setOpen(!open);
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  const serviceCategories = [
    {
      name: (
        <Link href="/services/ai-data-analytics"  onClick={handleLinkClick} className="cursor-pointer">
          AI & Data Analytics
        </Link>
      ),
      icon: LiaLaptopCodeSolid,
      Content: [
        "AI-Powered Automation",
        "Predictive Analytics",
        "Natural Language Processing",
        "Business Intelligence (BI) & Data Visualization",
      ],
      links: {
        "AI-Powered Automation":
          "/services/ai-data-analytics/ai-powered-automation",
        "Predictive Analytics":
          "/services/ai-data-analytics/predictive-analytics",
        "Natural Language Processing":
          "/services/ai-data-analytics/natural-language-processing",
        "Business Intelligence (BI) & Data Visualization":
          "/services/ai-data-analytics/bi-and-data-visualization",
      },
    },
    {
      name: (
        <Link
          href="/services/salesforce-consulting-integration"  onClick={handleLinkClick}
          className="cursor-pointer"
        >
          Salesforce Consulting & Integration
        </Link>
      ),
      icon: RiAdvertisementLine,
      Content: [
        "Salesforce Implementation & Customization",
        "Sales Process Automation",
        "Third-Party Integration",
        "Custom Dashboards & Reports",
      ],
      links: {
        "Salesforce Implementation & Customization":
          "/services/salesforce-consulting-integration/salesforce-implementation-customization",
        "Sales Process Automation":
          "/services/salesforce-consulting-integration/sales-process-automation",
        "Third-Party Integration":
          "/services/salesforce-consulting-integration/third-party-integration",
        "Custom Dashboards & Reports":
          "/services/salesforce-consulting-integration/custom-dashboards-reports",
      },
    },
    {
      name: (
        <Link
          href="/services/it-infrastructure-managed-services"  onClick={handleLinkClick}
          className="cursor-pointer"
        >
          IT Infrastructure & Managed Services
        </Link>
      ),
      icon: RiAdvertisementLine,
      Content: [
        "Cloud Migration & Management",
        "24/7 IT Support & Monitoring",
        "Cybersecurity & Compliance",
        "Backup & Disaster Recovery",
        "Managed Testing Services"
      ],
      links: {
        "Cloud Migration & Management":
          "/services/it-infrastructure-managed-services/cloud-migration-management",
        "24/7 IT Support & Monitoring":
          "/services/it-infrastructure-managed-services/it-support-monitoring",
        "Cybersecurity & Compliance":
          "/services/it-infrastructure-managed-services/cybersecurity-compliance",
        "Backup & Disaster Recovery":
          "/services/it-infrastructure-managed-services/backup-disaster-recovery",
          "Managed Testing Services":
          "/services/it-infrastructure-managed-services/managed-testing-services",
      },
    },
    {
      name: (
        <Link 
          href="/services/custom-software-app-development"  onClick={handleLinkClick}
          className="cursor-pointer"
        >
          Custom Software & App Development
        </Link>
      ),
      icon: RiAdvertisementLine,
      Content: [
        "Web Application Development",
        "Mobile App Development",
        "E-commerce Solutions",
        "UI/UX Design",
      ],
      links: {
        "Web Application Development":
          "/services/custom-software-app-development/web-application-development",
        "Mobile App Development":
          "/services/custom-software-app-development/mobile-app-development",
        "E-commerce Solutions":
          "/services/custom-software-app-development/e-commerce-solutions",
        "UI/UX Design": "/services/custom-software-app-development/uiux-design",
      },
    },
    {
      name: (
        <Link
          href="/services/it-staffing-hr-solutions"  onClick={handleLinkClick}
          className="cursor-pointer"
        >
          IT Staffing & HR Solutions
        </Link>
      ),
      icon: RiAdvertisementLine,
      Content: [
        "On-Demand IT Staffing",
        "Remote IT Teams",
        "HR Process Outsourcing",
        "IT Training & Skill Development",
      ],
      links: {
        "On-Demand IT Staffing":
          "/services/it-staffing-hr-solutions/on-demand-it-staffing",
        "Remote IT Teams": "/services/it-staffing-hr-solutions/remote-it-teams",
        "HR Process Outsourcing":
          "/services/it-staffing-hr-solutions/hr-process-outsourcing",
        "IT Training & Skill Development":
          "/services/it-staffing-hr-solutions/it-training-skill-development",
      },
    },
    {
      name: (
        <Link
          href="/services/it-project-management-digital-transformation"  onClick={handleLinkClick}
          className="cursor-pointer"
        >
          IT Project Management & Digital Transformation
        </Link>
      ),
      icon: RiAdvertisementLine,
      Content: [
        "Agile & Scrum Project Management",
        "End-to-End IT Implementation",
        "Risk & Compliance Management",
        "Technology Modernization",
      ],
      links: {
        "Agile & Scrum Project Management":
          "/services/it-project-management-digital-transformation/agile-scrum-project-management",
        "End-to-End IT Implementation":
          "/services/it-project-management-digital-transformation/end-to-end-it-implementation",
        "Risk & Compliance Management":
          "/services/it-project-management-digital-transformation/risk-compliance-management",
        "Technology Modernization":
          "/services/it-project-management-digital-transformation/technology-modernization",
      },
    },
    {
      name: (
        <Link
          href="/services/training-and-education"
          onClick={handleLinkClick}
          className="cursor-pointer"
        >
          Training and Education
        </Link>
      ),
      icon: RiAdvertisementLine,
      Content: [
        "Need Cloud",
        "AI",
        "PMP",
        "Scrum",
        "Safe Product BA Trainings",
        "FSD",
        "DM",
      ],
      links: {
        "Need Cloud": "/services/training-and-education/need-cloud",
        "AI": "/services/training-and-education/ai",
        "PMP": "/services/training-and-education/pmp",
        "Scrum": "/services/training-and-education/scrum",
        "Safe Product BA Trainings":
          "/services/training-and-education/safe-product-ba-trainings",
        "FSD":
          "/services/training-and-education/fsd",
        "DM":
          "/services/training-and-education/dm",
      },
    },
  ];

  const router = useRouter();
  useEffect(() => {
    if (router && router.events) {
      const handleRouteChange = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

      router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [router]);

  const location = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <>
      <ToastContainer />
      <div className="block xl:hidden sticky top-0 z-50 bg-black shadow-lg font-heading" ref={navbarRef}>
        <div className="flex my-auto justify-between relative py-2 px-4 md:px-10 items-center">
          <div className="w-[40%] flex items-center space-x-0">
            <Link href="/">
              <div className="flex gap-1.5 md:gap-0 items-center space-x-0">
                <Image
                  src="/Sysgenix LOGO-06.png"
                  alt="logo"
                  width={65}
                  height={65}
                  className=""
                />
                <div className="flex w-full -mt-2 flex-col items-center -ml-4 md:-ml-0">
                  <Image
                    src="/Sysgenix LOGO-07.png"
                    alt="logo"
                    width={150}
                    height={150}
                    className="scale-150 md:scale-100 w-64 md:w-36"
                  />
                  <span className="text-[7px] md:text-[8px] font-medium bg-gradient-to-b from-gray-300 to-white bg-clip-text text-transparent whitespace-nowrap mt-1.5 md:mt-0.5">
                    --Rise IT Solutions--
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <FontAwesomeIcon
              icon={open ? faClose : faBars}
              className="text-2xl text-primarycolor"
              onClick={toggleNavbar}
            />
          </div>
        </div>
        {open && (
          <div className="mt-4 absolute top-12 left-0 z-50 p-4 bg-black text-white w-full h-auto overflow-y-scroll xl:hidden">
            <ul className="space-y-4 text-gray-700">
              <li>
                <div className="font-bold text-white hover:text-primarycolor">
                  <Link href="/" onClick={handleLinkClick}>
                    <div className="font-bold font-banner py-1 text-white mb-4">
                      Home
                    </div>
                  </Link>
                  <Link
                    href="/about-us"
                    className="font-bold font-banner py-1 text-white mb-4"
                    onClick={handleLinkClick}
                  >
                    About us
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between w-full font-bold text-white hover:text-primarycolor">
                  <Link
                    href="/services"
                    className="font-bold font-banner py-1 text-white mb-4"
                    onClick={handleLinkClick}
                  >
                    <span>Services</span>
                  </Link>
                  <RiArrowDropDownLine
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown("Services");
                    }}
                    size={30}
                    className="cursor-pointer"
                  />
                </div>
                {activeDropdown === "Services" && (
                  <div className="ml-4 max-h-[60vh] overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-primarycolor scrollbar-track-gray-800">
                    <ul className="space-y-4">
                      {serviceCategories.map((category, index) => (
                        <div key={index}>
                          <h6
                            className="text-[0.85rem] text-white font-heading mb-1 cursor-pointer flex items-center justify-between"
                            onClick={() => handleCategoryClick(index)}
                          >
                            {category.name}
                            <span className="ml-2">{activeSubDropdown === index ? "▲" : "▼"}</span>
                          </h6>
                          {activeSubDropdown === index && (
                            <ul className="ml-4">
                              {category.Content.map((content, idx) => {
                                const link = category.links[content];
                                if (!link) return null;
                                return (
                                  <li key={idx} className="mb-[2%]">
                                    <Link
                                      href={link}
                                      onClick={(e) => {
                                        handleCategoryClick();
                                        setOpen((prev) => !prev);
                                      }}
                                      className="text-[0.85rem] text-white hover:text-primarycolor"
                                    >
                                      {content}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </div>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <Link href="/contact-us" onClick={handleLinkClick}>
                  <div className="font-bold font-banner py-1 text-white mb-4">
                    Contact Us
                  </div>
                </Link>
                   <Link href="https://whyglobalservices.com/portfolio">
                  <li className="text-white font-banner font-bold flex items-center">
                    Portfolio
                  </li>
                </Link>
              </li>
              <li className="mt-4">
                <button
                  className="w-full px-4 py-2 bg-white rounded-md"
                  onClick={showModal}
                >
                  GET FREE QUOTE
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={800}
      >
        <EnquireForm onClose={handleCancel} />
      </Modal>
    </>
  );
};

export default MobileNavBar;