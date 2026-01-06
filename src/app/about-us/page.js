import React from 'react'
import Banner from '../Common/Banner';
import WhoWeAre from './component/WhoWeAre';
import Counter from './component/Counter';
import WhyChooseSysGenixRise from './component/WhyChoose';
import OurVissionMission from './component/OurVissionMission';
import Certificate from './component/Certificate';
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

const page = () => {
  return (
    <div>
      <Banner/>
      <WhoWeAre/>
      <Counter/>
      <WhyChooseSysGenixRise/>

      <OurVissionMission/>
      <Certificate/>
      {/* <OurTeam/>
      <Testimonials/> */}

    </div>
  )
}

export default page
