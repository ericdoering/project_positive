"use client"

import Image from 'next/image';
import happyFaceOne from "../assets/happy_face_one.png"
import happyFaceTwo from "../assets/happy_face_two.png"
import happyFaceThree from "../assets/happy_face_three.png"
import happyFaceFour from "../assets/happy_face_four.png"

export function IntroGraphic(): JSX.Element {
    return (
        <div className="flex flex-row space-x-4 circle-container">
                <Image className="circle anti-warp" src={happyFaceOne} alt="happy face one" width={200} height={200} />
                <Image className="circle" src={happyFaceFour} alt="happy face two" width={200} height={200} />
                <Image className="circle" src={happyFaceThree} alt="happy face three" width={200} height={200} />
                <Image className="circle anti-warp" src={happyFaceTwo} alt="happy face four" width={200} height={200} />
            </div>
    );
}