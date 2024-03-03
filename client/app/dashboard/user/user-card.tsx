import { inter } from "@/app/fonts";

export default function UserCard({
  label,
  amount,
  bgUrl,
  bgClass,
  icon,
  iconClass,
  imgClass,
}: {
  label: string;
  amount: number;
  bgUrl: string;
  bgClass: string;
  icon: React.ReactNode;
  iconClass: string;
  imgClass: string;
}) {
  return (
    <div
      className={`flex p-10 rounded-2xl min-w-96 w-3/12 relative ${bgClass}`}
    >
      <div className="flex flex-col gap-12">
        <div
          className={`flex flex-col gap-2 text-splitDarkBlue ${inter.className}`}
        >
          <span>{label}</span>
          <span className="font-bold text-4xl">${amount}.00</span>
        </div>
        <div
          className={`${iconClass} h-10 w-10 rounded-full flex items-center justify-center text-white`}
        >
          {icon}
        </div>
      </div>
      <img
        src={`${bgUrl}`}
        alt="BgImg"
        className={`absolute -z-10 ${imgClass}`}
      ></img>
    </div>
  );
}
