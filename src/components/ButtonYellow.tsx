"use client";

import React from "react";

interface ButtonYellowProps {
  link: string;
  text: string;
  newTab?: boolean;
}

const ButtonYellow: React.FC<ButtonYellowProps> = ({ link, text, newTab = false }) => {
  return (
    <div>
      <button>
        <a
          href={link}
          target={newTab ? "_blank" : "_self"}
          rel={newTab ? "noopener noreferrer" : undefined}
          className="block py-3 px-4 font-medium text-center text-white bg-amber-500 active:shadow-none rounded-full shadow md:inline cursor-pointer"
        >
          {text}
        </a>
      </button>
    </div>
  );
};

export default ButtonYellow;