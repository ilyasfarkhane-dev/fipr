'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'

import Lottie from 'lottie-react'
import AnimationData from "@/public/Abimation-Data.json"

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
     

      <div className="relative isolate ">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
        </svg>
        <div className="mx-auto max-w-7xl px-6 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 ">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            
            <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              A better room for better student
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis in facere ex facilis tempore ipsam repellendus obcaecati laboriosam doloribus ullam quos, amet nam cum. Illo.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="/all-rooms"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Explore Now
              </a>
              <a href="/about-us" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className=" mx-auto w-[35.875rem] max-w-full drop-shadow-xl">
           <Lottie animationData={AnimationData} />
          </div>
        </div>
      </div>
    </div>
  )
}
