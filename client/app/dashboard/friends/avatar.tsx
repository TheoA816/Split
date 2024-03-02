import Image from "next/image";

export default function Avatar({
  url,
  username,
}: {
  url: string;
  username: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <Image src={url} width={80} height={80} alt="User Avatar" />
      <span>{username}</span>
    </div>
  );
}
