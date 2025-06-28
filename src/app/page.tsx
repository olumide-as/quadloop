"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import dynamic from "next/dynamic";
import ButtonYellow from "@/components/ButtonYellow";
import Features from "@/components/Features";
import FeaturesNumber from "@/components/FeaturesNumber";
import ProductsCard from "@/components/ProductsCard";
import ContactSection from "@/components/ContactSection";



const Slider = dynamic(() => import("react-slick"), { ssr: false });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const aboutImages = [
  "/assets/about1.jpg",
  "/assets/about2.jpg",
  "/assets/about3.jpg",
  "/assets/about4.jpg",
  "/assets/about5.jpg",
  "/assets/about6.jpg",
  "/assets/about7.jpg",
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

const partners = [
  { name: "hinckley", img: "/assets/hinckley.svg" },
  { name: "fate", img: "/assets/fate.svg" },
  { name: "qualcomm", img: "/assets/qualcomm.jpg" },
  { name: "Footprint", img: "/assets/footprint.jpeg" },
  { name: "Mass", img: "/assets/mass.jpeg" },
  { name: "nci", img: "/assets/nci.svg" },
  { name: "ifair", img: "/assets/ifair.jpg" },
  { name: "Startup", img: "/assets/startup.png" },
  { name: "nextexplo", img: "/assets/nextexplo.jpg" },
  { name: "wef", img: "/assets/wef.jpg" },
  { name: "cv", img: "/assets/cv.jpg" },
];

  return (
    <div>
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-no-repeat bg-cover bg-top space-y-40 pt-60 pb-10 lg:py-60"
        style={{ backgroundImage: `url(/assets/Home-bg.png)` }}
      >
        <div className="flex flex-col lg:flex-row justify-center mx-4 lg:mx-20 xl:mx-48">
          <div className="lg:basis-10/12">
            <h1 className="text-3xl md:text-5xl text-gray-800">
              Pioneering{" "}
              <span className="text-[#12a7b5] font-bold">innovative</span> ways
              to utilize Africa&apos;s ever-growing{" "}
              <span className="text-[#12a7b5] font-bold">Electronic waste</span>{" "}
              stream.
            </h1>
          </div>
          <div>
            <Image
              src="/assets/lampsolar.png"
              alt="Solar Lamp"
              width={500}
              height={500}
              className="lg:-ml-24 w-[1200px]"
            />
          </div>
        </div>

        <div className="mx-4 lg:mx-24 lg:pt-96 space-y-12 lg:space-y-24">
          <div className="text-center lg:px-60">
            <h2 className="text-white font-bold text-3xl">
              Unlocking true socio economic environmental potential of e-waste
              and second life battery technology.
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Features
              imgUrl="/assets/coins-gradient.gif"
              feature="Affordable"
            />
            <Features
              imgUrl="/assets/recycling-gradient.gif"
              feature="Sustainable"
            />
            <Features imgUrl="/assets/solar-panel.gif" feature="Clean Energy" />
          </div>
          <div className="flex justify-center">
            <a href="#about">
              <Image
                src="/assets/Scroll Arrow.svg"
                alt="arrow down"
                width={120}
                height={40}
              />
            </a>
          </div>
        </div>
      </motion.section>

{/* About */}
<section
  id="about"
  className="bg-no-repeat bg-cover bg-center space-y-12 py-24 px-4"
  style={{ backgroundImage: `url(/assets/about-bg.png)` }}
>
  <div className="max-w-screen-xl mx-auto px-4 lg:px-20 xl:px-48">
    <h2 className="text-[#12a7b5] font-bold text-4xl">About Us</h2>
    <div className="gap-8 flex flex-col lg:flex-row">
      <div>
        <p>
          Quadloop is a social enterprise company that aims to develop
          affordable solar lanterns and home systems produced with a lower
          environmental impact. We are determined to be at the forefront of
          the technological renovation that will lead to a responsible,
          carbon – neutral product era.
          <br /><br />
          We relieve the environmental pressures of exploitation of natural
          resources for both battery production and the entire product
          design and development by applying a 0 – mining policy by sourcing
          70% of our materials entirely from Electronic waste.
          <br /><br />
          Our entire operation is based around principles of circular
          economy which close the loop on battery production. We commit on
          employing all of our technical capabilities to innovate on
          production methods that reduce waste production and properly
          dispose of all materials employed.
        </p>
      </div>
      <div className="slider-container lg:w-1/2">
        <Slider {...settings}>
          {aboutImages.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={`About ${idx + 1}`}
              width={800}
              height={400}
              className="object-cover object-top h-96 rounded-xl w-full"
            />
          ))}
        </Slider>
      </div>
    </div>

    <h3 className="text-[#12a7b5] font-bold text-3xl mt-12">Our Vision</h3>
    <div className="gap-8 flex flex-col lg:flex-row p-4">
      <div className="lg:w-1/2">
        <p>
          Contributing to fight climate change while improving energy access
          across the continent, we are a passionate mission - driven
          organization eagerly looking for innovative ways to Reduce Recycle
          and Reuse E-waste generated in Africa.
        </p>
      </div>
      <div className="lg:w-3/4 flex flex-wrap gap-4 justify-center items-center">
        <FeaturesNumber
          imgUrl="/assets/Reuse.svg"
          feature="Reuse rate of batteries"
          number={100}
          ending="%"
          point={0}
        />
        <FeaturesNumber
          imgUrl="/assets/EnergyCost.svg"
          feature="Cost of Energy"
          number={50}
          ending="%"
          point={0}
        />
        <FeaturesNumber
          imgUrl="/assets/carbon.svg"
          feature="Carbon Neutral Energy Storage"
          number={0}
          ending="% CO"
          point={0}
        />
      </div>
    </div>
  </div>
