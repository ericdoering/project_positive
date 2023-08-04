"use client"

import Image from 'next/image';
import happyFaceOne from "../assets/happy_face_one.png"
import happyFaceTwo from "../assets/happy_face_two.png"
import happyFaceThree from "../assets/happy_face_three.png"
import happyFaceFour from "../assets/happy_face_four.png"

export function IntroGraphic(): JSX.Element {
    return (
        <div className="flex flex-row space-x-4 circle-container">
                <Image className="border-2 border-white dark:border-gray-800 circle" src={happyFaceOne} alt="happy face one" width={200} height={200} />
                <Image className="border-2 border-white dark:border-gray-800 circle" src={happyFaceTwo} alt="happy face two" width={200} height={200} />
                <Image className="border-2 border-white dark:border-gray-800 circle" src={happyFaceThree} alt="happy face three" width={200} height={200} />
                <Image className="border-2 border-white dark:border-gray-800 circle" src={happyFaceFour} alt="happy face four" width={200} height={200} />
            </div>
    );
}