"use client";


import { PhoneAlert } from "../../components/PhoneAlert"
import React, { useState, ChangeEvent, FormEvent, useContext, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { UserContext } from "@/context";
import { Loader } from "components/Loader";
import axios from "axios";



export default function Register(): JSX.Element {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userSubmit, setUserSubmit] = useState(false);
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {user, setUser, edit} = useContext(UserContext);


  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    const response = await axios.post(
      `http://localhost:3456/phoneNumber`, user, {
        validateStatus : function (status){
          return status < 500
        }
      })
    console.log("THE MAIN RESPONSE", response)
    if(response.status !== 200){
      console.log("error Response", response.status)
      setAlert(true);
    }
    else {
      console.log("Success Response", response.status)
      event.preventDefault();
      setUserSubmit(true);
      setLoading(true);
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      edit ? router.push('/register/review') : router.push('/register/days')
    }
  };

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      firstName: event.target.value,
    })
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      lastName: event.target.value,
    })
  };

  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      phoneNumber: event.target.value,
    })
  };

  return (
  <>
  {userSubmit ? null : 
  <div className="flex items-center justify-center my-32 testing-div">
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
          onChange={handleFirstNameChange}
          required
        />
        <label
          htmlFor="floating_first_name"
          className="avd-clip peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
          onChange={handleLastNameChange}
          required
        />
        <label
          htmlFor="floating_last_name"
          className="avd-clip peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
          onChange={handlePhoneNumberChange}
          required
        />
        <label
          htmlFor="floating_phone"
          className="avd-clip peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Phone number 123-456-7890
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
  {alert && <PhoneAlert />}
</div>
</div>
  }
    <div className="loading">  
            {loading ? <Loader /> : null}
    </div>
</>
  );
}