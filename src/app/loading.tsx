import Image from "next/image";

export default function Loading() {
  return (
    <div>
      <Image
        src="/loading.gif"
        alt="Loading"
        width={100}
        height={100}
        className="object-cover my-28 h-full w-[40dvw] mx-auto z-0"
      />
    </div>
  );
}
