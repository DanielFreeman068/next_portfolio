import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div>
      <div className="flex justify-between items-center bg-gray-800 py-4">
        <div className="flex items-center gap-4">
          <Image src='/logo.png' alt="logo" width={50} height={50}/>
          <p className="font-courier text-white text-xl whitespace-nowrap overflow-hidden w-[8.5em] border-r-2 border-orange-500 animate-typing animate-blink">Daniel Freeman</p>
        </div>
        <div className="flex items-center gap-8 mr-4">
          <Link className="text-white font-segoe text-xl" href="/home">Home</Link>
          <Link className="text-white font-segoe text-xl" href="/about">About me</Link>
          <Link className="text-white font-segoe text-xl" href="/projects">Projects</Link>
        </div>
      </div>
    </div>
    </>
  );
}
