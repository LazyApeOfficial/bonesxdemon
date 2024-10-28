"use client";
import React, { useState, useEffect } from "react";
import Somke from "../../assets/images/smoke-bg.png";
import { config } from "../config";
import { writeContract, readContract } from "wagmi/actions";
import abiBones from "../abis/bones";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import { toast } from "react-toastify";
const Page: React.FC = () => {
  const { address } = useAccount();
  const router = useRouter();

  const [quantity, setQuantity] = useState<number>(1);
  const [supply, setSupply] = useState<number>(0);

  const incrementQuantity = (): void => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const decrementQuantity = (): void => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const mint = async () => {
    try{
      const mintPrice = 0.025 * Number(quantity);
      const trx = await writeContract(config, {
        address: "0xf0a1d824E72Db30EaC6bDAb14614869f2572d955",
        abi: abiBones,
        functionName: "mint",
        args: [address, quantity,50,[],ethers.ZeroAddress],
        value: BigInt(ethers.parseEther(mintPrice.toString()).toString()),
      });
      router.push(`/result?trx=${trx}`);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }

    
    
  };

  const getSupply = async () => {
    const _supply = await readContract(config, {
      address: "0xf0a1d824E72Db30EaC6bDAb14614869f2572d955",
      abi: abiBones,
      functionName: "totalSupply",
    });
    setSupply(Number(_supply));
  };

  useEffect(() => {
    if (address) {
      getSupply();
    }
  }, []);

  return (
    <>
      <div className="h-screen w-full flex justify-center py-10 flex-col  items-center">
        <div
          className="relative text-center uppercase bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Somke.src})` }}
        >
          <div className="relative z-10 p-10 text-5xl md:text-6xl lg:text-8xl mb-2">
            Bones <div>x</div> demons
            <div className="relative z-10 text-2xl md:text-3xl lg:text-4xl">
              Pirates x slashers x clowns
            </div>
          </div>
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        </div>

        <div className="flex flex-col justify-center  items-center  text-center gap-4 mb-4">
          <div className="text-xl md:text-2xl">{supply} / 1000 Minted</div>

          <div className="flex items-center justify-between w-48 border-2 border-white rounded-xl px-6 text-white">
            <button
              className="text-2xl focus:outline-none"
              onClick={decrementQuantity}
            >
              -
            </button>
            <span className="text-xl">{quantity}</span>
            <button
              className="text-2xl focus:outline-none"
              onClick={incrementQuantity}
            >
              +
            </button>
          </div>
          <div className="text-xl md:text-2xl">0.025 ETH + Gas</div>
        </div>

        <button onClick={mint} className="px-2 md:px-6 py-1 rounded-xl w-48 text-xl md:text-2xl bg-[#D11818] text-white">
          MINT
        </button>
      </div>
    </>
  );
};

export default Page;
