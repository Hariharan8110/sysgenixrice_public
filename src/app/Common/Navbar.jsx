"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import {
  MdPhonelink,
  MdOutlineDesignServices,
  MdOutlineAppSettingsAlt,
} from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

import { RiAdvertisementLine } from "react-icons/ri";
import { Modal } from "antd";
import Image from "next/image";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import EnquireForm from "./EnquiryForm";
import { FaCaretRight } from "react-icons/fa6";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeTimeoutCompany = useRef(null);
  const closeTimeoutService = useRef(null);
  const closeTimeoutSolution = useRef(null);

  const [showDropdownCompany, setShowDropdownCompany] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [solutionDropdown, setSolutionDropdown] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

  const openDropdownCompany = () => {
    setShowDropdownCompany(true);
    clearTimeout(closeTimeoutCompany.current);
  };

  const handleLinkClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      // window.location.reload();
    }
    setServiceDropdown(false);
    setShowDropdownCompany(false);
    setSolutionDropdown(false);
    setOpen(false);
  };

  const closeDropdownCompany = () => {
    closeTimeoutCompany.current = setTimeout(() => {
      setShowDropdownCompany(false);
    }, 300);
  };

  const openDropdownService = () => {
    setServiceDropdown(true);
    clearTimeout(closeTimeoutService.current);
  };

  const closeDropdownService = () => {
    closeTimeoutService.current = setTimeout(() => {
      setServiceDropdown(false);
    }, 300);
  };

  const openDropdownSolution = () => {
    setSolutionDropdown(true);
    clearTimeout(closeTimeoutSolution.current);
  };

  const closeDropdownSolution = () => {
    closeTimeoutSolution.current = setTimeout(() => {
      setSolutionDropdown(false);
    }, 300);
  };

  const location = usePathname();

  const isActive = (path) => {
    return (
      location === path || (path !== "/" && location.startsWith(path + "/"))
    );
  };

  const router = useRouter();
  useEffect(() => {
    // Only run this code if `router` is properly initialized
    if (router && router.events) {
      const handleRouteChange = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

      router.events.on("routeChangeComplete", handleRouteChange); // Attach event listener for route change

      return () => {
        router.events.off("routeChangeComplete", handleRouteChange); // Cleanup the event listener
      };
    }
  }, [router]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".dropdown-container")) {
        closeDropdownCompany();
      }
      if (!e.target.closest(".dropdown-containerservice")) {
        closeDropdownService();
      }
      if (!e.target.closest(".dropdown-containersolution")) {
        closeDropdownSolution();
      }
    };

    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleSolutionClick = () => setShowSubmenu(false);

  const serviceCategories = [
    {
      name: (
        <Link
          href="/services/ai-data-analytics"
          onClick={handleLinkClick}
          className="cursor-pointer"
        >
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
          href="/services/salesforce-consulting-integration"
          onClick={handleLinkClick}
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
          href="/services/it-infrastructure-managed-services"
          onClick={handleLinkClick}
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
        "Managed Testing Services",
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
          href="/services/custom-software-app-development"
          onClick={handleLinkClick}
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
          href="/services/it-staffing-hr-solutions"
          onClick={handleLinkClick}
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
          href="/services/it-project-management-digital-transformation"
          onClick={handleLinkClick}
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
      {
      name: (
        <Link
          href="/services/Digital-Marketing"
          onClick={handleLinkClick}
          className="cursor-pointer"
        >
          Digital Marketing
        </Link>
      ),
      // icon: LiaLaptopCodeSolid,
      Content: [
        // "AI-Powered Automation",
        // "Predictive Analytics",
        // "Natural Language Processing",
        // "Business Intelligence (BI) & Data Visualization",
      ],
      links: {
        // "AI-Powered Automation":
        //   "/services/ai-data-analytics/ai-powered-automation",
        // "Predictive Analytics":
        //   "/services/ai-data-analytics/predictive-analytics",
        // "Natural Language Processing":
        //   "/services/ai-data-analytics/natural-language-processing",
        // "Business Intelligence (BI) & Data Visualization":
        //   "/services/ai-data-analytics/bi-and-data-visualization",
      },
    },
  ];

  return (
    <div className="z-30 relative hidden xl:sticky top-0  xl:block font-banner">
      <section className="bg-black h-[94px]  flex justify-between  xl:px-14 items-center p-0 drop-shadow-xl z-10 w-full top-0">
        <div className="w-[10%] flex items-center space-x-0">
          <Link href="/">
            <div className="flex items-center space-x-2">
              <Image
                src="/Sysgenix LOGO-06.png"
                alt="logo"
                width={100}
                height={100}
                className="object-contain"
              />
              <div className="flex flex-col items-center -ml-4">
                <Image
                  src="/Sysgenix LOGO-07.png"
                  alt="logo"
                  width={120}
                  height={120}
                  className="scale-125 mb-1"
                />
                <span className="text-sm font-medium bg-gradient-to-b from-gray-300 to-white bg-clip-text text-transparent whitespace-nowrap mt-0 ml-1">
                  --Rise IT Solutions--
                </span>
              </div>
            </div>
          </Link>
        </div>

        <ul className="w-[70%] gap-4 lg:flex flex-row hidden justify-center items-center cursor-pointer lg:text-[15px] text-[12px] font-banner">
          <Link href="/">
            <li className={`font-bold font-banner py-1 text-white  `}>Home</li>
          </Link>
          <Link href="/about-us">
            <li className={`font-bold font-banner py-1 text-white  `}>
              About us
            </li>
          </Link>
          <div
      className="relative dropdown-containerservice"
      onMouseEnter={openDropdownService}
      onMouseLeave={closeDropdownService}
    >
      <Link
        href="/services"
        className="text-white font-banner font-bold flex items-center"
      >
        Services <IoMdArrowDropdown size={20} />
      </Link>
      <AnimatePresence>
    {serviceDropdown && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 top-full mt-2 w-fit bg-white text-black drop-shadow-md py-1 px-1 rounded border border-gray-200"
      >
        <div className="grid grid-rows-6 gap-1 w-fit text-sm">
          {serviceCategories.map((category, index) => (
            <div key={index} className="relative group">
              <div
                className="flex items-center justify-between w-full p-1 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    setHoveredService(null);
                  }
                }}
              >
                <h2 className="text-base ml-2 h-10 w-60 flex items-center font-medium hover:text-primarycolor">
                  {category.name}
                </h2>
              <div className="text-primarycolor">
              {category.Content && category.Content.length > 0 && (
                <IoMdArrowDropright />
              )}
            </div>
              </div>
              <AnimatePresence>
                {hoveredService === index && category.Content?.length > 0 && (
                  <motion.ul
                    initial={{ opacity: 0, x: 10, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute ${
                      index >= serviceCategories.length - 2 
                        ? 'bottom-0 mb-0' 
                        : 'top-0'
                    } left-full ml-2 w-56 bg-white shadow-xl p-2 rounded-md border border-gray-200 submenu`}
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget)) {
                        setHoveredService(null);
                      }
                    }}
                    onClick={() => closeDropdownService()} 
                  >
                    {category.Content.map((content, idx) => {
                      const link = category.links[content];
                      return (
                        <li
                          key={idx}
                          className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition-all"
                        >
                          <div className="text-primarycolor">
                            <IoMdArrowDropright />
                          </div>
                          {link ? (
                            <Link
                              href={link}
                              className="hover:text-primarycolor font-medium transition-all"
                            >
                              {content}
                            </Link>
                          ) : (
                            <span className="text-gray-700">{content}</span>
                          )}
                        </li>
                      );
                    })}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</div>

          {/* <div
            className="relative dropdown-container"
            onMouseEnter={openDropdownSolution}
            onMouseLeave={closeDropdownSolution}
          >
            <Link
              href="/product"
              className={`font-bold hover:text-white  hover:border-b-primarycolor hover:border-b-2 font-banner flex items-center  ${
                isActive("product")
                  ? "text-white"
                  : "text-primarycolor"
              }
                    
              `}
            >
              Products <IoMdArrowDropdown size={20} />
            </Link>
            {solutionDropdown && (
              <ul className="absolute top-11 font-banner downup bg-white  text-white pb-2 w-80  rounded ">
                Solutions submenu items
                <Link href="/product/lms" onClick={handleSolutionClick}>
                  <li className="  mt-2 flex items-center gap-2 py-2 px-4  hover:text-white">
                    <FaCaretRight /> Learning Management System (LMS)
                  </li>
                </Link>
                <Link href="/product/hrms" onClick={handleSolutionClick}>
                  <li className=" py-2 flex items-center gap-2 px-4 hover:text-white">
                    <FaCaretRight /> Human Resource Management System
                  </li>
                </Link>
                <Link href="/Solution/ERP" onClick={handleSolutionClick}>
                  <li className=" py-2 px-4  hover:text-white">
                    Enterprise Resource Planning (ERP)
                  </li>
                </Link>
                <Link href="/Solution/Jobportal" onClick={handleSolutionClick}>
                  <li className=" py-2 px-4  hover:text-white">
                    Job Portal
                  </li>
                </Link>
                <Link href="/Solution/ar-and-vr" onClick={handleSolutionClick}>
                  <li className=" py-2 px-4  hover:text-white">
                    AR/VR Applications
                  </li>
                </Link>
                <Link
                  href="/Solution/human-resource-management-system"
                  onClick={handleSolutionClick}
                >
                  <li className=" py-2 px-4  hover:text-white">
                    Human Resource Management System
                  </li>
                </Link>

                <Link
                  href="/Solution/food-deliver"
                  onClick={handleSolutionClick}
                >
                  <li className=" py-2 px-4  hover:text-white">
                    Food Delivery App
                  </li>
                </Link>
                <Link
                  href="/Solution/Photos-delivery-app"
                  onClick={handleSolutionClick}
                >
                  <li className=" py-2 px-4  hover:text-white">
                    Photos Delivery App
                  </li>
                </Link>
              </ul>
            )}
          </div> */}

          {/* Additional Links */}
          {/* <Link
            href="https://whyglobalservices.com/portfolio" // Ensure proper absolute URL
            target="_blank"
          >
            <li
              className={`font-bold font-banner hover:text-white hover:border-b-primarycolor hover:border-b-2 ${
                isActive("portfolio")
                  ? "text-white"
                  : "text-primarycolor"
              }`}
            >
              Portfolio
            </li>
          </Link> */}
          {/* <Link href="/partners">
            <li
              className={`font-bold font-banner py-1 hover:text-white hover:border-b-primarycolor hover:border-b-2 ${
                isActive("/partners")
                  ? "text-white border-b-primarycolor border-b-2 "
                  : "text-primarycolor"
              }
                    
              `}
            >
              Partners
            </li>
          </Link> */}
          <Link
            href="/contact-us" 
          >
            <li
              className={`text-white  font-banner font-bold flex items-center `}
            >
              Contact us
            </li>
          </Link>
          {/* <Link href="https://whyglobalservices.com/portfolio">
  <li className="text-white font-banner font-bold flex items-center">
    Portfolio
  </li>
</Link> */}


          {/* <Link href="/testimonials">
            <li
              className={`font-bold font-banner hover:text-white  ${
                isActive("testimonials") ? "text-white" : ""
              }
                    
              `}
            >
              Testimonials
            </li>
          </Link>
          <Link href="/event">
            <li
              className={`font-bold font-banner hover:text-white  ${
                isActive("event") ? "text-white" : ""
              }`}
            >
              Events
            </li>
          </Link>
          <Link href="/News">
            <li
              className={`font-bold font-banner hover:text-white  ${
                isActive("News") ? "text-white" : ""
              }
                `}
            >
              News
            </li>
          </Link>
          <Link href="/Currentopenings">
            <li
              className={`font-bold font-banner hover:text-white  ${
                isActive("Currentopenings") ? "text-white" : ""
              }
                `}
            >
              Careers
            </li>
          </Link>

          <Link href="/Blog">
            <li
              className={`font-bold font-banner hover:text-white  ${
                isActive("Blog") ? "text-white" : ""
              }
                `}
            >
              Blog
            </li>
          </Link> */}
          {/* <Link href="/contact-us">
            <li
              className={`font-bold text-primarycolor font-banner hover:text-white hover:border-b-primarycolor hover:border-b-2  ${
                isActive("contact-us") ? "text-white" : ""
              }
                    
              `}
            >
              Contact us
            </li>
          </Link> */}
        </ul>

        <div className="w-[14%]">
          {/* Button to open modal */}
          <p
            className="font-bold py-2 px-1 text-center font-banner  cursor-pointer  text-white   text-sm   lg:block hidden"
            onClick={showModal}
          >
            GET FREE QUOTE
          </p>

          <Modal
            title=""
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            width={900}
          >
            <EnquireForm onClose={handleCancel} />
          </Modal>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
