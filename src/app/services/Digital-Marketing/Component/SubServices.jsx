"use client";

import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactForm from "@/app/Common/ContactForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal } from "antd";
export default function SubServicesAiData() {
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => setIsModalOpen(false);

  const [modalWidth, setModalWidth] = useState("30%");

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };


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
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);


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
        this.shapeType = Math.floor(Math.random() * 3);
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
      <section className="relative bg-gray-100 py-24 h-fit px-6 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
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
            Digital Marketing
        </h3>
        <h1 className="text-4xl font-bold mt-2 text-white font-title">
            Elevate Your Brand with Our Digital Marketing Experts
        </h1>
        <p className="mt-4 text-gray-200 text-lg">
            At SysgenixRise IT Solutions, our Digital Marketing team empowers businesses to grow online through data-driven strategies, targeted advertising, and compelling content. From SEO and social media to PPC and email campaigns, we help you increase visibility, attract the right audience, and boost conversions across all digital platforms.
        </p>
        <button
            className="mt-6 bg-white hover:text-black font-semibold py-3 px-6 rounded-lg hover:bg-secondaryColor transition duration-500"
            data-aos="zoom-in"
            onClick={handleOpen}
        >
            Request a Demo
        </button>
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
