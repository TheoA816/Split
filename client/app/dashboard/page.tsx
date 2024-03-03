"use client";
import User from "@/app/dashboard/user/user";
import Friends from "@/app/dashboard/friends/friends";
import History from "@/app/dashboard/history/history";
import Navbar from "../header/navbar/nav";
import Popup from "./scan-receipt/popup";
import { useState } from "react";
import { headers } from "next/headers";

export default function Dashboard() {
  const [openPopup, setOpenPopup] = useState(false);
  const handleReceiptUpload = async () => {
    const res = await fetch('/read-receipt')
    const data = await res.json()
  }

  return (
    <div>
      <Navbar />
      <div>
        <User openPopup={() => setOpenPopup(true)} />
        <Friends />
        <History />
      </div>

      <Popup isOpen={openPopup} closePopup={() => setOpenPopup(false)} />
    </div>
  );
}
