import React from "react";
import Navbar from "../header/navbar/nav";
import Friend from "./friend";
import receipt from "@/public/receipt.png";
import avatar1 from "@/public/avatar_1.png";
import avatar2 from "@/public/avatar_2.png";

export default function page() {
  const items = [{ name: "Random item #1", qty: 2, price: 6.9 }];
  const friends = [
    { name: "Esther", isPaid: true, avatar: avatar1 },
    { name: "Merry", isPaid: false, avatar: avatar2 },
  ];

  return (
    <div className="px-12">
      <Navbar />
      <div className="flex text-splitBlue gap-20">
        <div className="w-1/2">
          <div className="flex flex-col">
            <div className="text-2xl font-bold text-splitDarkBlue mb-5">
              Your receipt
            </div>
            <div className="flex flex-col border border-splitBlue px-10 gap-10 py-10">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-splitDarkBlue">
                  Maccas Bill
                </div>
                <div className="text-sm">Randwick NSW 2031</div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-xl text-splitDarkBlue font-bold">
                  Items
                </div>
                {items.map((item, idx) => (
                  <div key={idx} className="flex justify-between flex-1">
                    <div>
                      {item.name} ({item.qty})
                    </div>
                    <div>{item.price}</div>
                  </div>
                ))}
                <div className="flex justify-between">
                  <div className="font-bold text-lg text-splitDarkBlue">
                    Total
                  </div>
                  <div className="font-bold text-lg text-splitDarkBlue">
                    $6.9
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <button className="bg-splitBlue text-splitWhite rounded-md h-10">
                  Select Items
                </button>
                <button className="bg-splitWhite text-splitBlue rounded-md h-10 border border-splitBlue">
                  Cancel Receipt
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 ml-10">
          <div>Recent Friends</div>
          <div className="flex flex-col gap-3">
            {friends.map((friend, idx) => (
              <Friend
                key={idx}
                name={friend.name}
                isPaid={friend.isPaid}
                avatar={friend.avatar}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
