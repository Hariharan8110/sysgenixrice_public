"use client";

import { useState, useEffect, useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";

export default function CRM() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const canvasRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    class Particle {
      constructor() {
        this.alpha = Math.random() * 0.6 + 0.2; 
        this.reset(true);
        this.velocity = {
          x: (Math.random() - 0.5) * 0.5,
          y: Math.random() * 2 + 1,
        };
      }

      reset(initial = false) {
        this.x = Math.random() * canvas.width;
        this.y = initial ? Math.random() * canvas.height : -20;
        this.size = Math.random() * 5 + 1;
        this.color = `hsla(${Math.random() * 60 + 180}, 80%, 65%, ${
          this.alpha
        })`;
        this.baseSize = this.size;
      }

      update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.size = this.baseSize * (0.9 + Math.sin(Date.now() * 0.001) * 0.1);
        if (this.y > canvas.height + 20) this.reset();
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;

        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size * 2
        );
        gradient.addColorStop(
          0,
          `hsla(${Math.random() * 60 + 180}, 80%, 65%, ${this.alpha || 0.5})`
        );
        gradient.addColorStop(1, `hsla(180, 80%, 65%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    const particles = Array.from({ length: 80 }, () => new Particle());

    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "rgba(240, 248, 255, 0.2)");
      gradient.addColorStop(1, "rgba(230, 240, 255, 0.5)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      fullName: "",
      phoneNumber: "",
      email: "",
      message: "",
    };

    if (!form.fullName.trim()) {
      newErrors.fullName = "Name is required";
      isValid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (form.phoneNumber && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(form.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number";
      isValid = false;
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://allmails.whydev.in/v1/sysgenix/send-service-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: form.fullName,
          phoneNumber: form.phoneNumber,
          email: form.email,
          message: form.message,
          service: "CRM Consultation",
          subject: "New CRM Consultation Request",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form');
      }

      toast.success("Successfully submitted! We'll get back to you soon.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setForm({
        fullName: "",
        phoneNumber: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(error.message || 'Failed to submit form. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50/90 to-indigo-50/90 overflow-hidden">
      <ToastContainer />
      
      <div className="absolute inset-0 z-0 opacity-10">
        <DotLottieReact
          src="https://lottie.host/05dc297c-88cb-405f-8dc0-12e8e83cae7c/VbhFQ1KeQ0.lottie"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full"></canvas>
      </div>

      <div className="absolute top-0 right-0 w-1/3 h-full z-0 opacity-20">
        <DotLottieReact
          src="/assets/animations/abstract-shapes.lottie"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-blue-100">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-600 font-medium text-sm">
              Enterprise CRM
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Optimize
            </span>{" "}
            <br />
            Customer Engagement Boost Sales
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            Our CRM system empowers businesses to manage customer interactions,
            track leads, and drive growth. With automated workflows, sales
            tracking, and in-depth analytics, you can enhance customer
            relationships and streamline operations.
          </p>

          <div className="flex gap-6 mt-8">
            <div className="flex items-center gap-2">🔵 Lead Management</div>
            <div className="flex items-center gap-2">
              🟢 Sales Tracking
            </div>{" "}
            <div className="flex items-center gap-2">🟡 Customer Support</div>{" "}
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-medium transition-all transform hover:scale-[1.02] shadow-md hover:shadow-lg flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              Watch Demo
            </button>
            <button onClick={() => router.push("/about-us")} className="px-8 py-3.5 border-2 border-blue-600 text-blue-600 hover:bg-blue-50/50 rounded-lg font-medium transition-all flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                  clipRule="evenodd"
                />
              </svg>
              Learn More
            </button>
          </div>
        </div>

        <div
          className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl"
          style={{
            transform: isHovering !== null ? "translateY(-5px)" : "none",
          }}
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Schedule a Consultation
            </h3>
            <p className="text-gray-500 mt-2">
              Let's discuss how we can transform your educational approach
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Full Name*
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 border ${errors.fullName ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/90`}
                  onChange={handleChange}
                  value={form.fullName}
                />
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Email*
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/90`}
                  onChange={handleChange}
                  value={form.email}
                />
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Phone</label>
              <div className="relative">
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="+1 (555) 123-4567"
                  className={`w-full px-4 py-3 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/90`}
                  onChange={handleChange}
                  value={form.phoneNumber}
                />
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
              </div>
              {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Your Needs*
              </label>
              <textarea
                name="message"
                placeholder="Tell us about your learning objectives..."
                rows="4"
                className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/90`}
                onChange={handleChange}
                value={form.message}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all transform hover:scale-[1.01] shadow-md hover:shadow-lg flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Submit Request
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}