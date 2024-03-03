import React from "react";

export default function friend() {
  return (
    <div className="flex bg-[#CADFF4] items-center justify-between px-5 rounded-md">
      <div className="flex items-center gap-10">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-splitBlue"></div>
          <div>Name</div>
        </div>
        <div className="flex flex-col">
          <div>Owes</div>
          <div className="text-2xl">$69.00</div>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <div className="flex flex-col">
          <div>Paid</div>
          <div className="text-2xl">$69.00</div>
        </div>
        <div className="w-14 h-14 rounded-full bg-splitBlue flex flex-col items-center justify-center text-splitWhite">
          <div>Paid</div>
          <div>Off!</div>
        </div>
      </div>
    </div>
  );
}
