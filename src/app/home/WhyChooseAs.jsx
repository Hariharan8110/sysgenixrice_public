"use client";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const changingHeadings = [
  "in On-Time Project Delivery",
  "in Exceptional Client Satisfaction Rate",
  "in Innovation & Technology",
  "in Sustainability & Growth",
];

const WhyChooseUs = () => {
  const [currentHeading, setCurrentHeading] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeading((prev) => (prev + 1) % changingHeadings.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const { ref: counterRef, inView: counterInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      className="relative"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <Image
        src={"/ss.jpg"}
        alt="Counter Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-10"
      />

      <div className="pt-12 pb-12 px-5 md:px-20 bg-black bg-opacity-70 relative">
        <div className="lg:flex lg:flex-col">
          {" "}
          {/* Changed to column layout */}
          {/* Left div: Now at the bottom */}
          <div className="flex flex-col gap-3 text-left mt- lg:w-full">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-secondaryColor">
              <span className="inline-block  mb-3 font-title ">
                Our Achievements
              </span>
              &nbsp;{changingHeadings[currentHeading]}
            </h2>
            <p className="text-gray-200 font-medium text-xl  text-center leading-9  font-description">
              Our team has successfully completed multiple projects, delivering
              high-quality Services that exceed our clients' expectations. We
              continue to set benchmarks and break records, pushing the
              boundaries of what's possible.
            </p>
          </div>
          {/* Right div: Counter Cards (Now at the top) */}
          <div
            ref={counterRef}
            className="lg:w-full mt-10 grid grid-cols-1 lg:grid-cols-4 justify-start gap-6 text-center w-full cursor-pointer"
          >
            {[
              { end: 100, suffix: "%", label: "Client Satisfaction" },
              { end: 60, suffix: "+", label: "Projects Completed" },
              { end: 100, suffix: "%", label: "Success Rate" },
              { end: 60, suffix: "+", label: "Happy Clients" },
            ].map((card, index) => (
              <div
                key={index}
                className="rounded-lg p-6 shadow-md bg-gradient-to-r from-blue-400 via-blue-200 to-primarycolor"
              >
                <p className="md:text-5xl text-2xl font-heading font-bold text-white">
                  {counterInView && (
                    <CountUp
                      start={card.end / 2}
                      end={card.end}
                      duration={4.5}
                      suffix={card.suffix}
                    />
                  )}
                </p>
                <p className="text-white font-base text-[18px] font-heading">
                  {card.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
