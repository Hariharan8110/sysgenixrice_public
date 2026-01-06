import Image from "next/image";
import Banner from "./home/Banner";
import WhoWeAre from "./home/WhoWeAre";
import OurServices from "./home/OurServices";
import Transfer from "./home/Transfer";
import WhyChooseUs from "./home/WhyChooseAs";
import Technologies from "./home/Technologies";
import OurClients from "./home/OurClients";
import Testimonials from "./home/Testimonial";
import Partners from "./partners/components/Partners";
export const metadata = {
  title: "Software Development Company ",
  description:
    "We are an innovative software development company, focused on web and mobile application development and other IT services to meet the needs of our clients.",
  keywords:
    "software development company, mobile application development",
  icons: {
    icon: "/Sysgenix LOGO-06.png",
  },
  alternates: {
    canonical: "/",
  },
 
};
export default function Home() {
  return (
    <div>
      <Banner />
      <WhoWeAre />
      <OurServices />
      <Transfer />
      <WhyChooseUs />
      <Partners/>
      <Technologies />
      {/* <OurClients /> */}
      {/* <Testimonials /> */}
    </div>
  );
}
