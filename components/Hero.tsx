import Image from "next/image";

import HeroPng from "@/public/images/hero-img.png";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center mx-4 lg:mx-20 mb-10">
      <div className="lg:w-1/2 space-y-4">
        <h1 className="text-blue-900 text-2xl lg:text-5xl font-semibold">
          Grow your business with Akeshya
        </h1>
        <p className="lg:text-xl">
          We are team of talented website designers, developers & digital
          marketeers
        </p>
        <button className="bg-white rounded-full border border-blue-900 hover:bg-blue-900 hover:text-white translate-all duration-300 px-5 py-2">
          Get Started
        </button>
      </div>
      <div className="lg:w-1/2 m-10">
        <Image src={HeroPng} alt="Hero" className="mx-auto" />
      </div>
    </div>
  );
}
