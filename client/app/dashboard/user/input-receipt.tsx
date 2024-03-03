import { Button } from "@/components/ui/button";

const ScanIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9 3H3V9H5V5H9V3ZM3 21V15H5V19H9V21H3ZM15 3V5H19V9H21V3H15ZM19 15H21V21H15V19H19V15ZM7 7H11V11H7V7ZM7 13H11V17H7V13ZM17 7H13V11H17V7ZM13 13H17V17H13V13Z"
      fill="currentColor"
    />
  </svg>
);

const EditIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5L2 22l1.5-5.5z"
    ></path>
  </svg>
);

export default function InputReceipt() {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Button className="py-4 px-8 flex gap-3 rounded-full text-white bg-splitDarkBlue text-md hover:bg-splitDarkBlue/75">
        <ScanIcon />
        Scan a receipt
      </Button>
      <Button className="py-4 px-8 flex gap-3 rounded-full text-splitDarkBlue bg-white border border-splitDarkBlue text-md hover:text-splitDarkBlue/50 hover:bg-transparent">
        <EditIcon />
        Input manually
      </Button>
    </div>
  );
}
