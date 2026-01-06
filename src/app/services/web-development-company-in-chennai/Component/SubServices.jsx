"use client";

import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactForm from "@/app/Common/ContactForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal } from "antd";
export default function SubServices() {
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [selectedButton, setSelectedButton] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

  const [modalWidth, setModalWidth] = useState("30%");

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  // Handle modal width on screen resize
  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 640) {
        setModalWidth("100%");
      } else if (window.innerWidth < 1100) {
        setModalWidth("50%");
      } else {
        setModalWidth("27%");
      }
    };

    window.addEventListener("resize", updateWidth);
    updateWidth(); // Initial call

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleProductClick = () => {
    setShowProductDropdown((prev) => !prev);
    setShowServiceDropdown(false);
    setSelectedButton((prev) => (prev === "product" ? "" : "product"));
  };

  const handleServiceClick = () => {
    setShowServiceDropdown((prev) => !prev);
    setShowProductDropdown(false);
    setSelectedButton((prev) => (prev === "service" ? "" : "service"));
  };

  const validationSchema = Yup.object()
    .shape({
      fullName: Yup.string()
        .matches(/^[a-zA-Z\s]*$/, "Name must not contain numbers")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phoneNumber: Yup.string().required("Phone number is required"),
      message: Yup.string().required("Message is required"),
      selectedService: Yup.string(),
    })
    .test("service", "Please select a service", function (value) {
      return !!(value.selectedService || value.selectedProduct);
    });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const canvas = document.getElementById("particle-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let shapesArray = [];
    class Shape {
      constructor() {
        this.size = Math.random() * 30 + 10;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
          Math.random() * 255
        }, ${this.opacity})`;
        this.rotation = Math.random() * 360;
        this.shapeType = Math.floor(Math.random() * 3); // 0: circle, 1: square, 2: triangle
      }
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        if (this.shapeType === 0) {
          ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        } else if (this.shapeType === 1) {
          ctx.rect(-this.size / 2, -this.size / 2, this.size, this.size);
        } else {
          ctx.moveTo(0, -this.size);
          ctx.lineTo(this.size, this.size);
          ctx.lineTo(-this.size, this.size);
          ctx.closePath();
        }
        ctx.fill();
        ctx.restore();
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += 1;
        if (this.x + this.size > canvas.width || this.x - this.size < 0)
          this.speedX = -this.speedX;
        if (this.y + this.size > canvas.height || this.y - this.size < 0)
          this.speedY = -this.speedY;
        this.draw();
      }
    }

    function initShapes() {
      shapesArray = [];
      for (let i = 0; i < 50; i++) {
        shapesArray.push(new Shape());
      }
    }

    function animateShapes() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      shapesArray.forEach((shape) => shape.update());
      requestAnimationFrame(animateShapes);
    }

    initShapes();
    animateShapes();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <>
      <ToastContainer />
      <section className="relative bg-gray-100 py-12 h-fit px-6 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        <div className="absolute inset-0 opacity-30 z-0 bg-gradient-to-r from-gray-100 via-green-500 to-yellow-500"></div>
        <div className="bg-black bg-opacity-40 absolute z-10 inset-0"></div>
        <div className="absolute inset-0 pointer-events-none">
          <canvas id="particle-canvas" className="w-full h-full"></canvas>
        </div>

        <div
          className="relative z-10 w-full md:w-3/5 text-left"
          data-aos="fade-up"
        >
          <h3 className="text-white font-bold uppercase mb-8">
            Your Trusted Digital Transformation Partner
          </h3>
          <h1 className="text-4xl font-bold mt-2 text-white font-title">
            Building Digital Solutions that Perform and Scale
          </h1>
          <p className="mt-4 text-gray-200 text-lg">
            At SysGenixRise, we go beyond implementing IT solutions we create
            technology ecosystems that drive business innovation. Whether you
            need AI-powered solutions, Salesforce integration, IT outsourcing,
            or cloud services, we provide tailored strategies to help your
            business thrive.
          </p>
          {/* <div className="grid md:grid-cols-3 grid-cols-2 text-white gap-6 mt-6">
          <div className="flex items-center gap-2 " data-aos="fade-up">
            <span className="text-blue-500 text-2xl">📘</span> Intelligent
          </div>
          <div className="flex items-center gap-2" data-aos="fade-up">
            <span className="text-green-500 text-2xl">📗</span> Interactive
          </div>
          <div className="flex items-center gap-2" data-aos="fade-up">
            <span className="text-yellow-500 text-2xl">🎓</span> Immersive
          </div>
        </div> */}
          <button
            className="mt-6 bg-white  hover:text-black font-semibold  py-3 px-6 rounded-lg hover:bg-secondaryColor transition duration-500"
            data-aos="zoom-in"
            onClick={handleOpen}
          >
            Request a Demo
          </button>
        </div>

        <div
          className="relative z-10 md:w-1/3 w-full bg-white p-6 rounded-xl shadow-lg mt-10 md:mt-0"
          data-aos="fade-down"
        >
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
                  // "http://localhost:6008/v1/sysgenix/send-contact-email",
                  "https://allmails.whydev.in/v1/sysgenix/send-contact-email",

                  values
                );

                console.log("Response Status:", response.status);
                if (response.status === 200 || response.status === 201) {
                  console.log("Backend Message:", response.data.message);
                  toast.success("Form submitted successfully!", {
                    autoClose: 2000,
                  });
                  resetForm();
                } else {
                  toast.error("Form submission failed! Please try again.");
                }
              } catch (error) {
                if (error.response) {
                  console.log("Backend Error:", error.response.data.message);
                  toast.error(
                    error.response.data.message || "Form submission failed!"
                  );
                } else if (error.request) {
                  console.log("No Response from Backend");
                  toast.error(
                    "No response from the server. Please check your network."
                  );
                } else {
                  console.log("Submission Error:", error.message);
                  toast.error(
                    "Error in submitting the form. Please try again."
                  );
                }
              } finally {
                setSubmitting(false);
                console.log("Form Submission Completed");
              }
            }}
          >
            {({ isSubmitting, errors, touched, values, isValid }) => (
              <Form className="space-y-4">
                <div>
                  <Field
                    name="fullName"
                    type="text"
                    placeholder="Name*"
                    className="mt-1 block text-black font-description font-medium w-full p-2 border border-gray-300 rounded-md focus:ring-primarycolor focus:border-primarycolor placeholder:text-sm"
                  />
                  {errors.fullName && touched.fullName && (
                    <div className="text-red-600 text-left text-sm">
                      {errors.fullName}
                    </div>
                  )}
                </div>

                <div>
                  <Field
                    name="phoneNumber"
                    type="tel"
                    placeholder="Phone Number*"
                    className="mt-1 block font-description text-black font-medium w-full p-2 border border-gray-300 rounded-md focus:ring-primarycolor focus:border-primarycolor placeholder:text-sm"
                    onKeyPress={(e) => {
                      const allowedChars = /^[0-9+]+$/;
                      if (!allowedChars.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                  />
                  {errors.phoneNumber && touched.phoneNumber && (
                    <div className="text-red-600 text-left text-sm">
                      {errors.phoneNumber}
                    </div>
                  )}
                </div>

                <div>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email*"
                    className="mt-1 block w-full text-black p-2 border border-gray-300 font-description font-medium rounded-md focus:ring-primarycolor focus:border-primarycolor placeholder:text-sm"
                  />
                  {errors.email && touched.email && (
                    <div className="text-red-600 text-left text-sm">
                      {errors.email}
                    </div>
                  )}
                </div>

                <div>
                  <Field
                    name="message"
                    as="textarea"
                    placeholder="Message*"
                    className="mt-1 block w-full p-2 border text-black border-gray-300 font-description font-medium rounded-md focus:ring-primarycolor focus:border-primarycolor placeholder:text-sm resize-none h-16"
                  />
                  {errors.message && touched.message && (
                    <div className="text-red-600 text-left text-sm">
                      {errors.message}
                    </div>
                  )}
                </div>

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

                {showServiceDropdown && (
                  <div className="block font-medium font-description mb-1">
                    <Field
                      as="select"
                      name="selectedService"
                      className="w-full py-3 mb-2 text-gray-800 border font-description border-gray-300 focus:outline-none focus:ring-1 focus:border-none focus:ring-primarycolor rounded-md"
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
                    </Field>
                    {errors.selectedService && touched.selectedService && (
                      <div className="text-red-600 text-sm">
                        {errors.selectedService}
                      </div>
                    )}
                  </div>
                )}

                <div className="mt-4">
                  <button
                    type="submit"
                    className="py-3 px-4 bg-primarycolor w-full text-white font-medium rounded-md hover:bg-opacity-90"
                    disabled={isSubmitting || !isValid}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <Modal
          title=""
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleClose}
          footer={null}
          width={modalWidth}
        >
          <ContactForm onClose={handleClose} />
        </Modal>
      </section>
    </>
  );
}
