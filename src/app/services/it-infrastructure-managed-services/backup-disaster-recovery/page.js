import React from "react";
import SubServicesBackUp from "./Component/SubServices";
import AboutBackUp from "./Component/AboutServices";
import WhyWebBackUp from "./Component/WhyWeb";
import IndustriesBackUp from "./Component/Industries";
import FormAiData from "../../Component/Form";
import BusinessBackUp from "./Component/BusinessBenefit";



const page = () => {
  return (
    <div>
      <SubServicesBackUp/>
      <AboutBackUp/>
      <BusinessBackUp/>
      <WhyWebBackUp/>
      <IndustriesBackUp/>
      <FormAiData/>
    </div>
  );
};

export default page;
