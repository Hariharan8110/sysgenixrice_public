"use client";
import { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

export default function Technologies() {
  const [activeTab, setActiveTab] = useState("E-Commerce");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const categories = [
    "E-Commerce",
    "Front-End",
    "Back-End",
    "Mobile App",
    "Databases",
  ];

  const techByCategory = {
    "E-Commerce": [
      { name: "WordPress", logo: "/images-1.png" },
      { name: "Woo Commerce", logo: "/images-2.png" },
      { name: "Shopify", logo: "/images-3.png" },
      { name: "Magento", logo: "/images-4.png" },
      { name: "Webflow", logo: "/images-5.png" },
      { name: "Prestashop", logo: "/images-6.png" },
      { name: "Squarespace", logo: "/images-7.png" },
      { name: "Joomla", logo: "/images-8.png" },
      { name: "Drupal", logo: "/images-9.png" },
      { name: "BigCommerce", logo: "/images-10.png" },
    ],
    "Front-End": [
      { name: "React", logo: "/reacticon.png" },
      { name: "Angular", logo: "/Angular.png" },
      { name: "Vue.js", logo: "/vue.png" },
    ],
    "Back-End": [
      { name: "Node.js", logo: "/images-4.png" },
      { name: "Django", logo: "/django.png" },
      { name: "Laravel", logo: "/laravel.png" },
    ],
    "Mobile App": [
      { name: "React Native", logo: "/reacticon.png" },
      { name: "Flutter", logo: "/flutter.png" },
      { name: "Swift", logo: "/swift.jpeg" },
    ],
    Databases: [
      { name: "MySQL", logo: "/mysql.png" },
      { name: "PostgreSQL", logo: "/postgresql.png" },
      { name: "MongoDB", logo: "/mongodb.png" },
    ],
  };

  // Validate form fields
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      fullName: "",
      phoneNumber: "",
      email: "",
      message: "",
    };

    // Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Name is required";
      valid = false;
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Name must be at least 3 characters";
      valid = false;
    }

    // Phone validation
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
      valid = false;
    } else if (!/^\d{10,15}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number";
      valid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: "" });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://allmails.whydev.in/v1/sysgenix/send-enquiry-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            phoneNumber: formData.phoneNumber,
            email: formData.email,
            message: formData.message,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Enquiry submitted successfully!");
        setFormData({ fullName: "", phoneNumber: "", email: "", message: "" });
        setShowForm(false);
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (error) {
      toast.error("Failed to submit the form. Try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h2 className="text-center font-semibold mb-4 tracking-widest uppercase">
        --- Our Technologies ---
      </h2>
      <h1 className="text-center text-4xl font-extrabold font-title text-primarycolor mb-12 leading-tight">
        One Stop Solutions Through Technology
      </h1>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="flex flex-col gap-4 w-full lg:w-1/4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 ease-in-out shadow-md 
                ${
                  activeTab === category
                    ? "bg-primarycolor text-white"
                    : "bg-white text-gray-700 hover:bg-yellow-100"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full lg:w-3/4 px-4 sm:px-0">
  {techByCategory[activeTab].map((tech, index) => (
    <div
      key={index}
      className="border rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col items-center shadow-lg transition-transform transform hover:scale-105 overflow-hidden"
    >
      <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] flex flex-col justify-center items-center">
        <Image
          src={tech.logo}
          alt={tech.name}
          width={80}
          height={80}
          className="w-full h-auto object-contain"
        />
      </div>
      <p className="mt-3 sm:mt-4 font-semibold text-center text-sm sm:text-base md:text-lg">
        {tech.name}
      </p>
    </div>
  ))}
</div>
      </div>

      <div className="text-center mt-16">
        <button
          onClick={() => setShowForm(true)}
          className=" text-white py-4 px-10 rounded-full shadow-xl text-lg font-semibold bg-primarycolor "
        >
          Get a Quote Now!
        </button>
      </div>
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-2xl max-w-lg w-full relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Enquiry Form
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                    formErrors.fullName ? "border-red-500" : ""
                  }`}
                />
                {formErrors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block mb-2 font-semibold">Phone Number</label>
                <input
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number*"
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                    formErrors.phoneNumber ? "border-red-500" : ""
                  }`}
                />
                {formErrors.phoneNumber && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.phoneNumber}</p>
                )}
              </div>

              <div>
                <label className="block mb-2 font-semibold">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                    formErrors.email ? "border-red-500" : ""
                  }`}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                )}
              </div>

              <div>
                <label className="block mb-2 font-semibold">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
                    formErrors.message ? "border-red-500" : ""
                  }`}
                  rows="2"
                ></textarea>
                {formErrors.message && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-primarycolor text-black hover:text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition duration-300"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}