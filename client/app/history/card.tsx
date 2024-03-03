import { BillOverview } from "@/lib/types";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";

export default function Card({ bill }: { bill: BillOverview }) {
  const total = bill.items.reduce((acc, item) => acc + item.cost, 0);

  return (
    <div className="w-full shadow-md text-splitDarkBlue rounded-lg shadow-splitDarkBlue/10">
      <div className="flex items-center justify-between py-3 px-7">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-splitPink"></div>
          <div>{bill.title}</div>
        </div>
        <div className="font-bold">${total} AUD</div>
      </div>
      <div className="flex justify-between items-center border-y border-splitBlue/25 py-3 px-7">
        <div className="flex ml-2">
          {bill.profilePics.map((pic) => (
            <Image
              src={pic}
              width={40}
              height={40}
              alt="ProfilePicture"
              key={pic}
              className="-mx-2 border-white border"
            ></Image>
          ))}
        </div>
        <div className="flex flex-col items-end">
          <div className="font-bold text-xl">80%</div>
          <div className="text-splitBlack50 opacity-50">Paid</div>
        </div>
      </div>
      <div className="flex justify-between py-3 items-center px-7">
        <div className="text-splitBlack50 opacity-50 text-sm">
          {format(bill.createdAt, "MMM Do yyyy • HH:mm")}
        </div>
        <button className="border border-splitBlack50 border-opacity-50 rounded-2xl px-6 py-1 text-splitDarkBlue hover:shadow-md hover:bg-splitDarkBlue hover:text-white duration-200 hover:shadow-splitDarkBlue/10">
          View Details
        </button>
      </div>
    </div>
  );
}
