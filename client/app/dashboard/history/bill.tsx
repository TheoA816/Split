export default function Bill() {
  return (
    <div className="w-80 shadow text-splitDarkBlue">
      {/* Top section */}
      <div className="flex items-center justify-between py-3 px-5">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-splitPink"></div>
          {/* Title */}
          <div>Maccas</div>
        </div>
        <div className="font-bold">$69.00 AUD</div>
      </div>
      {/* Middle section */}
      <div className="flex justify-between items-center border-y border-splitBlue py-3 px-5">
        <div className="flex ml-2">
          {/* Get Bill participants and profile pics */}
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="w-10 h-10 rounded-full bg-splitBlue -mx-2 border-white border"
            ></div>
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
          {/* Date FNS this */}
          Mar 1st 2024 . 00:33
        </div>
        {/* Add view function */}
        <button className="border border-splitBlack50 border-opacity-50 rounded-full px-6 py-1 text-splitDarkBlue">
          View Details
        </button>
      </div>
    </div>
  );
}
