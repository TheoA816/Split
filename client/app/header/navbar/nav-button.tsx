"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavButton({
  icon,
  url,
  label,
}: {
  icon: React.ReactNode;
  url: string;
  label: string;
}) {
  const pathname = usePathname();
  return (
    <Link href={url}>
      <Button
        className={clsx(
          "text-splitBlack50 bg-white opacity-50",
          "hover:bg-splitBlue25 hover:bg-opacity-25 hover:opacity-100 hover:text-splitDarkBlue",
          "rounded-full flex gap-3 h-14 px-6",
          {
            "bg-splitBlue25 bg-opacity-25 opacity-100 text-splitDarkBlue":
              pathname === url,
          }
        )}
      >
        {icon}
        {label}
      </Button>
    </Link>
  );
}
