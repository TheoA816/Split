import { BillOverview } from "@/lib/types";
import { format } from "date-fns";
import Image from "next/image";

export default function Bill({ bill }: { bill: BillOverview }) {
  const total = bill.items.reduce((acc, item) => acc + item.cost, 0);

  return (
    <div className="min-w-80 shadow text-splitDarkBlue">
      {/* Top section */}
      <div className="flex items-center justify-between py-3 px-5">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-splitPink"></div>
          {/* Title */}
          <div>{bill.title}</div>
        </div>
        <div className="font-bold">${total} AUD</div>
      </div>
      {/* Middle section */}
      <div className="flex justify-between items-center border-y border-splitBlue py-3 px-5">
        <div className="flex ml-2">
          {/* Get Bill participants and profile pics */}
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
      {/* Bottom section */}
      <div className="flex justify-between items-center py-3 px-5">
        <div className="text-splitBlack50 opacity-50 text-sm">
          {format(bill.createdAt, "MMM Do yyyy • HH:mm")}
        </div>
        {/* Add view function */}
        <button className="border border-splitBlack50 border-opacity-50 rounded-full px-6 py-1 text-splitDarkBlue">
          View Details
        </button>
      </div>
    </div>
  );
}
