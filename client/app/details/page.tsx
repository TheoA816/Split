"use client";
import React, { useState } from "react";
import Participants from "./participants";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import details from "@/public/details.png";
import Image from "next/image";
import Link from "next/link";
import Popup from "./popup";

export default function Page() {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div className="text-splitBlack50">
      <div className="flex">
        <div className="px-16 py-10 flex-1 flex flex-col justify-center">
          <Link href="/history" className="flex items-center gap-3 mb-7">
            <ArrowLeftIcon className="w-4 h-4" />
            <div className="font-semibold text-lg">Back</div>
          </Link>
          <div className="flex flex-col justify-center">
            <div className="flex flex-col gap-10">
              <div className="flex justify-between">
                <div>
                  <div className="text-4xl font-bold text-splitDarkBlue">
                    Maccas
                  </div>
                  <div className="opacity-75">Mar 1st 2024 · 00:33</div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="opacity-75">Total bill</div>
                  <div className="font-bold text-2xl text-splitDarkBlue">
                    $69.00 AUD
                  </div>
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-splitDarkBlue">
                  Items
                </div>
                <div className="flex justify-between">
                  <div className="opacity-75">Random item #1 (1)</div>
                  <div className="opacity-75">$6.9</div>
                </div>
                <div className="flex justify-between">
                  <div className="opacity-75 text-xl font-semibold">Total</div>
                  <div className="opacity-75 text-xl font-semibold">$6.9</div>
                </div>
              </div>
              <div>
                <div className="font-bold text-2xl text-splitDarkBlue">
                  Additional costs
                </div>
                <div className="flex justify-between">
                  <div className="opacity-75">Taxes</div>
                  <div className="opacity-75">$6.9</div>
                </div>
                <div className="flex justify-between">
                  <div className="opacity-75 font-semibold text-xl">
                    Total Additional Costs
                  </div>
                  <div className="opacity-75 font-semibold text-xl">$6.9</div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="text-xl font-bold text-splitDarkBlue">
                  List of participants
                </div>
                <div className="flex flex-col gap-4">
                  {Array.from({ length: 4 }).map((_, idx) => (
                    <Participants key={idx} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <button className="border w-full py-3 mb-5 mt-24 border-dashed border-splitDarkBlue rounded-xl font-bold text-splitDarkBlue">
            Add participants
          </button>
          <button className="border w-full py-3 rounded-xl bg-splitDarkBlue text-splitWhite font-bold">
            Confirm split bill
          </button>
        </div>
        <Image src={details} alt="Details image" className="flex-1" />
      </div>
      {/* <Popup /> */}
    </div>
  );
}
