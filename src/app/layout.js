"use client";
import { Roboto, Lora } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import Topbar from "./Common/Topbar";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import MobileNavBar from "./Common/MobileNavbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const hiddenPaths = ["/path_1", "/path_2"];

  const shouldHideLayout = hiddenPaths.some((path) => pathname.startsWith(path));

  return (
    <html lang="en" className={`${roboto.variable} ${lora.variable}`}>
      <body>
        {!shouldHideLayout && <Topbar />}
        {!shouldHideLayout && <Navbar />}
        {!shouldHideLayout && <MobileNavBar />}

        {children}

        {!shouldHideLayout && <Footer />}
      </body>
    </html>
  );
}
