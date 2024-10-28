import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import ContextProvider from "@/context";
import { headers } from 'next/headers' 
import 'react-toastify/dist/ReactToastify.css';
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

import { Jaini_Purva } from 'next/font/google';
import { ToastContainer } from "react-toastify";

const jainiPurva = Jaini_Purva({
  weight: '400', 
  subsets: ['latin'], 
});

export const metadata: Metadata = {
  title: "Bones X Demons",
  description: "Bones X Demons",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const cookies = (await headers()).get('cookie')

  return (
    <html lang="en">
      <body
        className={`${jainiPurva.className} max-w-[1444px] mx-auto w-full bg-black text-white`}
        // className="bg-black text-white "

      >
        {/* {children} */}
        <ContextProvider cookies={cookies}>{children}</ContextProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
