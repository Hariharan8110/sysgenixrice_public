import React from "react";
import SubServicesProject from "./Component/SubServices";
import AboutProject from "./Component/AboutServices";
import WhyWebProject from "./Component/WhyWeb";
import IndustriesProject from "./Component/Industries";
import FormAiData from "../Component/Form";



const page = () => {
  return (
    <div>
      <SubServicesProject/>
      <AboutProject/>
      <WhyWebProject/>
      <IndustriesProject/>
      <FormAiData/>
    </div>
  );
};

export default page;
