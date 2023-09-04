"use client";

import axios from "axios";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Props } from  "../types/Props";
import { SubmitPage } from "./SubmitPage";
import useHistory, { Navigate } from "react-router-dom";
import { MessageForm } from "./MessageForm";
import Link from "next/link";
import { DaysForm } from "./DaysForm";
import { useRouter } from 'next/navigation';
  
  
  export function ReviewForms({user, setUser}: Props): JSX.Element {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push('/register/success');
        setLoading(true);
        await axios.post(`http://localhost:3456/register`, user)
      };
      

    return (
      <>
      {loading ? null : 
        <div className="flex items-center flex-col justify-center my-32">
            <div className="review-heading font-bold mb-2">Review Information</div>


                <div className="rounded bg-gray-100 shadow-lg review-form">
                <div className='text-center'>
                    <h3>First Name: {user.firstName}</h3>
                    <h3>Last Name: {user.lastName}</h3>
                    <h3>Phone Number: {user.phoneNumber}</h3>
                </div>
                <button
                    className="btn-wth bg-indigo-700 text-white active:bg-violet-600 text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                >
                 Edit
                </button>
                </div>




                <div className="rounded bg-gray-100 shadow-lg review-form">
                <div className='text-center'>
                    <h2>Days</h2>
                        <ul>
                        {user.days.map((d) => (
                            <li key={d}>{d}</li>
                            ))}
                        </ul>
                </div>
                <button
                    className="btn-wth bg-indigo-700 px-2 text-white active:bg-violet-600 text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                >
                 Edit
                </button>
                </div>



                <div className="rounded bg-gray-100 shadow-lg review-form">
                <div className='text-center'>
                    <h2>Time</h2>
                    <h3>{user.time.hour.slice(0,1)}:{user.time.minute.slice(2)}  {user.time.timeOfDay}</h3>
                </div>
                <button
                    className="btn-wth bg-indigo-700 text-white active:bg-violet-600 text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                >
                 Edit
                </button>
                </div>



                <div className="rounded bg-gray-100 shadow-lg review-form">
                <div className='text-center'>
                    <h2>Types of Messages</h2>
                    {Object.entries(user.Messages).map(([key, value]) => {
                        if (value === true) {
                        return <h5 key={key}>{key} ✔️</h5>;
                    }
                        return null;
                    })}
                </div>

                <button
                    className="btn-wth bg-indigo-700 text-white active:bg-violet-600 text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                >
                 Edit
                </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <button
                        type="submit"
                        className="btn-sub bg-indigo-700 text-white active:bg-violet-600 text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
                    >
                    Submit
                    </button>
                </form> 
                </div>
                }
            <div>
                {loading ? "...loading" : null}
            </div>
      </>
    );
  }