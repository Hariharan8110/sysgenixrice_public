'use client';

import { Formik, Field, Form } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { useState } from 'react';
import Image from 'next/image';

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must not exceed 50 characters'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required')
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      'Email must be a valid format (e.g., user@example.com)'
    ),
  phoneNumber: Yup.string()
    .required('Phone number is required')
    .matches(
      /^\+?[0-9]{8,15}$/,
      'Phone number must be 8-15 digits and may start with +'
    ),
  message: Yup.string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must not exceed 500 characters'),
  selectedService: Yup.string().required('Please select a service'),
});


const FormAiData = () => {
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [selectedButton, setSelectedButton] = useState('');
  const [selectedServiceDisplay, setSelectedServiceDisplay] = useState('');

  const handleServiceClick = () => {
    setShowServiceDropdown(!showServiceDropdown);
    setSelectedButton('service'); 
  };

  const handleServiceChange = (e, setFieldValue) => {
    const service = e.target.value;
    setFieldValue('selectedService', service);
    setSelectedServiceDisplay(service);
    setShowServiceDropdown(false);
  };

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const response = await fetch(
        "https://allmails.whydev.in/v1/sysgenix/send-contact-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: values.fullName,
            email: values.email,
            phoneNumber: values.phoneNumber,
            message: values.message,
            selectedService: values.selectedService,
          }),
        }
      );
  
      const data = await response.json();
  
      if (response.ok) {
        toast.success("Form submitted successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
        resetForm();
        setShowServiceDropdown(false);
        setSelectedButton("");
        setSelectedServiceDisplay("");
      } else {
        throw new Error(data.message || "Failed to submit form");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred while submitting the form", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 p-4 lg:p-8 max-w-7xl overflow-x-hidden mx-auto">
      {/* Left Side - Image */}
      <div className="lg:w-1/2 w-full px-4 lg:px-0" data-aos="fade-right">
        <div className="relative w-full h-64 md:h-96 lg:h-auto">
          <Image
            src="/App_development.gif"
            alt="Contact us illustration"
            width={500}
            height={300}
            unoptimized
          />
        </div>
      </div>

      {/* Right Side - Form */}
      <div
        className="relative z-10 lg:w-1/2 w-full bg-white p-4 sm:p-6 rounded-xl shadow-lg"
        data-aos="fade-left"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
          Contact Us
        </h2>
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            phoneNumber: '',
            message: '',
            selectedService: '',
            showServiceDropdown: false,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnBlur={true}
          validateOnChange={true}
        >
          {({ isSubmitting, errors, touched, values, isValid, setFieldValue }) => (
            <Form className="space-y-3 sm:space-y-4">
              <div>
                <Field
                  name="fullName"
                  type="text"
                  placeholder="Name*"
                  className={`mt-1 block text-black font-description font-medium w-full p-2 sm:p-3 border ${
                    errors.fullName && touched.fullName
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } rounded-md focus:ring-primarycolor focus:border-primarycolor placeholder:text-sm`}
                />
                {errors.fullName && touched.fullName && (
                  <div className="text-red-600 text-left text-xs sm:text-sm mt-1">
                    {errors.fullName}
                  </div>
                )}
              </div>

              <div>
                <Field
                  name="phoneNumber"
                  type="tel"
                  placeholder="Phone Number*"
                  className={`mt-1 block font-description text-black font-medium w-full p-2 sm:p-3 border ${
                    errors.phoneNumber && touched.phoneNumber
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } rounded-md focus:ring-primarycolor focus:border-primarycolor placeholder:text-sm`}
                />
                {errors.phoneNumber && touched.phoneNumber && (
                  <div className="text-red-600 text-left text-xs sm:text-sm mt-1">
                    {errors.phoneNumber}
                  </div>
                )}
              </div>

              <div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Email*"
                  className={`mt-1 block w-full text-black p-2 sm:p-3 border ${
                    errors.email && touched.email
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } font-description font-medium rounded-md focus:ring-primarycolor focus:border-primarycolor placeholder:text-sm`}
                />
                {errors.email && touched.email && (
                  <div className="text-red-600 text-left text-xs sm:text-sm mt-1">
                    {errors.email}
                  </div>
                )}
              </div>

              <div>
                <Field
                  name="message"
                  as="textarea"
                  placeholder="Message*"
                  className={`mt-1 block w-full p-2 sm:p-3 border text-black ${
                    errors.message && touched.message
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } font-description font-medium rounded-md focus:ring-primarycolor focus:border-primarycolor placeholder:text-sm resize-none h-20 sm:h-24`}
                />
                {errors.message && touched.message && (
                  <div className="text-red-600 text-left text-xs sm:text-sm mt-1">
                    {errors.message}
                  </div>
                )}
              </div>

              <div className="w-full">
                <button
                  type="button"
                  className={`py-2 px-4 font-description font-medium rounded-md w-full mr-2  ${
                    selectedButton === 'service'
                      ? 'bg-primarycolor text-white'
                      : 'bg-gray-200 text-gray-700'
                  } hover:bg-primarycolor hover:text-white`}
                  onClick={handleServiceClick}
                >
                  Services
                </button>
              </div>

              {selectedServiceDisplay && (
                <div className="p-2 bg-gray-100 rounded-md">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">{selectedServiceDisplay}</span>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedServiceDisplay('');
                        setFieldValue('selectedService', '');
                      }}
                      className="text-red-500 hover:text-red-700"
                    >
                      ×
                    </button>
                  </div>
                </div>
              )}

              {showServiceDropdown && !selectedServiceDisplay && (
                <div className="block font-medium font-description mb-1 required">
                  <Field
                    as="select"
                    name="selectedService"
                    onChange={(e) => handleServiceChange(e, setFieldValue)}
                    className={`w-full py-2 sm:py-3 mb-2 text-gray-800 border font-description ${
                      errors.selectedService && touched.selectedService
                        ? 'border-red-500'
                        : 'border-gray-300'
                    } focus:outline-none focus:ring-1 focus:border-none focus:ring-primarycolor rounded-md text-sm sm:text-base`}
                  >
                    <option value="">Select a Service</option>
                    <option value="AI & Data Analytics">
                      AI & Data Analytics
                    </option>
                    <option value="Salesforce Consulting & Integration">
                      Salesforce Consulting & Integration
                    </option>
                    <option value="IT Infrastructure & Managed Services">
                      IT Infrastructure & Managed Services
                    </option>
                    <option value="Custom Software & App Development">
                      Custom Software & App Development
                    </option>
                    <option value="IT Staffing & HR Solutions">
                      IT Staffing & HR Solutions
                    </option>
                    <option value="IT Project Management & Digital Transformation">
                      IT Project Management & Digital Transformation
                    </option>
                    <option value="Training and Education">Training and Education</option>

                  </Field>
                  {errors.selectedService && touched.selectedService && (
                    <div className="text-red-600 text-xs sm:text-sm mt-1">
                      {errors.selectedService}
                    </div>
                  )}
                </div>
              )}

              <div className="mt-3 sm:mt-4">
              <button
  type="submit"
  className="py-2 sm:py-3 px-4 bg-primarycolor w-full text-white font-medium rounded-md hover:bg-opacity-90 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
  disabled={isSubmitting || !isValid || !values.selectedService}
>
  {isSubmitting ? 'Submitting...' : 'Submit'}
</button>

              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormAiData;