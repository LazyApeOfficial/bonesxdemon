"use client";
// import { useState } from "react";
import { useAppKit } from "@reown/appkit/react";
import Image from "next/image";
import { useAccount } from "wagmi";
// import { readContract } from "wagmi/actions";
import NftImg from "../assets/images/nft1-removebg-preview.png";
import NftImg2 from "../assets/images/nft2-removebg-preview.png";
import Somke from "../assets/images/smoke-bg.png";
// import abi from "./abis/layo";
// import { config } from "./config";
import { useRouter } from "next/navigation";
// import { Bounce, toast } from "react-toastify";

export default function Home() {
  const router = useRouter();
  const { open } = useAppKit();
  const { address } = useAccount();
  // const [balance, setBalance] = useState(0);


  // async function balanceOf() {
  //   const _balance = await readContract(config,{
  //     address: "0x1b1bFf222999BcD6fD07b64d7880e6a95d54ACaA",
  //     abi: abi,
  //     functionName: "balanceOf",
  //     args: [address], //args: ["0xCA33FC52F65d33b679E41054c84127478dd73eE5"], //change to address
  //   });
  //   setBalance(Number(_balance));
  // }

  // useEffect(() => {
  //   if (address) {
  //     balanceOf();
  //   }
  // }, [address]);

  function onClickMint() {
    router.push("/mint");
    // if (balance > 0) {
    //   router.push("/mint");
    // } else {
    //   toast.warn('You don’t own any LAO', {
    //   position: "top-center",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    //   transition: Bounce,
    //   });
    //   // alert("You don’t own any LAO");
    // }
  }

  return (
    <>
      <div className="h-screen relative w-full flex gap-10 md:gap-0 justify-center py-20 md:py-10 flex-col  items-center">
        <Image
          src={Somke}
          alt="Description of the PNG image"
          className=" absolute w-[756px] top-20 md:top-[-10%] h-auto opacity-50 -z-10"
        />
        <div className="text-center flex flex-col gap-8 uppercase">
          <div className="">
            <div className="text-5xl md:text-6xl lg:text-8xl mb-2">
              Bones <span>x</span> demons
            </div>
            <div className=" text-2xl md:text-3xl lg:text-4xl">
              Pirates x slashers x clowns
            </div>
          </div>
          <div className=" text-xl md:text-2xl lg:text-3xl lg:tracking-[1.3rem] md:tracking-[1rem] tracking-[0.5rem]">
            a lao collection
          </div>
        </div>

        <div className="flex items-center justify-between w-full">
          <div className="relative">
            <Image
              src={NftImg2}
              alt="Description of the PNG image"
              width={500}
              height={300}
              className="relative"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent h-full"></div>
          </div>
          <div>
            {!address ? (
              <button
                onClick={() => open()}
                className="px-2 md:px-6 py-1 rounded-xl w-max bg-white text-black text-xl md:text-2xl"
              >
                Connect Wallet
              </button>
            ) : (
              <button
                onClick={onClickMint}
                className="px-2 md:px-6 py-1 rounded-xl w-max text-white bg-[#D11818] text-xl md:text-2xl uppercase"
              >
                mint
              </button>
            )}
          </div>
          <div className="relative">
            <Image
              src={NftImg}
              alt="Description of the PNG image"
              width={500}
              height={300}
              className="relative"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent h-full"></div>
          </div>
        </div>
      </div>
    </>
  );
}
