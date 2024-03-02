import InputReceipt from "./input-receipt";
import UserCard from "./user-card";
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";

const DollarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const userCards = [
  {
    label: "Total Expenses",
    amount: 6969,
    bgClass: "bg-splitBlue25 bg-opacity-25",
    bgUrl: "/money_bag.png",
    icon: <DollarIcon />,
    iconClass: "bg-splitBlue",
    imgClass: "bottom-0 right-5",
  },
  {
    label: "People owed you",
    amount: 6969,
    bgClass: "bg-splitYellow25 bg-opacity-25",
    bgUrl: "/coins.png",
    icon: <ArrowTrendingUpIcon className="h-6 w-6" />,
    iconClass: "bg-splitYellow",
    imgClass: "bottom-5 right-0",
  },
  {
    label: "You owed",
    amount: 6969,
    bgClass: "bg-splitPink25 bg-opacity-25",
    bgUrl: "/rabbit_bill.png",
    icon: <ArrowTrendingDownIcon className="h-6 w-6" />,
    iconClass: "bg-splitPink",
    imgClass: "bottom-5 right-0",
  },
];

export default function User() {
  return (
    <div className="pb-8">
      <div className="flex justify-between items-center pb-8">
        <div>
          <div className="text-splitDarkBlue text-3xl">Hey, Username! 👋🏻</div>
          <div className="text-splitBlack50 opacity-50">
            This is what we&apos;ve got for you today
          </div>
        </div>
        <InputReceipt />
      </div>
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-evenly xl:justify-between items-center gap-4 w-full">
        {userCards.map((card) => (
          <UserCard
            key={card.label}
            label={card.label}
            amount={card.amount}
            bgClass={card.bgClass}
            bgUrl={card.bgUrl}
            icon={card.icon}
            iconClass={card.iconClass}
            imgClass={card.imgClass}
          />
        ))}
      </div>
    </div>
  );
}
