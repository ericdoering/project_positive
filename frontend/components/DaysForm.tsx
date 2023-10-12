"use client";

import React, { useState, ChangeEvent, FormEvent, useContext } from "react";
import { Props } from  "../types/Props";
import { useRouter } from 'next/navigation';
import { Loader } from "./Loader";
import { UserContext } from "@/context";
import { DaysAlert } from "./DaysAlert";
import { SixDaysAlert } from "./SixDaysAlert";

export function DaysForm({user, setUser}: Props): JSX.Element{
    const { edit } = useContext(UserContext);
    const [daysSelected, setDaysSelected] = useState<string[]>([]);
    const [alert, setAlert] = useState(false);
    const [sixDaysAlert, setSixDaysAlert] = useState(false)
    const [disableSubmit, setDisableSubmit] = useState(false); 
    const [loading, setLoading] = useState(false);
    const router = useRouter();


    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (daysSelected.length === 0) {
          setAlert(true);
        }
        else if(sixDaysAlert){
            setDisableSubmit(true)
        } 
        else {
          setUser({
            ...user,
            days: daysSelected
          });
      
          setDaysSelected([]);
          setLoading(true);
          edit ? router.push('/register/review') : router.push('/register/time');
        }
      };
      
      const handleDayChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setDaysSelected(value as unknown as string[]);
        
        if (value === day) {
          setSixDaysAlert(true);
          setDisableSubmit(true);
          setAlert(false)
        } else {
          setSixDaysAlert(false);
          setDisableSubmit(false); 
        }
      };

    return (
        <>
        {loading ? null : 
        <div className="flex items-center justify-center my-32">
            <div className="bg-gray-100 p-10 rounded form-size shadow-lg">
                <form onSubmit={handleSubmit}>
                <fieldset className="mb-4">
                    <legend className="sr-only text-sm pb-4">Select which day you would like to receive messages.</legend>

                        <div className="flex items-center mb-4 marg-bg">
                            <input id="Monday" type="radio" value="Monday" checked={daysSelected.includes("Monday")}
                            onChange={handleDayChange} className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-300 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="Monday" className="box-mgn text-sm font-medium text-gray-900 dark:text-gray-300 ml-4">Monday</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="Tuesday" type="radio" value="Tuesday" checked={daysSelected.includes("Tuesday")}
                            onChange={handleDayChange} className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-300 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="Tuesday" className="box-mgn text-sm font-medium text-gray-900 dark:text-gray-300 ml-4">Tuesday</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="Wednesday" type="radio" value="Wednesday" checked={daysSelected.includes("Wednesday")}
                            onChange={handleDayChange} className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-300 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="Wednesday" className="box-mgn text-sm font-medium text-gray-900 dark:text-gray-300 ml-4">Wednesday</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="Thursday" type="radio" value="Thursday" checked={daysSelected.includes("Thursday")}
                            onChange={handleDayChange} className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-300 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="Thursday" className="box-mgn text-sm font-medium text-gray-900 dark:text-gray-300 ml-4">Thursday</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="Friday" type="radio" value="Friday" checked={daysSelected.includes("Friday")}
                            onChange={handleDayChange} className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-300 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="Friday" className="box-mgn text-sm font-medium text-gray-900 dark:text-gray-300 ml-4">Friday</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="Saturday" type="radio" value="Saturday" checked={daysSelected.includes("Saturday")}
                            onChange={handleDayChange} className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-300 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="Saturday" className="box-mgn text-sm font-medium text-gray-900 dark:text-gray-300 ml-4">Saturday</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="Sunday" type="radio" value="Sunday" checked={daysSelected.includes("Sunday")}
                            onChange={handleDayChange} className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-300 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="Sunday" className="box-mgn text-sm font-medium text-gray-900 dark:text-gray-300 ml-4">Sunday</label>
                        </div>
                </fieldset>
                <button
                    type="submit"
                    className="marg-bg text-white bg-indigo-700 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                 Submit
                </button>
            </form>
            {alert && <DaysAlert />}
            {sixDaysAlert && <SixDaysAlert />}
        </div>
        </div>
        }
        <div className="loading">  
            {loading ? <Loader /> : null}
        </div>
    </>
    )
};