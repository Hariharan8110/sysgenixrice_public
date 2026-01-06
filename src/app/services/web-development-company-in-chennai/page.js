import React from "react";
import SubServices from "./Component/SubServices";
import About from "./Component/AboutServices";
import WhyWeb from "./Component/WhyWeb";
import Industries from "./Component/Industries";

const page = () => {
  return (
    <div>
      <SubServices />
      <About />
      <WhyWeb />
      <Industries />
    </div>
  );
};

export default page;
