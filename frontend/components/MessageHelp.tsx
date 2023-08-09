"use client"

export function MessageHelp(): JSX.Element {
    return (
        <>
            <div className="msg block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-xs font-bold tracking-tight text-gray-900 dark:text-white">Examples of Graditude Quotes</h5>
                <p className="text-xs text-gray-700 dark:text-gray-400">“Life is ours to be spent, not to be saved. ” — D. H. Lawrence</p>
                <hr></hr>
                <p className="text-xs text-gray-700 dark:text-gray-400">“Begin at once to live, and count each separate day as a separate life. ” — Seneca</p>
            </div>   
            <div className="msg block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-xs font-bold tracking-tight text-gray-900 dark:text-white">Examples of Calls to Action</h5>
                <p className="text-xs text-gray-700 dark:text-gray-400">Take a minute to admire something in the immediate facinity.</p>
                <hr></hr>
                <p className="text-xs text-gray-700 dark:text-gray-400">Stand up and stretch.</p>
            </div>   
            <div className="msg block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-xs font-bold tracking-tight text-gray-900 dark:text-white">Examples of Graditude Questions</h5>
                <p className="text-xs text-gray-700 dark:text-gray-400">Who made you laugh or smile recently?</p>
                <hr></hr>
                <p className="text-xs text-gray-700 dark:text-gray-400">What was one thing you learned today?</p>
            </div>   
        </>
    )

}