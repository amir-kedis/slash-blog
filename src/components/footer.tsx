import Image from "next/image";

import githubLogoSrc from "@/../public/github-logo.png";
import xLogoSrc from "@/../public/x-logo.png";

export default function Footer() {
  return (
    <footer className="font-playfair-display flex flex-col gap-2 md:flex-row md:justify-between items-center container mx-auto px-4 md:px-0 py-6 border-t border-gray-400">
      <p className="text-center">
        Design and Code are made by
        <a href="https://github.com/amir-kedis" className="font-bold">
          {" "}
          @Amir_Kedis{" "}
        </a>
        for the slash internship task
      </p>
      <ul className="flex gap-1">
        <a href="https://github.com/amir-kedis">
          <Image src={githubLogoSrc} alt="Github Logo" width={24} height={24} />
        </a>
        <a href="https://x.com/AmirKedis">
          <Image src={xLogoSrc} alt="X Logo" width={24} height={24} />
        </a>
      </ul>
    </footer>
  );
}
