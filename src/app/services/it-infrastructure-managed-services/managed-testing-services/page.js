import React from "react";
import SubServicesManaged from "./Component/SubServices";
import AboutManaged from "./Component/AboutServices";
import BusinessManaged from "./Component/BusinessBenefit";
import WhyWebManaged from "./Component/WhyWeb";
import IndustriesManaged from "./Component/Industries";
import FormAiData from "../../Component/Form";





const page = () => {
  return (
    <div>
      <SubServicesManaged/>
      <AboutManaged/>
      <BusinessManaged/>
      <WhyWebManaged/>
      <IndustriesManaged/>
      <FormAiData/>
    </div>
  );
};

export default page;
