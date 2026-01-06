import React from "react";
import SubServicesCyber from "./Component/SubServices";
import AboutCyber from "./Component/AboutServices";
import BusinessCyber from "./Component/BusinessBenefit";
import WhyWebCyber from "./Component/WhyWeb";
import IndustriesCyber from "./Component/Industries";
import FormAiData from "../../Component/Form";




const page = () => {
  return (
    <div>
      <SubServicesCyber/>
      <AboutCyber/>
      <BusinessCyber/>
      <WhyWebCyber/>
      <IndustriesCyber/>
      <FormAiData/>
    </div>
  );
};

export default page;
