import React from 'react';

const BusinessHr = () => {
  const benefits = [
    "Strategic alignment of leadership talent with company vision",
    "Enhanced organizational performance through effective leadership",
    "Access to a global network of executive-level professionals"
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left side - Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-8">
          Business Benefits:
          </h2>
          <ul className="space-y-4 sm:space-y-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="bg-green-500 rounded-full p-1 mr-3 sm:mr-4 mt-1 flex-shrink-0">
                  <svg 
                    className="h-4 w-4 sm:h-5 sm:w-5 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </span>
                <span className="text-base sm:text-lg md:text-xl text-gray-700">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Right side - GIF Image */}
        <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0">
          <img 
            src="/Artificial.gif" 
            alt="Business benefits animation" 
            className="w-full max-w-md lg:max-w-full h-auto "
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessHr;