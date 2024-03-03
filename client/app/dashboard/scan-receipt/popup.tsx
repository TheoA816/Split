import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { ChangeEvent, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

type PopupProps = {
  isOpen: boolean;
  closePopup: () => void;
};

export default function Popup({ isOpen }: PopupProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [receipt, setReceipt] = useState("");

  const handleFileButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      const fileUrl = URL.createObjectURL(files[0]);
      setReceipt(fileUrl);

      // Optional: Revoke the object URL to free up memory when the component unmounts or you're done with the URL
      return () => URL.revokeObjectURL(fileUrl);
    }
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-[425px] text-splitDarkBlue">
        <DialogHeader>
          <DialogTitle>Upload a receipt</DialogTitle>
        </DialogHeader>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          style={{ display: "none" }}
        />

        <button
          className="border-2 border-dashed flex flex-col items-center"
          onClick={handleFileButtonClick}
        >
          {receipt ? (
            <Image src={receipt} alt="Receipt" width={500} height={500} />
          ) : (
            <ArrowUpOnSquareIcon className="w-48 h-48" />
          )}
        </button>

        <DialogFooter>
          <Button type="submit" className="bg-splitDarkBlue hover:bg-splitBlue">
            Upload
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
