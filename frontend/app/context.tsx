"use client";
import './globals.css'
import { useState, createContext, Dispatch, SetStateAction } from 'react';
import { User } from 'types/User';


type UserContextData = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
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
  setUser: function (value: SetStateAction<User>): void {}
});

export default function Context({
  children,
}: {
  children: React.ReactNode
}) {
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
    <UserContext.Provider value={{user, setUser}}>
    {children}
    </UserContext.Provider>
  </>
  )
}
