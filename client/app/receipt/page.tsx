import React from "react";
import Navbar from "../header/navbar/nav";

export default function page() {
  const items = [{ name: "Random item #1", qty: 2, price: 6.9 }];

  return (
    <div>
      <Navbar />
      <div>Your receipt</div>
      <div className="flex flex-col">
        <div>Maccas Bill</div>
        <div>Randwick NSW 2031</div>
        <div>Items</div>
        {items.map((item, idx) => (
          <div key={idx} className="flex">
            <div>
              {item.name} ({item.qty})
            </div>
            <div>{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
