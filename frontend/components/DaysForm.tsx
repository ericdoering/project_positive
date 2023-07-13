"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { TimeForm } from "./TimeForm";

export function DaysForm(): JSX.Element{
    const [daysSelected, setDaysSelected] = useState<string[]>([]);
    const [daysSubmit, setDaysSubmit] = useState(false)

      const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setDaysSelected([]);
        setDaysSubmit(true);
      };

      const handleDayChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (daysSelected.includes(value)) {
          setDaysSelected(daysSelected.filter((day) => day !== value));
        } else {
          setDaysSelected([...daysSelected, value]);
        }
      };

    return (
        <>
        {daysSubmit ? null : 
            <div className="bg-gray-100 p-10 rounded form-size shadow-lg">
                <form onSubmit={handleSubmit}>
                <fieldset className="mb-4">
                    <legend className="sr-only text-sm mb-4 pb-4">Select which day/days you would like to receive messages.</legend>

                        <div className="flex items-center mb-4">
                            <input id="monday" type="checkbox" value="monday" checked={daysSelected.includes("monday")}
                            onChange={handleDayChange} className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-300 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="monday" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ml-4">Monday</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="tuesday" type="checkbox" value="tuesday" checked={daysSelected.includes("tuesday")}
                            onChange={handleDayChange} className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-300 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="tuesday" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ml-4">Tuesday</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="wednesday" type="checkbox" value="wednesday" checked={daysSelected.includes("wednesday")}
                            onChange={handleDayChange} className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-300 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="wednesday" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ml-4">Wednesday</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="thursday" type="checkbox" value="thursday" checked={daysSelected.includes("thursday")}
                            onChange={handleDayChange} className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-300 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="thursday" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ml-4">Thursday</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="friday" type="checkbox" value="friday" checked={daysSelected.includes("friday")}
                            onChange={handleDayChange} className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-300 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="friday" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ml-4">Friday</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="saturday" type="checkbox" value="saturday" checked={daysSelected.includes("saturday")}
                            onChange={handleDayChange} className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-300 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="saturday" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ml-4">Saturday</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="sunday" type="checkbox" value="sunday" checked={daysSelected.includes("sunday")}
                            onChange={handleDayChange} className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-300 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="sunday" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ml-4">Sunday</label>
                        </div>
                </fieldset>
                <button
                    type="submit"
                    className="text-white bg-indigo-700 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                 Submit
                </button>
            </form>
        </div>
        }
        <div>
            {daysSubmit ? <TimeForm /> : null}
        </div>
    </>
    )
};