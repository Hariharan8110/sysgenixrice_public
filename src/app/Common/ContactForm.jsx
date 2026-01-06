"use client"; 
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, "Name must not contain numbers")
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10,15}$/, "Phone number must be between 10-15 digits")
    .required("Phone number is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
  selectedService: Yup.string()
    .required("Please select a service"),
});

const ContactForm = ({ onClose }) => {
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [selectedButton, setSelectedButton] = useState("");

  const handleServiceClick = () => {
    setShowServiceDropdown((prev) => !prev);
    setSelectedButton((prev) => (prev === "service" ? "" : "service"));
  };

  return (
    <div className="relative w-full font-description">
      <h2 className="text-2xl text-primarycolor mb-4 font-description font-medium text-center">
        Enquiry Form
      </h2>

      <Formik
        initialValues={{
          fullName: "",
          email: "",
          phoneNumber: "",
          message: "",
          selectedService: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          setSubmitting(true);
          console.log("Submitted Values:", values);
          try {
            const response = await axios.post(
              "https://allmails.whydev.in/v1/sysgenix/send-contact-email",
              values
            );

            if (response.status === 200 || response.status === 201) {
              toast.success("Form submitted successfully!", { 
                autoClose: 2000,
                position: "top-center"
              });
              resetForm();
              setTimeout(() => {
                onClose();
              }, 2000);
            } else {
              toast.error("Form submission failed! Please try again.", {
                position: "top-center"
              });
            }
          } catch (error) {
            console.error("Submission error:", error);
            if (error.response) {
              toast.error(
                error.response.data.message || "Form submission failed!",
                { position: "top-center" }
              );
            } else if (error.request) {
              toast.error("No response from server. Please try again later.", {
                position: "top-center"
              });
            } else {
              toast.error("Error submitting form. Please try again.", {
                position: "top-center"
              });
            }
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, errors, touched, values, isValid }) => (
          <Form className="space-y-4">
            {/* Name Field */}
            <div>
              <Field
                name="fullName"
                type="text"
                placeholder="Name*"
                className={`mt-1 block text-black font-description font-medium w-full p-2 border ${errors.fullName && touched.fullName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primarycolor focus:border-primarycolor placeholder:text-sm`}
              />
              {errors.fullName && touched.fullName && (
                <div className="text-red-600 text-left text-sm mt-1">
                  {errors.fullName}
                </div>
              )}
            </div>

            {/* Phone Number Field */}
            <div>
              <Field
                name="phoneNumber"
                type="tel"
                placeholder="Phone Number*"
                className={`mt-1 block font-description text-black font-medium w-full p-2 border ${errors.phoneNumber && touched.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primarycolor focus:border-primarycolor placeholder:text-sm`}
              />
              {errors.phoneNumber && touched.phoneNumber && (
                <div className="text-red-600 text-left text-sm mt-1">
                  {errors.phoneNumber}
                </div>
              )}
            </div>

            {/* Email Field */}
            <div>
              <Field
                name="email"
                type="email"
                placeholder="Email*"
                className={`mt-1 block w-full text-black p-2 border ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'} font-description font-medium rounded-md focus:ring-primarycolor focus:border-primarycolor placeholder:text-sm`}
              />
              {errors.email && touched.email && (
                <div className="text-red-600 text-left text-sm mt-1">
                  {errors.email}
                </div>
              )}
            </div>

            {/* Message Field */}
            <div>
              <Field
                name="message"
                as="textarea"
                placeholder="Message*"
                className={`mt-1 block w-full p-2 text-black border ${errors.message && touched.message ? 'border-red-500' : 'border-gray-300'} font-description font-medium rounded-md focus:ring-primarycolor focus:border-primarycolor placeholder:text-sm resize-none h-16`}
              />
              {errors.message && touched.message && (
                <div className="text-red-600 text-left text-sm mt-1">
                  {errors.message}
                </div>
              )}
            </div>

            {/* Services Button */}
            <div className="w-full">
              <button
                type="button"
                className={`py-2 px-4 font-description font-medium rounded-md w-full mr-2 ${
                  selectedButton === "service"
                    ? "bg-primarycolor text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-primarycolor hover:text-white`}
                onClick={handleServiceClick}
              >
                Services
              </button>
            </div>

            {/* Services Dropdown */}
            {showServiceDropdown && (
              <div className="block font-medium font-description mb-1">
                <Field
                  as="select"
                  name="selectedService"
                  className={`w-full py-3 mb-2 text-gray-800 border font-description ${errors.selectedService && touched.selectedService ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 focus:border-none focus:ring-primarycolor rounded-md`}
                >
                  <option value="">Select a Service*</option>
                  <option value="AI & Data Analytics">AI & Data Analytics</option>
                  <option value="Salesforce Consulting & Integration">Salesforce Consulting & Integration</option>
                  <option value="IT Infrastructure & Managed Services">IT Infrastructure & Managed Services</option>
                  <option value="Custom Software & App Development">Custom Software & App Development</option>
                  <option value="IT Staffing & HR Solutions">IT Staffing & HR Solutions</option>
                  <option value="IT Project Management & Digital Transformation">IT Project Management & Digital Transformation</option>
                  <option value="Training and Education">Training and Education</option>
                </Field>
                {errors.selectedService && touched.selectedService && (
                  <div className="text-red-600 text-sm mt-1">
                    {errors.selectedService}
                  </div>
                )}
              </div>
            )}

            {/* Submit Button */}
            <div className="mt-4">
              <button
                type="submit"
                className="py-3 px-4 bg-primarycolor w-full text-white font-medium rounded-md hover:bg-opacity-90 disabled:opacity-70"
                disabled={isSubmitting || !isValid}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;