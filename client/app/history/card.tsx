import Link from "next/link";
import React from "react";

export default function Card() {
  return (
    <div className="w-full shadow-md text-splitDarkBlue rounded-lg shadow-splitDarkBlue/10">
      <div className="flex items-center justify-between py-3 px-7">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-splitPink"></div>
          <div>Maccas</div>
        </div>
        <div className="font-bold">$69.00 AUD</div>
      </div>
      <div className="flex justify-between items-center border-y border-splitBlue/25 py-3 px-7">
        <div className="flex ml-2">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="w-10 h-10 rounded-full bg-splitBlue -mx-2 border-white border"
            ></div>
          ))}
        </div>
        <div className="flex flex-col items-end">
          <div className="font-bold text-xl">80%</div>
          <div className="text-splitBlack50 opacity-50">Paid</div>
        </div>
      </div>
      <div className="flex justify-between py-3 items-center px-7">
        <div className="text-splitBlack50 opacity-50 text-sm">
          Mar 1st 2024 · 00:33
        </div>
        <Link
          href="/details"
          className="border border-splitBlack50 border-opacity-50 rounded-2xl px-6 py-1 text-splitDarkBlue hover:shadow-md hover:bg-splitDarkBlue hover:text-white duration-200 hover:shadow-splitDarkBlue/10"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
