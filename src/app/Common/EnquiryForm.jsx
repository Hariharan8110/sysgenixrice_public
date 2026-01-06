"use client";

import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

// Enhanced validation schema
const validationSchema = Yup.object({
  fullName: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must not exceed 50 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email must be valid"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10,15}$/, "Phone number must be between 10-15 digits")
    .required("Phone number is required"),
  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must not exceed 500 characters"),
});

const EnquireForm = ({ onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true);
    
    try {
      const response = await axios.post(
        "https://allmails.whydev.in/v1/sysgenix/send-enquiry-email",
        { ...values, service: selectedService },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 10000 
        }
      );

      if (response.status === 200) {
        toast.success("Form submitted successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        resetForm();
        if (onClose) {
          setTimeout(() => onClose(), 3000); 
        }
      }
    } catch (error) {
      let errorMessage = "Form submission failed! Please try again.";
      
      if (error.response) {
        errorMessage = error.response.data?.message || errorMessage;
      } else if (error.request) {
        errorMessage = "Network error. Please check your connection.";
      }
      
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="relative rounded-lg md:mx-auto w-[350px] md:w-[800px] lg:w-[1000px] flex flex-col md:flex-row items-center gap-8">
        {/* Left Image Section */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/Creative team.gif"
            alt="Side Image"
            width={500}
            height={300}
            className="w-full rounded-md"
          />
        </div>

        {/* Right Form Section */}
        <div className="flex-1 w-full">
          <div className="relative rounded-lg w-full">
            <div className="flex flex-col items-center">
              <div className="flex gap-4 mb-4 bg-gray-900 rounded-2xl w-[80%] justify-center mr-1 p-3">
                <Image
                  src="/Sysgenix LOGO-06.png"
                  alt="Company Logo 1"
                  width={100}
                  height={50}
                  className="max-w-xl"
                />
                <div className="flex flex-col">
                  <Image
                    src="/Sysgenix LOGO-07.png"
                    alt="Company Logo 2"
                    width={100}
                    height={50}
                    className="max-w-xl mt-5 mr-2"
                  />
                  <span className="text-xs font-medium bg-gradient-to-b from-gray-300 to-white bg-clip-text text-transparent mt-1">
                    --Rise IT Solutions--
                  </span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-title mb-2 font-semibold text-center">
              Enquiry Form
            </h2>

            <Formik
              initialValues={{
                fullName: "",
                email: "",
                phoneNumber: "",
                message: ""
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              validateOnChange={true}
              validateOnBlur={true}
            >
              {({ errors, touched, isValid, dirty }) => (
                <Form className="space-y-4">
                  <div>
                    <Field
                      name="fullName"
                      type="text"
                      placeholder="Name*"
                      className={`mt-1 block font-description w-full p-2 border rounded-md focus:ring-primarycolor focus:border-primarycolor placeholder:text-sm transition duration-200 ${
                        errors.fullName && touched.fullName
                          ? "border-red-500"
                          : "border-gray-300 hover:border-primarycolor"
                      }`}
                    />
                    {errors.fullName && touched.fullName && (
                      <div className="text-red-600 text-sm mt-1">
                        {errors.fullName}
                      </div>
                    )}
                  </div>

                  <div>
                    <Field
                      name="phoneNumber"
                      type="tel"
                      placeholder="Phone Number*"
                      className={`mt-1 block w-full p-2 border font-description rounded-md focus:ring-primarycolor focus:border-primarycolor placeholder:text-sm transition duration-200 ${
                        errors.phoneNumber && touched.phoneNumber
                          ? "border-red-500"
                          : "border-gray-300 hover:border-primarycolor"
                      }`}
                    />
                    {errors.phoneNumber && touched.phoneNumber && (
                      <div className="text-red-600 text-sm mt-1">
                        {errors.phoneNumber}
                      </div>
                    )}
                  </div>

                  <div>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Email*"
                      className={`mt-1 block w-full p-2 border font-description rounded-md focus:ring-primarycolor focus:border-primarycolor placeholder:text-sm transition duration-200 ${
                        errors.email && touched.email
                          ? "border-red-500"
                          : "border-gray-300 hover:border-primarycolor"
                      }`}
                    />
                    {errors.email && touched.email && (
                      <div className="text-red-600 text-sm mt-1">
                        {errors.email}
                      </div>
                    )}
                  </div>

                  <div>
                    <Field
                      as="textarea"
                      name="message"
                      placeholder="Message*"
                      rows="4"
                      className={`mt-1 block w-full p-2 border font-description rounded-md focus:ring-primarycolor focus:border-primarycolor placeholder:text-sm transition duration-200 ${
                        errors.message && touched.message
                          ? "border-red-500"
                          : "border-gray-300 hover:border-primarycolor"
                      }`}
                    />
                    {errors.message && touched.message && (
                      <div className="text-red-600 text-sm mt-1">
                        {errors.message}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className={`w-full bg-primarycolor text-white font-description py-2 px-4 rounded-md transition duration-200 ${
                      isSubmitting || !isValid || !dirty
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-opacity-90"
                    }`}
                    disabled={isSubmitting || !isValid || !dirty}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquireForm;