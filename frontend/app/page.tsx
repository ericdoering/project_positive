
"use client"

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Instructions } from "../components/Instructions";
import { Summary } from "../components/Summary";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
          <div className="w-5/6 p-4 text-center large-margin bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Project Positive</h5>
            <Summary />
          </div>
          <div className="w-5/6 p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">How it Works</h5>
            <Instructions />
          </div>
      </div>
    </>
  );
};






