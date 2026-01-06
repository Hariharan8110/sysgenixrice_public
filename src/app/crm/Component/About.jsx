"use client";

import Image from "next/image";
import { IoMdArrowForward, IoMdCall } from "react-icons/io";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  return (
    <section className="relative py-16 px-5 sm:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative" data-aos="fade-right">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/ss.jpg"
                alt="Innovation"
                width={600}
                height={450}
                className="w-full h-auto object-cover aspect-video"
                priority
              />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 sm:w-48 sm:h-48 border-4 border-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/ss.jpg"
                  alt="Technology"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-5 right-10 bg-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
              <div className="text-3xl font-bold text-blue-600">20+</div>
              <div className="text-sm font-medium text-gray-600">
                Years
                <br />
                Experience
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-6" data-aos="fade-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
              <span className="text-blue-600 font-medium text-sm">
                About Sysgenixrise
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight text-gray-900">
              Transforming Customer Relationships with Smart CRM Solutions
            </h2>

            <blockquote className="text-lg italic text-gray-600 pl-6 border-l-4 border-blue-500">
              "At Sysgenixrise, we empower businesses with intelligent CRM //
              solutions to enhance customer engagement and drive growth."
            </blockquote>

            <p className="text-gray-700 leading-relaxed">
              Sysgenixrise specializes in state-of-the-art CRM systems designed
              to streamline customer interactions, automate workflows, and
              improve sales processes. Our tailored solutions ensure seamless
              collaboration, deeper insights, and enhanced customer
              satisfaction.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => router.push("/about-us")}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Learn More
                <IoMdArrowForward className="text-lg" />
              </button>

              <a
                href="tel:+353899735579"
                className="flex items-center gap-3 px-6 py-3 bg-white text-blue-600 border border-blue-200 rounded-lg font-medium hover:bg-blue-50 transition-all"
              >
                <div className="bg-blue-100 p-2 rounded-full">
                  <IoMdCall className="text-blue-600 text-xl" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Call us</div>
                  <div className="font-semibold">+353 89 973 5579</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
