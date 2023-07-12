"use client";

import React, { useState } from 'react';

type Option = {
  value: string;
  label: string;
};


const hour: Option[] = [
  { value: "1:00", label: "1:00" },
  { value: "2:00", label: "2:00" },
  { value: "3:00", label: "3:00" },
  { value: "4:00", label: "4:00" },
  { value: "5:00", label: "5:00" },
  { value: "6:00", label: "6:00" },
  { value: "7:00", label: "7:00" },
  { value: "8:00", label: "8:00" },
  { value: "9:00", label: "9:00" },
  { value: "10:00", label: "10:00" },
  { value: "11:00", label: "11:00" },
  { value: "12:00", label: "12:00" },
];

const minute: Option[] = [
  { value: "0:15", label: "0:15" },
  { value: "0:30", label: "0:30" },
  { value: "0:45", label: "0:45" },
];

const timeOfDay: Option[] = [
  { value: "AM", label: "AM" },
  { value: "PM", label: "PM" },
];

export const TimeForm = () => {
  const [selectedOption1, setSelectedOption1] = useState<Option | null>(null);
  const [selectedOption2, setSelectedOption2] = useState<Option | null>(null);
  const [selectedOption3, setSelectedOption3] = useState<Option | null>(null);


  const handleOption1Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const option = hour.find((o) => o.value === selectedValue) || null;
    setSelectedOption1(option);
  };

  const handleOption2Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const option = minute.find((o) => o.value === selectedValue) || null;
    setSelectedOption2(option);
  };

  const handleOption3Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const option = timeOfDay.find((o) => o.value === selectedValue) || null;
    setSelectedOption3(option);
  };

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>): Promise<void> => {
    evt.preventDefault();

    const TimePayload = {
      time: {
        hour: selectedOption1?.value,
        minute: selectedOption2?.value,
        timeOfDay: selectedOption3?.value,
      },
    };

    console.log(TimePayload);
  };



  return (
      <>
        <div className="flex items-center justify-center">
          <div>
            <h1 className="m-4">Select Time to Receive Texts</h1>
          </div>
          <form onSubmit={handleSubmit} className="mt-4">
            <button
              className="mb-5 bg-green-500 text-white px-4 py-2 rounded-lg"
              type="submit"
            >
              Choose Times
            </button>
            <div className="flex justify-center space-x-4">
              <div>
                <label htmlFor="formOption1" className="block">
                  Select Hour
                </label>
                <div className="relative inline-block">
                  <select
                    id="formOption1"
                    className="appearance-none bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    value={selectedOption1?.value || ""}
                    onChange={handleOption1Change}
                  >
                    <option value="">Select an option</option>
                    {hour.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6l-6 6z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="formOption2" className="block">
                  Select Minute
                </label>
                <div className="relative inline-block">
                  <select
                    id="formOption2"
                    className="appearance-none bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    value={selectedOption2?.value || ""}
                    onChange={handleOption2Change}
                  >
                    <option value="">Select an option</option>
                    {minute.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6l-6 6z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="formOption3" className="block">
                  Select AM or PM
                </label>
                <div className="relative inline-block">
                  <select
                    id="formOption3"
                    className="appearance-none bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    value={selectedOption3?.value || ""}
                    onChange={handleOption3Change}
                  >
                    <option value="">Select an option</option>
                    {timeOfDay.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6l-6 6z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
  );
};
