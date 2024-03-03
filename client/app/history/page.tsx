import React from "react";
import Card from "./card";
<<<<<<< HEAD

export default function History() {
  return (
    <div className="space-y-4">
      <div className="font-bold text-2xl text-splitDarkBlue">
        Split bill history
=======
import Navbar from "../header/navbar/nav";

export default function History() {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="font-bold text-2xl text-splitDarkBlue">
          Split bill history
        </div>
        <div className="grid grid-cols-2 mt-3 gap-x-5 gap-y-5">
          {Array.from({ length: 8 }).map((_, idx) => (
            <Card key={idx} />
          ))}
        </div>
>>>>>>> deb9846 (padding changes + add navbar in pages individually)
      </div>
    </>
  );
}