</section>

      {/* Challenges */}
      <section
        id="challenges"
        className="bg-no-repeat bg-cover bg-center space-y-12 py-24 px-4 lg:px-60"
        style={{ backgroundImage: `url(/assets/challenges-bg.png)` }}
      >
        <h2 className="text-white font-bold text-4xl">
          The four global challenges <br /> we are tackling
        </h2>
        <div className="flex justify-center">
          <Image src="/assets/SDGs.png" alt="SDGs" width={1000} height={900} />
        </div>
        <div className="flex justify-center">
          <a href="#about">
            <Image
              src="/assets/Scroll Arrow.svg"
              alt="arrow down"
              width={120}
              height={120}
            />
          </a>
        </div>
      </section>

{/* Solutions */}
<section
  id="solutions"
  className="bg-no-repeat bg-cover bg-center space-y-12 py-24 px-4"
  style={{ backgroundImage: `url(/assets/solutions-bg.png)` }}
>
  <div className="max-w-screen-xl mx-auto px-4 lg:px-20 xl:px-48 space-y-12">
    <h2 className="text-[#12a7b5] font-bold text-4xl">Our Solutions</h2>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <ProductsCard
        image="/assets/p1.png"
        category="Idunnu Exhibition"
        title="Idunnu Solar Lamp"
        summary=""
        link=""
      />
      <ProductsCard
        image="/assets/Idunnu Pro.png"
        category="Idunnu Exhibition"
        title="Idunnu Pro"
        summary=""
        link=""
      />
      <ProductsCard
        image="/assets/Power Generator.png"
        category="Idunnu Exhibition"
        title="Power Generator"
        summary=""
        link=""
      />
    </div>
  </div>
</section>

{/* Impact and News */}
<section
  className="bg-no-repeat bg-cover bg-center py-24 px-4"
  style={{ backgroundImage: `url(/assets/Impact-bg.svg)` }}
>
  <div className="max-w-screen-xl mx-auto px-4 lg:px-20 xl:px-48 space-y-24">
    
    {/* Impact */}
    <div id="impacts" className="space-y-12">
      <h2 className="text-[#12a7b5] font-bold text-4xl">Our Impact</h2>
      <div className="gap-8 flex flex-col lg:flex-row p-4">
        <div className="lg:w-1/2">
          <p>
            For every Quadloop lantern produced, 2.5kg of e-waste is prevented
            from going into the landfill. Other metrics: for any lantern used,
            0.5kg of CO is prevented from the use of kerosene lanterns and
            other dirty sources of light.
          </p>
        </div>
        <div className="lg:w-1/2 flex flex-wrap gap-4 justify-center items-center">
          <FeaturesNumber
            imgUrl="/assets/Co2.svg"
            feature="Trapped"
            number={0.678}
            ending="kg"
            point={1}
          />
          <FeaturesNumber
            imgUrl="/assets/Cost.svg"
            feature="Utilized E-waste"
            number={362.5}
            ending="kg"
            point={1}
          />
          <FeaturesNumber
            imgUrl="/assets/Homes.svg"
            feature="Homes with power"
            number={100}
            ending="+"
            point={0}
          />
        </div>
      </div>
    </div>

    {/* News & Events */}
    <div id="news" className="space-y-8">
      <h2 className="text-[#12a7b5] font-bold text-4xl">News and Events</h2>
      <iframe
        title="instagram"
        src="https://371881b455594e5f9a575a2a8e27d4b6.elf.site"
        width="100%"
        height="460"
        frameBorder="0"
      />
      <div className="flex justify-center items-center mx-auto ">
        <ButtonYellow
          link="https://www.instagram.com/quadloopcreate/"
          text="View All"
          newTab
        />
      </div>
    </div>

    {/* Affiliations */}
    <div id="partners" className="space-y-8">
      <h2 className="text-[#12a7b5] font-bold text-4xl">Affiliations</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {partners.map((partner, idx) => (
          <Image
            key={idx}
            src={partner.img}
            alt={partner.name}
            width={100}
            height={80}
            className="w-24 lg:w-32 object-contain"
          />
        ))}
      </div>
    </div>

  </div>
</section>

      {/* Contact */}
<ContactSection />
    </div>
  );
};

export default Home;
