import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Bill from "./bill";

const bills = [{}, {}, {}, {}, {}, {}];

export default function History() {
  return (
    <div className="flex flex-col gap-5 text-splitDarkBlue pb-8">
      {/* Top Section */}
      <div className="flex justify-between">
        <span className="text-2xl">Split Bill History</span>
        <Link href="/history" className="flex">
          <span>See more</span>
          <ArrowRightIcon />
        </Link>
      </div>
      {/* Bills (TODO: update with actual bills) */}
      <div className="flex gap-3 overflow-scroll">
        {bills.map((bill) => (
          <Bill />
        ))}
      </div>
    </div>
  );
}
