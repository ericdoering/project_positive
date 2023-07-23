
import { Summary } from "../components/Summary"

export default function Home() {
  return (
    <>
      <div className="w-5/6 p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Project Positive</h5>
        <Summary />
      </div>
    </>
  )
};

