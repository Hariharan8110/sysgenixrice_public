import React from "react";
import SubServicesTechnology from "./Component/SubServices";
import AboutTechnology from "./Component/AboutServices";
import BusinessTechnology from "./Component/BusinessBenefit";
import WhyWebTechnology from "./Component/WhyWeb";
import IndustriesTechnology from "./Component/Industries";
import FormAiData from "../../Component/Form";




const page = () => {
  return (
    <div>
      <SubServicesTechnology/>
      <AboutTechnology/>
      <BusinessTechnology/>
      <WhyWebTechnology/>
      <IndustriesTechnology/>
      <FormAiData/>
    </div>
  );
};

export default page;
