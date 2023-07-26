"use client";


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
        <div className="flex flex-col items-center justify-center">
            <div className="rounded bg-gray-100 shadow-lg">
            <div className="review-heading">Review Information</div>
                <div className="text-center">
                <h3>First Name: {user.firstName}</h3>
                <h3>Last Name: {user.lastName}</h3>
                <h3>Phone Number: {user.phoneNumber}</h3>
            </div>
                <button
                    className="text-white bg-indigo-700 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                 Edit
                </button>
                <hr className="gray-border"></hr>
                <div className='text-center'>
                    <h2>Days</h2>
                        <ul>
                        {user.days.map((d) => (
                            <li key={d}>{d}</li>
                            ))}
                        </ul>
                </div>
                <button
                    className="text-white bg-indigo-700 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                 Edit
                </button>
                <hr className="gray-border"></hr>
                <div className='text-center'>
                    <h2>Time</h2>
                    <h3>{user.time.hour.slice(0,1)}:{user.time.minute.slice(2)}  {user.time.timeOfDay}</h3>
                </div>
                <button
                    className="text-white bg-indigo-700 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                 Edit
                </button>
                <hr className="gray-border"></hr>
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
                    className="text-white bg-indigo-700 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                 Edit
                </button>
                </div>
                <button
                    className="text-white w-3/5 bg-indigo-700 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                 Submit
                </button>
            </div>
      </>
    );
  }