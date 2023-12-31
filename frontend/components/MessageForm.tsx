"use client";

import React, { useState, ChangeEvent, FormEvent, useContext } from "react";
import { MessageHelp } from "./MessageHelp";
import { Props } from  "../types/Props";
import { useRouter } from 'next/navigation';
import { Loader } from "./Loader";
import { UserContext } from "@/context";
import { MessageAlert } from "./MessageAlert";


export function MessageForm({user, setUser}: Props): JSX.Element{
  const { edit, setEditing } = useContext(UserContext);
  const [alert, setAlert] = useState(false);

  const handleToggleEditing = () => {
    setEditing(true);
  };

    const [messagesSelected, setMessagesSelected] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

      const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (messagesSelected.length === 0) {
            setAlert(true);
        }
        else{  
        setUser({
          ...user,
          Messages: {
            Quotes: messagesSelected.includes("quotes"),
            Questions: messagesSelected.includes("questions"),
            "Calls to Action": messagesSelected.includes("actions"),  
          },
        })
        setMessagesSelected([]); 
        setLoading(true);
        handleToggleEditing()
        router.push('/register/review');
        }
      };

      const handleDayChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (messagesSelected.includes(value)) {
          setMessagesSelected(messagesSelected.filter((message) => message !== value));
        } else {
          setMessagesSelected([...messagesSelected, value]);
        }
      };

      
    return (
        <>
        {loading ? null : 
        <div className="flex items-center justify-center my-32">
            <div className="bg-gray-100 p-10 rounded form-size shadow-lg">
                <form onSubmit={handleSubmit}>
                <fieldset className="mb-4">
                    <legend className="sr-only text-sm mb-4 pb-4">Select the types of messages you would like to recieve.</legend>
                        <div className="marg-bg flex items-center mb-4">
                            <input id="quotes" type="checkbox" value="quotes" checked={messagesSelected.includes("quotes")}
                            onChange={handleDayChange} className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-300 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="quotes" className="box-mgn text-sm font-medium text-gray-900 dark:text-gray-300 ml-4">Motivational Quotes</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="questions" type="checkbox" value="questions" checked={messagesSelected.includes("questions")}
                            onChange={handleDayChange} className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-300 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="questions" className="box-mgn text-sm font-medium text-gray-900 dark:text-gray-300 ml-4">Graditude Questions</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="actions" type="checkbox" value="actions" checked={messagesSelected.includes("actions")}
                            onChange={handleDayChange} className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-300 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="actions" className="box-mgn text-sm font-medium text-gray-900 dark:text-gray-300 ml-4">Calls to Action</label>
                        </div>
                </fieldset>
                <button
                    type="submit"
                    className="marg-bg text-white bg-indigo-700 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                 Submit
                </button>
            </form>
            {alert && <MessageAlert />}
            <div className="msg-help">
              <MessageHelp />
            </div>
        </div>
        </div>
        }
        <div className="loading">  
            {loading ? <Loader /> : null}
        </div>
    </>
    )
};