import Image, { StaticImageData } from "next/image";
import React from "react";

type friendProps = {
  name: string;
  isPaid: boolean;
  avatar: StaticImageData;
};

export default function friend({ name, isPaid, avatar }: friendProps) {
  const PaidOffLogo = () => {
    return (
      <div className="w-14 h-14 rounded-full bg-splitBlue flex flex-col items-center justify-center text-splitWhite">
        <div>Paid</div>
        <div>Off!</div>
      </div>
    );
  };

  const NotPaidOffLogo = () => {
    return (
      <div className="w-14 h-14 rounded-full border-2 border-splitDarkBlue flex flex-col items-center justify-center text-splitWhite border-dashed"></div>
    );
  };

  return (
    <div className="flex bg-[#CADFF4] items-center justify-between px-5 rounded-md">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-splitBlue">
          <Image src={avatar} alt="avatar" />
        </div>
        <div className="text-splitDarkBlue font-semibold">{name}</div>
      </div>
      <div className="flex flex-col">
        <div>Owes</div>
        <div className="text-3xl text-splitDarkBlue font-bold">$69.00</div>
      </div>
      <div className="flex flex-col">
        <div>Paid</div>
        <div className="text-3xl text-splitDarkBlue font-bold">$69.00</div>
      </div>
      {isPaid ? <PaidOffLogo /> : <NotPaidOffLogo />}
    </div>
  );
}
