"use client";

import React, { useEffect, useState } from "react";
import Card from "./card";
import Navbar from "../header/navbar/nav";
import { useSession } from "next-auth/react";
import { get } from "@/util/request";
import { BillOverview } from "@/lib/types";

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
    <>
      <Navbar />
      <div className="">
        <div className="font-bold text-2xl text-splitDarkBlue">
          Split bill history
        </div>
        <div className="grid grid-cols-2 mt-3 gap-x-5 gap-y-5">
          {history.map((bill) => (
            <Card key={`${bill.title}-${bill.createdAt}`} bill={bill} />
          ))}
        </div>
      </div>
    </>
  );
}
