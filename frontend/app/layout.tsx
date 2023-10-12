"use client"

import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import Context from './context';
import { useContext} from 'react';
import { UserContext } from "@/context";
import Refresh from 'components/Refresh';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
  <>
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Context>
            <nav style={{ height: "50px", position:'fixed'}} className="bg-gray-800 dark:bg-gray-900 font-bold fixed w-full top-0 left-0 border-b border-gray-200 dark:border-gray-600 flex items-center nav z-10">
              <div className="w-full sm:w-20 md:w-32 lg:w-48 flex items-center justify-evenly mx-auto p-4 nav-font">
              <HomeLink />
              <Link className="sm:ml-2 md:ml-6 text-sm sm:text-base md:text-lg lg:text-xl" href="/register">
                Register
              </Link>
              </div>
            </nav>
            {children}
          </Context>
        </main>
      </body>
    </html>
  </>
  )
}


  export function HomeLink() {
    const { resetToDefault } = useContext(UserContext);
  
    const handleHomeClick = () => {
      resetToDefault(); 
    };
  
    return (
      <>
        <Refresh />
        <Link className="text-sm sm:text-base md:text-lg lg:text-xl" href="/" onClick={handleHomeClick}>
          Home
        </Link>
      </>
    )}