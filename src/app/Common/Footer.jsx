import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdWifiCalling3 } from "react-icons/md";
import { IoMailUnread } from "react-icons/io5";
import Cta from "./Cta";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <Cta />
      <footer className="bg-gray-900 text-white py-12 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Logo & Address */}
          <div className="w-full">
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
            <p className="mt-3 text-justify ">
              IT and software solutions encompass a broad range of technologies
              and services designed to enhance business operations.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold  text-primarycolor font-title mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 ">
              <li>
                <a href="/about-us" className="hover:text-blue-500">
                  About us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-blue-500">
                  Services
                </a>
              </li>
              {/* <li>
                <a href="/product" className="hover:text-blue-500">
                  Products
                </a>
              </li> */}
              <li>
              <a href="/contact-us" className="hover:text-blue-500">
              Contact us
                </a>
               
              </li>
            </ul>
          </div>
          {/* Links */}
          {/* <div>
            <h3 className="text-2xl font-semibold text-primarycolor mb-3 font-title">
              Product
            </h3>
            <ul className="space-y-2 ">
              <li>
                <a href="/product/hrms" className="hover:text-blue-500">
                  Human Resource Management System
                </a>
              </li>
              <li>
                <a href="/product/lms" className="hover:text-blue-500">
                  Learning Management System
                </a>
              </li>
            </ul>
          </div> */}

          <div>
            <h3 className="text-2xl font-semibold mb-3 text-primarycolor font-title">
              Services
            </h3>
            <ul className="space-y-2 ">
              <li>
                <a href="/services/ai-data-analytics" className="hover:text-blue-500">
                AI & Data Analytics
                </a>
              </li>
              <li>
                <a href="/services/salesforce-consulting-integration" className="hover:text-blue-500">
                Salesforce Consulting & Integration
                </a>
              </li>
              <li>
                <a href="/services/it-infrastructure-managed-services" className="hover:text-blue-500">
                IT Infrastructure & Managed Services
                </a>
              </li>
              <li>
                <a href="/services/custom-software-app-development" className="hover:text-blue-500">
                Custom Software & App Development
                </a>
              </li>
              <li>
                <a href="/services/it-staffing-hr-solutions" className="hover:text-blue-500">
                IT Staffing & HR Solutions
                </a>
              </li>
              <li>
                <a href="/services/it-project-management-digital-transformation" className="hover:text-blue-500">
                IT Project Management & Digital Transformation
                </a>
              </li>
              <li>
                <a href="/services/training-and-education" className="hover:text-blue-500">
                Training and Education
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-primarycolor font-title">
              Follow us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/Sysgenixrise/"
                className="p-3 bg-yellow-100 rounded-full hover:bg-gray-200 text-xl"
              >
                <FaFacebookF className="text-black" />
              </a>
              <a
                href="#"
                className="p-3 bg-yellow-100 rounded-full hover:bg-gray-200 text-xl"
              >
                <FaTwitter className="text-black" />
              </a>
              <a
                href="https://www.linkedin.com/company/sysgenix-rise-it-solutions/?viewAsMember=true"
                className="p-3 bg-yellow-100 rounded-full hover:bg-gray-200 text-xl"
              >
                <FaLinkedinIn className="text-black" />
              </a>
              <a
                href="#"
                className="p-3 bg-yellow-100 rounded-full hover:bg-gray-200 text-xl"
              >
                <FaYoutube className="text-black" />
              </a>
            </div>
            <p className="mt-5 flex items-center gap-1 ">
              <MdWifiCalling3 className="text-3xl text-primarycolor" />
              <a href="tel:+353 89 446 8914" className="hover:text-blue-500">
                +353 89 446 8914
              </a>
            </p>
            <div className="flex items-center gap-3 mt-4">
              <div>
                <IoMailUnread className="text-2xl text-primarycolor" />
              </div>
              <p className="">
                <a
                  href="mailto:info@sysgenixriseitsolutions.ie"
                  className="hover:text-blue-500"
                >
                  info@sysgenixriseitsolutions.ie
                </a>
              </p>
            </div>

            <div className="flex items-start gap-3 mt-4">
              <FaMapMarkerAlt className="text-2xl text-primarycolor mt-1" />
              <p>
                <a
                  href="https://maps.app.goo.gl/cMw5Jkosv3Egfe1F6"
                  className="hover:text-blue-500"
                >
                 51 Bracken Road, Dublin, Ireland,
                 EIR Code : D18CV48
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="lg:h-14 text-[16px] xs:text-sm px-5 md:px-0 flex flex-col md:flex-row py-4 justify-between items-center bg-primarycolor gap-2 md:gap-0">
 
  <div className="flex flex-wrap justify-center md:justify-start items-center font-semibold font-description gap-4 px-[5%] md:gap-5">
    <a href="/privacy-policy" className="hover:text-bold font-heading cursor-pointer">
      Privacy Policy
    </a>
    <a href="/terms-conditions" className="hover:text-bold font-heading cursor-pointer">
      Terms & Conditions
    </a>
  </div>

  <a href="https://whyglobalservices.com/" target="_blank" rel="noopener noreferrer" className="font-semibold font-description px-[5%] text-center md:text-right w-full md:w-auto">
  Powered by Why Global Services. All rights reserved.
</a>
</div>

    </div>
  );
};

export default Footer;
