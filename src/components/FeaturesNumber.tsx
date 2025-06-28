import Image from "next/image";
import React from "react";
import CountUp from "react-countup";

interface FeaturesNumberProps {
  imgUrl: string;
  feature: string;
  number: number;
  ending: string;
  point: number;
}

const FeaturesNumber: React.FC<FeaturesNumberProps> = ({
  imgUrl,
  feature,
  number,
  ending,
  point,
}) => {
  return (
<div className="bg-white border border-[#12a7b5] p-4 rounded-3xl flex flex-col w-48 lg:w-48 text-center shadow-2xl/30 shadow-black/30 items-center justify-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-black/50">
  <Image src={imgUrl} alt="feature" className="w-24 p-4" width={800} height={600}/>
  <h4>
    <CountUp
      end={number}
      duration={10}
      suffix={ending}
      enableScrollSpy={true}
      decimals={point}
      className="text-[#12a7b5] font-bold text-4xl"
    />
  </h4>
  <p className=" text-cyan-800">{feature}</p>
</div>
  );
};

export default FeaturesNumber;