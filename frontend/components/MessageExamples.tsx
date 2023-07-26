
"use client"

import Image from "next/image";
import oprah from "../assets/oprah.png";
import breath from "../assets/breath.png";
import helpful from "../assets/helpful.png";

export function MessageExamples(): JSX.Element {
    return (
        <>
            <div>
                <div className="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <Image className="rounded" height={100} width={100} src={oprah} alt="oprah" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Graditude Quotes</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">“The more you praise and celebrate your life, the more there is in life to celebrate. ” — Oprah Winfrey</p>
                    </div>
                </div>
                <div className="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <Image className="rounded" height={100} width={100} src={breath} alt="deep breathing" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Calls to Action</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Stop and take 5 deep breaths.</p>
                    </div>
                </div>
                <div className="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <Image className="rounded" height={100} width={100} src={helpful} alt="helping person" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Graditude Questions</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Who helped me today?</p>
                    </div>
                </div>
            </div>
        </>
    )

}