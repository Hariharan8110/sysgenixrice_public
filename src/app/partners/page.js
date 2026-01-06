import React from 'react'
import Partners from './components/Partners'
import Banner from '../Common/Banner'
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
     <Partners/>

    </div>
  )
}

export default page
