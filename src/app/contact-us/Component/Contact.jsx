"use client";
import React, { useEffect } from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";

import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Banner from "../../Common/Banner";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    mode: "onChange", // Validate on change
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const onSubmit = async (data) => {
    const formattedData = {
      fullName: data.name,
      phoneNumber: data.phone,
      email: data.email,
      message: data.message,
      service: data.service || "",
    };

    try {
      const response = await axios.post(
        "https://allmails.whydev.in/v1/sysgenix/send-enquiry-email",
        formattedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Form Submitted Successfully!", { autoClose: 2000 });
        reset();
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      toast.error("Failed to send contact form. Please try again.");
    }
  };

  return (
    <div>
      <Banner />
      <div className="h-full mt-10">
        <ToastContainer />

        <div
          className="px-[5%] lg:px-[8%] grid grid-cols-1 sm:grid-cols-3 gap-4 lg:grid-cols-3"
          data-aos="fade-down"
        >
          {/* Card 1 */}
          <div
            className="border cursor-pointer hover:shadow-xl duration-1000 border-gray-300 p-2 rounded-lg gap-2 flex flex-col text-center"
            data-aos="fade-up"
          >
            <span
              className="flex items-center p-2 justify-center"
              data-aos="zoom-in"
            >
              <span className="bg-primary">
                <IoCallSharp className="text-primarycolor text-4xl" />
              </span>
            </span>
            <h3
              className="md:text-xl text-lg font-title text-primarycolor font-bold "
              data-aos="fade-down"
            >
              Phone
            </h3>
            <p
              className="text-gray-700 flex flex-col gap-1 mb-2 md:mb-0 hover:font-semibold hover:text-primarycolor hover:underline cursor-pointer md:text-[17px] "
              data-aos="fade-up"
            >
              <a href="tel:+353 89 446 8914">+353 89 446 8914</a>
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="border border-gray-300 p-2 rounded-lg hover:shadow-xl duration-1000 gap-2 flex flex-col text-center"
            data-aos="fade-up"
          >
            <span
              className="flex items-center p-2 justify-center"
              data-aos="zoom-in"
            >
              <span className="bg-primary">
                <FaEnvelope className="text-primarycolor text-4xl" />
              </span>
            </span>
            <h3
              className="md:text-xl text-lg font-title text-primarycolor font-bold "
              data-aos="fade-down"
            >
              Email
            </h3>
            <p
              className="text-gray-700 md:mt-3 mb-2 md:mb-0 md:text-[17px] "
              data-aos="fade-up"
            >
              <a
                href="mailto:info@sysgenixriseitsolutions.ie"
                className=" hover:text-primarycolor hover:underline hover:font-semibold"
              >
                info@sysgenixriseitsolutions.ie{" "}
              </a>
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="border border-gray-300 p-2 rounded-lg hover:shadow-xl duration-1000 gap-2 flex flex-col text-center"
            data-aos="fade-up"
          >
            <span
              className="flex items-center p-2 justify-center"
              data-aos="zoom-in"
            >
              <span className="bg-primary">
                <FaMapMarkerAlt className="text-primarycolor text-4xl" />
              </span>
            </span>
            <h3
              className="md:text-xl text-lg font-title text-primarycolor font-bold "
              data-aos="fade-down"
            >
              Address
            </h3>
            <p
              className="text-gray-700 md:px-6 px-2 mb-2 md:mb-0 cursor-pointer  hover:text-primarycolor hover:underline hover:font-semibold"
              data-aos="fade-up"
            >
              <a
                href="https://maps.app.goo.gl/cMw5Jkosv3Egfe1F6"
                target="_blank"
                rel="noopener noreferrer"
              >
                51 Bracken Road, Dublin, Ireland, D18CV48
              </a>
            </p>
          </div>
        </div>

        <div className="flex bg-gray-00 relative flex-col sm:flex-col md:flex-col lg:flex-row items-center mt-2 py-5  justify-center bg-cover bg-center">
          <div className="lg:w-[40%] flex justify-center relative">
            <Image
              src={"/Contact us.gif"}
              alt="Creative Team"
              width={540}
              height={540}
              className="transition-transform duration-500 ease-in-out hover:scale-95 object-cover flex justify-center borderclass"
            />{" "}
          </div>
          <div className="lg:w-[40%] relative z-20 py-4  h-auto rounded-xl bg-white">
            <form
              onSubmit={handleSubmit(onSubmit)}
              data-aos="fade-up"
              className="py-2 space-y-3 md:px-10 px-6"
            >
              <h1
                className="text-h2 text-center lg:text-3xl text-secondaryColor font-bold font-title"
                data-aos="zoom-in"
              >
                Contact Us Now
              </h1>

              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", { 
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message: "Name must be at least 3 characters"
                    }
                  })}
                  className="p-3 border w-full border-gray-300 rounded-md focus:ring-secondaryColor"
                  data-aos="fade-up"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
              <input
  type="tel"
  placeholder="Phone Number"
  {...register("phone", { 
    required: "Phone Number is required",
    pattern: {
      value: /^[0-9]+$/,
      message: "Please enter a valid phone number (only numbers allowed)"
    },
    minLength: {
      value: 8,
      message: "Phone number must be at least 8 digits"
    },
    maxLength: {
      value: 20,
      message: "Phone number cannot exceed 20 digits"
    }
  })}
  className="w-full p-3 border border-gray-300 rounded-md focus:ring-secondaryColor"
  data-aos="fade-up"
  onInput={(e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
  }}
/>

                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-secondaryColor"
                  data-aos="fade-up"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <textarea
                  placeholder="Type Message"
                  {...register("message", {
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters"
                    }
                  })}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-secondaryColor "
                  rows="4"
                  data-aos="fade-up"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className={`px-4 text-white py-3 rounded-md ${isValid ? 'bg-primarycolor hover:bg-primary-dark' : 'bg-gray-400 cursor-not-allowed'} focus:ring-primary mx-auto`}
                  disabled={isSubmitting || !isValid}
                  
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2385.8434833688075!2d-6.219506623927327!3d53.2744239801033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4867090a2bb02d93%3A0x8c32c85ccb1a8d27!2sBracken%20House%2C%2051%20Bracken%20Rd%2C%20Sandyford%20Business%20Park%2C%20Sandyford%2C%20Dublin%2C%20D18%20CV48%2C%20Ireland!5e0!3m2!1sen!2sin!4v1742824051821!5m2!1sen!2sin"
            height="450"
            className="w-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;