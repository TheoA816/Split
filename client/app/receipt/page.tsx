import React from "react";
import Navbar from "../header/navbar/nav";
import Friend from "./friend";

export default function page() {
  const items = [{ name: "Random item #1", qty: 2, price: 6.9 }];

  return (
    <div>
      <Navbar />
      <div className="flex text-splitBlue gap-20">
        <div className="w-1/2">
          <div className="flex flex-col">
            <div>Your receipt</div>
            <div className="flex flex-col border border-splitBlue px-10">
              <div className="flex flex-col items-center">
                <div>Maccas Bill</div>
                <div>Randwick NSW 2031</div>
              </div>
              <div className="flex flex-col">
                <div>Items</div>
                {items.map((item, idx) => (
                  <div key={idx} className="flex justify-between flex-1">
                    <div>
                      {item.name} ({item.qty})
                    </div>
                    <div>{item.price}</div>
                  </div>
                ))}
                <div className="flex justify-between">
                  <div>Total</div>
                  <div>$6.9</div>
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
        <div className="flex-1">
          <div>Recent Friends</div>
          <Friend />
        </div>
      </div>
    </div>
  );
}
