import React from "react";

export default function popup() {
  const friends = ["Michael", "Merry", "Esther", "Vella"];

  return (
    <div className="border fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-splitWhite w-96 h-80 px-10 py-10">
      <div className="font-bold text-3xl">Friends</div>
      <div className="flex flex-col gap-3 mt-3">
        {friends.map((friend, idx) => (
          <div className="flex items-center" key={idx}>
            <div className="w-8 h-8 bg-splitDarkBlue rounded-full"></div>
            <div>{friend}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
