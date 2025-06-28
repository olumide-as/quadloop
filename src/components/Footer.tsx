import React from "react";
import Image from "next/image";

interface NavItem {
  href: string;
  name: string;
}

// Image paths from public/assets
const footerNavs: NavItem[] = [
  { href: "#", name: "About" },
  { href: "#", name: "Solutions" },
  { href: "#", name: "Impacts" },
  { href: "#", name: "News" },
  { href: "#", name: "Partners" },
  { href: "#", name: "Contact Us" },
];

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <div>
      <footer className="flex flex-col p-20 text-center items-center space-y-8 text-gray-800 px-4 max-w-screen-xl mx-auto lg:flex-row lg:justify-between">
        <div className="basis-4/12 flex flex-col items-center lg:items-start">
          <Image
            src="/assets/quadloop.svg"
            alt="Quadloop"
            width={192} // w-48 equals 192px
            height={48}
            className="w-48"
          />
          <p>Leveraging waste, creating value.</p>
          &copy; {currentYear} All rights reserved.
        </div>

        <div className="basis-6/12">
          <ul className="items-center justify-center space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
            {footerNavs.map((item, idx) => (
              <li
                key={idx}
                className="text-gray-800 hover:font-bold hover:border-b-2"
              >
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="basis-2/12 flex space-x-4 justify-center items-center">
          <a
            href="https://www.facebook.com/quadloopcreations/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/fb.svg"
              alt="Facebook"
              width={16} // w-4 equals 16px
              height={16}
              className="w-4"
            />
          </a>
          <a
            href="https://www.instagram.com/quadloopcreate/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/insta.svg"
              alt="Instagram"
              width={24} // w-6 equals 24px
              height={24}
              className="w-6"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/quadloop-creations/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/linkedin.svg"
              alt="LinkedIn"
              width={24} // w-6 equals 24px
              height={24}
              className="w-6"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;