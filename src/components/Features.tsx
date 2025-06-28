import Image from "next/image";
import React from "react";

interface FeaturesProps {
  imgUrl: string;
  feature: string;
}

const Features: React.FC<FeaturesProps> = ({ imgUrl, feature }) => {
  return (
    <div className="bg-white rounded-3xl flex items-center flex-col p-4 shadow-xl">
      <Image src={imgUrl} alt="feature" className="w-24 lg:w-32" width={800} height={600} />
      <p className="text-gray-800 text-xl font-bold">{feature}</p>
    </div>
  );
};

export default Features;