import React from "react";
import SubServicesScrum from "./Component/SubServices";
import AboutScrum from "./Component/AboutServices";
import BusinessScrum from "./Component/BusinessBenefit";
import WhyWebScrum from "./Component/WhyWeb";
import IndustriesScrum from "./Component/Industries";
import FormAiData from "../../Component/Form";




const page = () => {
  return (
    <div>
      <SubServicesScrum/>
      <AboutScrum/>
      <BusinessScrum/>
      <WhyWebScrum/>
      <IndustriesScrum/>
      <FormAiData/>
    </div>
  );
};

export default page;
