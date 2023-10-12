"use client";

import axios from "axios";
import React, { useState, ChangeEvent, FormEvent, useContext } from "react";
import { Props } from  "../types/Props";
import { useRouter } from 'next/navigation';
import { Loader } from "./Loader";
import { UserContext } from "@/context";
  
  
  export function ReviewForms({setUser}: Props): JSX.Element {
    const { user } = useContext(UserContext);
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
                    <h3> <span className="font-bold">First Name:</span> {user.firstName}</h3>
                    <h3> <span className="font-bold">Last Name:</span> {user.lastName}</h3>
                    <h3> <span className="font-bold">Phone Number:</span> {user.phoneNumber}</h3>
                </div>
                <button
                    onClick={() => router.push('/register')}
                    className="btn-wth bg-indigo-700 text-white active:bg-violet-600 text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                >
                 Edit
                </button>
                </div>




                <div className="rounded bg-gray-100 shadow-lg review-form">
                <div className='text-center'>
                    <h2 className="font-bold">Day:</h2>
                        <ul>
                        {user.days}
                        </ul>
                </div>
                <button
                    onClick={() => router.push('/register/days')}
                    className="btn-wth bg-indigo-700 px-2 text-white active:bg-violet-600 text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                >
                 Edit
                </button>
                </div>



                <div className="rounded bg-gray-100 shadow-lg review-form">
                <div className='text-center'>
                    <h2 className="font-bold">Time:</h2>
                    <h3>{user.time.hour.slice(0,2)}:{user.time.minute.slice(2,4)}  {user.time.timeOfDay}</h3>
                </div>
                <button
                    onClick={() => router.push('/register/time')}
                    className="btn-wth bg-indigo-700 text-white active:bg-violet-600 text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                >
                 Edit
                </button>
                </div>



                <div className="rounded bg-gray-100 shadow-lg review-form">
                <div className='text-center'>
                    <h2 className="font-bold">Types of Messages:</h2>
                    {Object.entries(user.Messages).map(([key, value]) => {
                        if (value === true) {
                        return <h5 key={key}>{key} ✔️</h5>;
                    }
                        return null;
                    })}
                </div>

                <button
                    onClick={() => router.push('/register/messages')}
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
            <div className="loading">  
                {loading ? <Loader /> : null}
            </div>
      </>
    );
  }