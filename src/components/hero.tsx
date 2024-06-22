/* ================================================================================
 *
 *
 *    ███████╗ █████╗ ███╗   ██╗ ██████╗██╗   ██╗ ██╗  ██╗███████╗██████╗  ██████╗
 *    ██╔════╝██╔══██╗████╗  ██║██╔════╝╚██╗ ██╔╝ ██║  ██║██╔════╝██╔══██╗██╔═══██╗
 *    █████╗  ███████║██╔██╗ ██║██║      ╚████╔╝  ███████║█████╗  ██████╔╝██║   ██║
 *    ██╔══╝  ██╔══██║██║╚██╗██║██║       ╚██╔╝   ██╔══██║██╔══╝  ██╔══██╗██║   ██║
 *    ██║     ██║  ██║██║ ╚████║╚██████╗   ██║    ██║  ██║███████╗██║  ██║╚██████╔╝
 *    ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝   ╚═╝    ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝
 *
 *   This Hero section is one of the most appealing parts of the task.
 *
 * ============================================================================= */

import Image from "next/image";
import Link from "next/link";

import { useCursor } from "@/utils/CursorContext";

import post1Src from "@/../public/post-1-image.png";
import post2Src from "@/../public/post-2-image.png";

export default function Hero() {
  const { setCursorText, setCursorScale } = useCursor();

  const handleMouseEnter = () => {
    setCursorText("READ");
    setCursorScale(5);
  };

  const handleMouseLeave = () => {
    setCursorText("");
    setCursorScale(1);
  };

  return (
    <div
      onMouseOver={handleMouseEnter}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="grid min-h-[90dvh] md:grid-cols-2 lg:grid-cols-4 font-playfair-display"
    >
      <Link href="/posts/1" className="relative flex min-h-[25dvh]">
        <p className="z-20 relative text-gray-100 font-bold mt-auto w-full text-xl text-center py-4 underline">
          Seeking validation as an artist.
        </p>
        <div className="w-full h-full absolute bg-primary-red-50 z-10 top-0 left-0 mix-blend-hue"></div>
        <Image
          src={post1Src}
          alt="Post 1"
          placeholder="blur"
          fill
          className="object-cover h-full w-full z-0"
        />
      </Link>
      <Link
        href="/posts/2"
        className="text-primary-red-100 bg-primary-red-900 px-4 flex flex-col justify-between py-4 min-h-[25dvh]"
      >
        <h2 className="underline text-clamp font-bold leading-snug">
          My Version of the truth
        </h2>
        <span className="self-end font-bold">READ -&gt;</span>
      </Link>
      <Link
        href="/posts/3"
        className="relative flex flex-col justify-between min-h-[25dvh]"
      >
        <p className="z-20 relative text-primary-green-100 w-full text-center py-4 ">
          art work by: cottonbro studio
        </p>
        <p className="z-20 relative text-gray-100 font-bold w-full text-xl text-center py-4 underline">
          Art in the modern world. an analysis by Amir.
        </p>
        <div className="w-full h-full absolute bg-primary-green-50 z-10 top-0 left-0 mix-blend-hue"></div>
        <Image
          src={post2Src}
          alt="Post 2"
          placeholder="blur"
          fill
          className="object-cover h-full w-full z-0"
        />
      </Link>
      <Link
        href="/posts/4"
        className="text-primary-green-100 bg-primary-green-900 px-4 flex flex-col justify-between py-4 min-h-[25dvh]"
      >
        <h2 className="underline text-clamp font-bold leading-snug">
          What makes art art.
        </h2>
        <span className="self-end font-bold">READ -&gt;</span>
      </Link>
    </div>
  );
}
