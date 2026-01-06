import FormAiData from "../../Component/Form";
import AboutWeb from "./Component/AboutServices";
import BusinessWeb from "./Component/BusinessBenefit";
import IndustriesWeb from "./Component/Industries";
import SubServicesWeb from "./Component/SubServices";
import WhyWebWeb from "./Component/WhyWeb";




const page = () => {
  return (
    <div>
      <SubServicesWeb/>
      <AboutWeb/>
      <BusinessWeb/>
      <WhyWebWeb/>
      <IndustriesWeb/>
      <FormAiData/>
    </div>
  );
};

export default page;
