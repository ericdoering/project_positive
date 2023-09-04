
import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import Context from './context';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] })

/*
export const metadata: Metadata = {
  title: 'Project Positive',
  description: 'The mental health and graditude app',
}
*/

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
          <nav style={{ height: "50px", position:'fixed'}} className="bg-gray-800 dark:bg-gray-900 font-bold fixed w-full top-0 left-0 border-b border-gray-200 dark:border-gray-600 flex items-center nav z-10">
            <div className="w-full md:w-32 lg:w-48 flex flex-wrap items-center justify-evenly mx-auto p-4 nav-font">
            <Link className="mr-6" href="/">
              Home
            </Link>
            <Link className="ml-6" href="/register">
              Register
            </Link>
            </div>
          </nav>
          <Context>
            {children}
          </Context>
        </main>
      </body>
    </html>
  </>
  )
}
