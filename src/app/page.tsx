'use client';

// import Link from "next/link";
// import { SlGlobe } from "react-icons/sl";
import { motion } from "framer-motion";

const LINK_URL = "https://www.Pilot Association.in";


const randomMotion = {
  animate: {
    x: [0, 20, -15, 10, -20, 15, 0],
    y: [0, 15, -10, 20, -15, 10, 0],
    transition: {
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror" as const, // Using "mirror" for more varied movement
      ease: "easeInOut"
    }
  }
};


export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-8 overflow-hidden relative">
      <motion.img
        src="/images/xera.svg"
        alt="Themeptation"
        className="absolute h-96 -top-20 -right-16 lg:right-5 lg:top-10"
        {...randomMotion}
      />
      <motion.img
        src="/images/shapes.svg"
        alt="hero"
        className="absolute w-full left-24 bottom-24"
        {...randomMotion}
      />

      <div className="relative z-10 py-6 space-y-16 lg:space-y-32 text-gray-900 text-center">
        <div className="space-y-10">
          <h3 className="font-light text-xl uppercase tracking-wider">
            Coming soon
          </h3>
          <h1 className="text-7xl lg:text-9xl font-extrabold">
            We’re blowing up
          </h1>
          <p className="text-xl lg:text-2xl tracking-wide mx-10 lg:max-w-xl lg:mx-auto">
            We`re under construction. Check back for an update soon. Stay in
            touch!
          </p>
        </div>
      </div>

      {/* <div className="absolute bottom-5">
        <ul className="flex space-x-3">
          <li>
            <Link href={LINK_URL}>
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 transition ease-in-out duration-500 hover:bg-red-500 hover:text-white hover:shadow-lg">
                <SlGlobe className="w-6 h-6" />
              </span>
            </Link>
          </li>
        </ul>
      </div> */}
    </main>
  );
}
