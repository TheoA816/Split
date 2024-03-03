"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Bill from "./bill";
import { useEffect, useState } from "react";
import { get } from "@/lib/request";
import { BillOverview } from "@/lib/types";
import { useSession } from "next-auth/react";

export default function History() {
  const [history, setHistory] = useState<BillOverview[]>([]);

  const { data: session } = useSession();
  const user = session?.user as {
    authorization: string;
    id: string;
    username: string;
    profilePicture: string;
  };

  // TODO - given time, store in local storage / react context instead of pulling same data over and over
  useEffect(() => {
    const fetchHistory = async () => {
      const history = await get(
        "/history",
        {},
        { authorization: user.authorization, id: user.id }
      );
      setHistory(history);
    };
    fetchHistory();
  }, [user.authorization, user.id]);

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
        {history.map((bill) => (
          <Bill key={`${bill.title}-${bill.createdAt}`} bill={bill} />
        ))}
      </div>
    </div>
  );
}
