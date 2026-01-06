import React from "react";
import SubServicesSaleForce from "./Component/SubServices";
import AboutAiDataSaleForce from "./Component/AboutServices";
import WhyWebSaleForce from "./Component/WhyWeb";
import IndustriesSaleForce from "./Component/Industries";
import FormAiData from "../Component/Form";

const page = () => {
  return (
    <div>
      <SubServicesSaleForce/>
      <AboutAiDataSaleForce/>
      <WhyWebSaleForce/>
      <IndustriesSaleForce/>
      <FormAiData/>
    </div>
  );
};

export default page;
