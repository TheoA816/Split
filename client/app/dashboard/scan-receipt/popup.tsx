"use client";
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
import { post } from "@/lib/request";

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
      const reader = new FileReader();

      reader.onloadend = () => {
        // Use reader.result which contains the file's data as a base64 encoded string
        setReceipt(reader.result as string);
      };

      reader.onerror = (error) => {
        console.error("Error reading file:", error);
        // Handle errors here
      };

      // Read the file as a Data URL (base64 encoded string)
      reader.readAsDataURL(files[0]);
    }
  };

  const handleReceiptUpload = async () => {
    try {
      const res = await fetch("http://localhost:3030/read-receipt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ receiptUrl: receipt }),
      });
      console.log(res);
    } catch (err) {
      console.error(err);
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
          <Button
            type="submit"
            className="bg-splitDarkBlue hover:bg-splitBlue"
            onClick={handleReceiptUpload}
          >
            Upload
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
