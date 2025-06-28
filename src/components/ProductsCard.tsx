import React from "react";
import Image from "next/image";

interface ProductsCardProps {
  image: string;
  category: string;
  title: string;
  summary: string;
  link: string;
}

const ProductsCard: React.FC<ProductsCardProps> = ({
  image,
  category,
  title,
  summary,
  link,
}) => {
  return (
    <div>
      <div className="overflow-hidden bg-white transition-shadow duration-300 border border-[#12a7b5] rounded-2xl shadow-2xl shadow-black/30">
        <Image
          src={image}
          alt={title}
          width={400}      // Adjust width and height as needed
          height={256}
          className="object-contain w-full h-64"
          priority={false} // Optional: set true if this image is important for LCP
        />
        <div className="p-5 ">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <a
              href={link}
              className="transition-colors duration-200 text-[#12a7b5] hover:text-[#12a7b5]"
            >
              {category}
            </a>
          </p>
          <a
            href={link}
            className="inline-block mb-3 text-2xl font-bold duration-500 text-[#12a7b5] hover:text-[#12a7b5]"
          >
            {title}
          </a>
          <p className="mb-2 text-gray-700">{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;