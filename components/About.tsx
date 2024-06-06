/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import { FaRegSmile } from "react-icons/fa";
import { MdPhonelinkRing } from "react-icons/md";
import { LuClock4 } from "react-icons/lu";
import { BsGlobe } from "react-icons/bs";
import CountsSVG from "@/public/images/counts-img.svg";

export default function About() {
  return (
    <div className="mx-4 md:mx-10 lg:mx-24">
      <div className="flex items-center gap-4 justify-center">
        <div className="border border-blue-900 w-14" />
        <h1 className="text-2xl text-center font-bold">ABOUT US</h1>
        <div className="border border-blue-900 w-14" />
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 my-5 lg:my-10">
        <div className="lg:w-1/2 space-y-3">
          <p>
            We are Akeshya, a firm that specializes in web design and marketing.
            We help transform ideas into reality with a team of passionate
            graphic designers, web developers, and seasoned marketing advisors.
          </p>
          <ul className="space-y-3">
            <li>
              ✔️ We started with a simple idea: do what is best for the client.
            </li>
            <li>
              ✔️ Our methodical and individual approach to each project delivers
              the finest possible results for your media.
            </li>
            <li>
              ✔️ Our day-to-day work is to solve your problems utilising the
              most up-to-date, practical adaptive technology, and we have a lot
              of fun doing it.
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 space-y-5">
          <p>
            We're professional, but we're also friendly, and we'll always pay
            attention to your concerns. We expect to work with innovative people
            that have an open mind and are dedicated to making every idea a
            reality. We want to hear from you if you're interested in SEO, have
            Web Development ideas, or require a graphic designer who can match
            your goals.
          </p>
          <button className="bg-white rounded-full border border-blue-900 hover:bg-blue-900 hover:text-white translate-all duration-300 px-5 py-2">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:gap-20">
        <Image
          src={CountsSVG}
          alt="counts"
          className="h-96 w-96 lg:w-[450px]"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex gap-4">
            <FaRegSmile size={40} className="text-blue-900" />
            <div>
              <p className="font-bold text-xl">3835039</p>
              <p>
                Organic Reach <span className="text-gray-600">(Global)</span>
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <MdPhonelinkRing size={40} className="text-blue-900" />
            <div>
              <p className="font-bold text-xl">85</p>
              <p>Campaigns</p>
            </div>
          </div>
          <div className="flex gap-4">
            <LuClock4 size={40} className="text-blue-900" />
            <div>
              <p className="font-bold text-xl">14081</p>
              Watch Hours <span className="text-gray-600">(Asia)</span>
            </div>
          </div>
          <div className="flex gap-4">
            <BsGlobe size={40} className="text-blue-900" />
            <div>
              <p className="font-bold text-xl">17</p>
              Excellent CTR %<span className="text-gray-600">(Asia)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
