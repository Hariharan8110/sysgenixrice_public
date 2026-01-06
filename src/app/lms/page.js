import React from "react";
import Banner from "../Common/Banner";
import LMS from "./Component/Lms";
import About from "./Component/About";
import SpecialFeature from "./Component/SpecialFeature";
import LmsPortals from "./Component/LmsPortals";
import LmsProcess from "./Component/LmsProcess";


const page = () => {
  return (
    <div>
      <Banner/>
      <LMS/>
      <About/>
      <SpecialFeature/>
      <LmsPortals/>
      <LmsProcess/>
    </div>
  );
};

export default page;
