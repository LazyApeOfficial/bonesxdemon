"use client"
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  const { searchParams } = new URL(window.location.href);
  const trx = searchParams.get("trx");
  return (
    <>
      <div className="h-screen text-center w-full flex justify-center py-10 flex-col items-center">
        <div className="flex flex-col gap-6 mb-8">


        <div className=" text-4xl sm:text-5xl lg:text-6xl mb-2">
          CONGRATULATIONS!
        </div>
        <div className=" text2xl sm:text-3xl lg:text-4xl">
          You have successfully minted from Bones X Demons
        </div>

        </div>

        <div className="flex flex-col gap-5">


        <a href={`https://etherscan.io/tx/${trx}`} target="_blank" className="text2xl sm:text-3xl lg:text-4xl  text-[#F7C634] underline">
          See transaction
        </a>
        <a href="https://opensea.io/collection/bonesxdemons" target="_blank" className="text2xl sm:text-3xl lg:text-4xl  text-[#E134F7] underline">
          View Collection
        </a>
        <button onClick={()=>router.push("/")} className="text2xl sm:text-3xl lg:text-4xl  text-[#FF0000] underline">
          Back to Main Page{" "}
        </button>
        </div>
      </div>
    </>
  );
};

export default Page;
