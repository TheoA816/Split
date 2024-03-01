import { MoonIcon } from "@heroicons/react/24/outline";

// TODO: Toggle Dark Mode later

export default function ToggleTheme() {
  return (
    <div className="rounded-full h-fit p-2 text-splitDarkBlue border border-splitDarkBlue">
      <MoonIcon className="h-5 w-5" />
    </div>
  );
}
