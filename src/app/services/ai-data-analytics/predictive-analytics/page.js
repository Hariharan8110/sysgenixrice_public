import React from "react";
import SubServicesPredictive from "./Component/SubServices";
import AboutPredictive from "./Component/AboutServices";
import IndustriesPredictive from "./Component/Industries";
import FormAiData from "../../Component/Form";
import BusinessBenefitsPredictive from "./Component/BusinessBenefit";
import WhyWebPredictive from "./Component/WhyWeb";


const page = () => {
  return (
    <div>
      <SubServicesPredictive/>
      <AboutPredictive/>
      <BusinessBenefitsPredictive/>
      <WhyWebPredictive/>
      <IndustriesPredictive/>
      <FormAiData/>
    </div>
  );
};

export default page;
