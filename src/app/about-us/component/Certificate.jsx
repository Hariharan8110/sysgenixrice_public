import React from "react";
import Image from "next/image";

const Certificate = () => {
  return (
    <div
      className="grid md:grid-cols-[2fr_1.5fr] bg-gray-100 gap-0 sm:gap-5 md:gap-5 lg:gap-0 items-center object-cover   justify-end px-5 py-6  md:px-8 md:py-8 lg:px-16 lg:py-10"
      style={{ backgroundImage: "url(/testbg.webp)" }}
    >
      {/* Left Column */}
      <div className="space-y- md:space-y- md:pl-2 ">
  <h3
    className="text-primarycolor text-sm uppercase tracking-wider sm:mt-   font-title font-semibold"
    data-aos="flip-up"
  >
    --- Introducing Sysgenixrise ---
  </h3>
  <h1 className="text-3xl md:text-4xl font-bold leading-10 lg:leading-loose font-title text-gray-900 lg:w-full">
    Excellence Redefined with <span className="text-black">ISO Certification!</span>
  </h1>

  <p className="text-black font-medium text-justify font-description lg:w-full">
    Sysgenixrise's ISO certification reflects our commitment to delivering high-quality, 
    reliable IT solutions. We adhere to global standards, ensuring excellence in every project.
  </p>
  <p className="text-black font-medium text-justify font-description lg:w-full">
    Partner with us for industry-leading services backed by best practices and innovation. 
    Let's drive your business success together!
  </p>
</div>


      {/* Right Column */}
      <div className="relative  mt-8 md:mt-0 flex justify-center items-center ">
        {/* Background Image */}
        <Image
          src={"/ss.jpg"}
          alt="Certificate"
          width={400} // Set the width (adjust as needed)
          height={550} // Set the height (adjust as needed)
          className="rounded-lg lg:-mr-20"
        />
      </div>
    </div>
  );
};

export default Certificate;
