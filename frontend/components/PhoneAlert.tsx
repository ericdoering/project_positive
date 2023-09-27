"use client"

export function PhoneAlert(): JSX.Element {
    return (
        <>
            <div className="alert text-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-900 dark:bg-gray-800 dark:text-red-400" role="alert">
                <span className="font-bold">Phone number is already taken. Please cancel and existing number or choose another number.</span>
            </div>
        </>
        )
    };