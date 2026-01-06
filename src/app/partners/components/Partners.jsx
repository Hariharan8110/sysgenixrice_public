import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Why Global Services",
    content: "",
    image: "/whyglobalservices.jpg",
    href: "#",
  },
  {
    title: "Adyog",
    content: "",
    image: "/adyog.jpeg",
    href: "#",
  },
  {
    title: "Thought Frameworks",
    content: "",
    image: "/thought.jpg",
    href: "#",
  },
  {
    title: "Medoasis Pharmacy",
    content: "",
    image: "/medi.jpg",
    href: "#",
  },
  {
    title: "South Dublin Chamber",
    content: "",
    image: "/SDC.jpg",
    href: "#",
  },
  {
    title: "Dun Laoghaire-Rathdown Chamber",
    content: "",
    image: "/dun.jpg",
    href: "#",
  },
  {
    title: "Leontra Technologies",
    content: "",
    image: "/leo.jpg",
    href: "#",
  },
];

export default function Partners() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading Section */}
      <div className="relative flex flex-col items-center justify-center py-10 md:py-16">
        <h1 className="absolute sm:text-[7rem] text-[4rem] font-semibold text-gray-300 opacity-30 leading-none select-none">
          Partners
        </h1>
        <h2 className="relative sm:top-14 top-8 text-3xl font-title text-primarycolor sm:text-4xl font-bold mb-8">
          Our Partners
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            // href={service.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105 cursor-pointer h-full">
              <div className="relative w-full h-48 overflow-hidden group">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="contain"
                  className="object-cover transform transition-transform duration-1000 group-hover:scale-110 p-7"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}