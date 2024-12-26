import Image from "next/image";

import Hero from '@/app/components/Hero'
import FQ from '@/app/components/F&Q'
import { Metadata } from "next";
import LimitRooms from '@/app/components/LimitRomms'
import ContactUs from '@/app/components/ContactUs'

export const metadata: Metadata = {
  title: "E-ROOM",
  description: "",
};




export default function Home() {
  return (
    <div>
      <Hero />
      <FQ />
      <div className="mx-auto pl-[200px] mt-10 flex items-center gap-x-6">
                <h2 className="text-xl font-bold text-gray-900">Our Rooms</h2>
                <a
                  href="/all-rooms"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  All Rooms <span aria-hidden="true">→</span>
                </a>
              </div>
      <LimitRooms/>
      <ContactUs />
    </div>
  );
}
