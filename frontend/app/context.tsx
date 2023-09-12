"use client";

import './globals.css'
import { useState, createContext, Dispatch, SetStateAction } from 'react';
import { User } from 'types/User';


type UserContextData = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
  edit: boolean
  setEditing: Dispatch<SetStateAction<boolean>>;
}

export const UserContext = createContext<UserContextData>({
  user: {
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
  },
  setUser: function (value: SetStateAction<User>): void {},
  edit: false, 
  setEditing: () => {}, 

});

export default function Context({
  children,
}: {
  children: React.ReactNode
}) {

  const [edit, setEditing] = useState<boolean>(false);
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

  return (
  <>
    <UserContext.Provider value={{user, setUser, edit, setEditing}}>
    {children}
    </UserContext.Provider>
  </>
  )
}