import React from "react";
import Banner from "../Common/Banner";
import CRM from "./Component/HRMS";
import About from "./Component/About";
import SpecialFeature from "./Component/SpecialFeature";
import CrmPortals from "./Component/LmsPortal";
import CrmProcess from "./Component/LmsProcess";


const page = () => {
  return (
    <div>
      <Banner/>
      <CRM/>
      <About/>
      <SpecialFeature/>
      <CrmPortals/>
      <CrmProcess/>
    </div>
  );
};

export default page;
