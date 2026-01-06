"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Define route mappings for breadcrumbs
const routes = [
  { path: "/", breadcrumb: "Home" },
  { path: "/about-us", breadcrumb: "About Us" },
  { path: "/Services", breadcrumb: "Services" },
  { path: "/products", breadcrumb: "products" },
  { path: "/contact-us", breadcrumb: "Contact Us" },
];

// Utility function to create breadcrumbs
const getBreadcrumbs = (pathname) => {
  const pathParts = pathname.split("/").filter(Boolean);
  const breadcrumbs = [{ pathname: "/", breadcrumb: "Home" }]; 

  pathParts.forEach((part, index) => {
    const url = `/${pathParts.slice(0, index + 1).join("/")}`;
    const route = routes.find((route) => route.path === url);
    breadcrumbs.push({ pathname: url, breadcrumb: route?.breadcrumb || part });
  });

  return breadcrumbs;
};

const Banner = () => {
  const pathname = usePathname();
  const breadcrumbs = getBreadcrumbs(pathname);

  const currentBreadcrumb = breadcrumbs[breadcrumbs.length - 1]?.breadcrumb;

  return (
    <div
      id="banner-section"
      className="relative flex items-center font-title justify-center py-6 md:py-8 lg:py-9 xl:-mt-6 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center">
        <Image
          src="/banner.jpg" 
          alt="Banner Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full  "></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full p-4 sm:p-6 md:p-8">
        <h1 className="text-xl md:text-3xl capitalize lg:text-5xl font-title font-bold mb-4 text-black text-center">
          {currentBreadcrumb || "Default Title"}
        </h1>

        {/* Breadcrumb Navigation */}
        <nav className="breadcrumbs font-description capitalize font-medium text-sm text-center text-gray-900">
          <hr className="w-full mb-4" />
          {breadcrumbs.map(({ pathname, breadcrumb }, index) => (
            <span key={pathname} className="inline-block">
              <Link
                href={pathname}
                className=" hover:text-primarycolor font-description font-subtitle text-gray-700 transition duration-300 ease-in-out"
              >
                {breadcrumb}
              </Link>
              {index < breadcrumbs.length - 1 && (
                <span className="px-2 text-gray-700 font-description font-subtitle">
                  &gt;
                </span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Banner;
