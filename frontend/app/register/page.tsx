"use client";

import { DaysForm } from "../../components/DaysForm";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { User } from "../../../frontend/types/User";



export default function Register(): JSX.Element {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userSubmit, setUserSubmit] = useState(false);


  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    days: [], 
    time: {
      hour: '',
      minute: '',
      timeOfDay: '',
    },
    Messages: {
      Quotes: false,
      Questions: false,
      "Calls to Action": false,
    },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    setUser({
      ...user,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
    })
    event.preventDefault();
    setUserSubmit(true)
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
  };

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  return (
  <>
  {userSubmit ? null : 
  <div className="flex items-center justify-center my-32">
    <div className="bg-gray-100 p-10 rounded form-size shadow-lg">
  <form className="border-indigo-600" onSubmit={handleSubmit}>
    <div className="grid md:flex-col">
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="floating_first_name"
          id="floating_first_name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          value={firstName}
          onChange={handleFirstNameChange}
          required
        />
        <label
          htmlFor="floating_first_name"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          First name
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="floating_last_name"
          id="floating_last_name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          value={lastName}
          onChange={handleLastNameChange}
          required
        />
        <label
          htmlFor="floating_last_name"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Last name
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          name="floating_phone"
          id="floating_phone"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          required
        />
        <label
          htmlFor="floating_phone"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Phone number (123-456-7890)
        </label>
      </div>
    </div>
    <button
      type="submit"
      className="text-white bg-indigo-700 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Submit
    </button>
  </form>
</div>
</div>
}
<div>
    {userSubmit ? <DaysForm user={user} setUser={setUser} /> : null}
  </div>
</>
  );
}