"use client";

import Image from 'next/image';

interface User {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    days: string[];
    time: {
      hour: string;
      minute: string;
      timeOfDay: string;
    };
    Messages: {
      Quotes: boolean;
      Questions: boolean;
      "Calls To Action": boolean;
    };
  }
  
  const temporaryData: { user: User } = {
    user: {
      firstName: "Joe",
      lastName: "Shmo",
      phoneNumber: "0123456789",
      days: ["Monday", "Wednesday", "Friday"],
      time: {
        hour: "7:00",
        minute: "0:30",
        timeOfDay: "AM",
      },
      Messages: {
        "Quotes": true,
        "Questions": true,
        "Calls To Action": false,
      },
    },
  };
  
  export function ReviewForms(): JSX.Element {

    const { user } = temporaryData;
  
    return (
      <>
        <div>
            <div className="max-w-med rounded bg-gray-100 shadow-lg">
                <Image className="w-full" width={200} height={100} src="/img/card-top.jpg" alt="Sunset in the mountains" />
                <div>
                    <h1>Review Information</h1>
                    <h3>First Name: {user.firstName}</h3>
                    <h3>Last Name: {user.lastName}</h3>
                    <h3>Phone Number: {user.phoneNumber}</h3>
                </div>
                <div>
                    <h2>Days</h2>
                        <ul>
                        {user.days.map((d) => (
                            <li key={d}>{d}</li>
                            ))}
                        </ul>
                </div>
                <div>
                    <h2>Time</h2>
                    <h3>{user.time.hour.slice(0,1)}:{user.time.minute.slice(2)}  {user.time.timeOfDay}</h3>
                </div>
                <div>
                    <h2>Types of Messages</h2>
                    {Object.entries(user.Messages).map(([key, value]) => {
                        if (value === true) {
                        return <h5 key={key}>{key}</h5>;
                    }
                        return null;
                    })}
                </div>
                </div>
            </div>
      </>
    );
  }