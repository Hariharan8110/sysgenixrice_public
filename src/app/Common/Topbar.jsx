import React from "react";
import { FaYoutube, FaInstagram, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const Topbar = () => {
  return (
    <section className="bg-black text-white w-full h-12 lg:px-[5.5%] px-8 md:flex justify-between items-center top-0 hidden">
      <section className="flex gap-5 items-center justify-center">
        <Link href="tel:‪+353 89 446 8914‬" target="_blank">
          <div className="flex text-sm gap-2 items-center hover:scale-110 transition-transform duration-300">
            <div className="rounded-full bg-white text-blue-600 p-1">
              <BiPhoneCall className="size-5" />
            </div>
            <p className="text-sm font-description text-white font-bold">
              ‪+353 89 446 8914‬{" "}
            </p>
          </div>
        </Link>
        <Link href="mailto:info@sysgenixriseitsolutions.ie" target="_blank">
          <div className="flex text-sm gap-2 items-center hover:scale-110 transition-transform duration-300">
            <div className="rounded-full bg-white text-blue-600 p-1">
              <IoMailUnreadOutline className="size-5" />
            </div>
            <p className="text-sm text-white font-description font-bold">
              info@sysgenixriseitsolutions.ie
            </p>
          </div>
        </Link>
      </section>

      <section className="flex gap-4">
        <Link
          href="https://www.facebook.com/Sysgenixrise/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="transform bg-blue-500 text-white rounded-full p-1 font-heading transition-transform duration-700 hover:scale-125 hover:bg-blue-500 hover:text-white">
            <FaFacebook className="size-5" />
          </p>
        </Link>
        <Link
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="transform bg-pink-500 text-white rounded-full p-1 transition-transform duration-700 hover:scale-125 hover:bg-pink-500 hover:text-white">
            <FaInstagram className="size-5" />
          </p>
        </Link>

        <Link
          href="https://www.linkedin.com/company/sysgenix-rise-it-solutions/?viewAsMember=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="transform bg-blue-500 text-white rounded-full p-1 transition-transform duration-700 hover:scale-125 hover:bg-blue-500 hover:text-white">
            <FaLinkedinIn className="size-5" />
          </p>
        </Link>
        <Link
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="transform bg-red-500 text-white rounded-full p-1 transition-transform duration-700 hover:scale-125 hover:bg-red-500 hover:text-white">
            <FaYoutube className="size-5" />
          </p>
        </Link>
        <Link href="https://x.com" target="_blank" rel="noopener noreferrer">
          <p className="transform bg-gray-800 text-white rounded-full p-1 transition-transform duration-700 hover:scale-125 hover:bg-gray-800 hover:text-white">
            <FaXTwitter className="size-5" />
          </p>
        </Link>
      </section>
    </section>
  );
};

export default Topbar;
