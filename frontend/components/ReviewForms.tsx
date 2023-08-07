"use client";

import { User } from '@/register/page';

  type Props = {
    user: User;
    setUser: (user: User) => void;
  }
  
  
  export function ReviewForms({user}: Props): JSX.Element {


    return (
      <>
        <div className="flex items-center flex-col justify-center my-32">

        <div className="review-heading font-bold">Review Information</div>


            <div className="rounded bg-gray-100 shadow-lg review-form">
            <div className="text-center">
                <h3>First Name: {user.firstName}</h3>
                <h3>Last Name: {user.lastName}</h3>
                <h3>Phone Number: {user.phoneNumber}</h3>
                <button
                    className="btn-wth bg-indigo-700 px-2 text-white active:bg-violet-600 text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
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


                </div>
                <button
                    className="btn-sub bg-indigo-700 text-white active:bg-violet-600 text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                >
                 Submit
                </button>
            </div>

      </>
    );
  }