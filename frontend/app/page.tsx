"use client";

import { useContext, useEffect, useRef } from "react";
import { Instructions } from "../components/Instructions";
import { Summary } from "../components/Summary";
import { MessageExamples } from "../components/MessageExamples";
import { IntroGraphic } from "../components/IntroGraphic";
import { RegisterInstructions } from "components/RegisterInstuctions";

const Home: React.FC = () => {
  const cardRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <>
      <div className="flex items-center justify-center my-32">
        <div className="landing rounded">
        <div className="mt-6 flex flex-col items-center justify-center card-container">
          <section ref={(el: HTMLInputElement) => (cardRefs.current[0] = el)} className="flex flex-col items-center container justify-center card">
            <div className="w-5/6 p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-2 main-title font-bold dark:text-white">Project Positive</h5>
              <Summary />
            </div>
            <IntroGraphic />
          </section>
          <section ref={(el: HTMLInputElement) => (cardRefs.current[1] = el)} className="flex flex-col items-center container justify-center card">
            <div className="w-5/6 p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">How it Works</h5>
              <Instructions />
            </div>
          </section>
          <section ref={(el: HTMLInputElement) => (cardRefs.current[2] = el)} className="flex flex-col items-center container justify-center card">
            <div className="reg-inst p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-10 text-3xl font-bold text-gray-900 dark:text-white">How to Register</h5>
              <RegisterInstructions />
            </div>
          </section>
          <section ref={(el: HTMLInputElement) => (cardRefs.current[3] = el)} className="flex flex-col items-center container justify-center card">
            <div>
              <MessageExamples />
            </div>
          </section>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;







