import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { DownloadIcon, CopyIcon, CheckIcon } from "@/assets/images";

export const Header = () => {
  const email = "rajuniranjan1910@gmail.com";
  const linkedin = "https://www.linkedin.com/in/RajuNiranjan";
  const github = "https://github.com/RajuNiranjan";

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    });
  };

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50
        h-14 w-full px-10
        flex items-center justify-between
        backdrop-blur-md 
      "
    >
      <div className="flex items-center gap-4 relative">
        <h1 className="text-sm">{email}</h1>

        <div className="relative">
          <button
            onClick={handleCopy}
            className="bg-white text-xs px-3 py-1 h-8 flex justify-center items-center font-medium rounded-full gap-2 cursor-pointer"
          >
            {copied ? (
              <>
                Copied
                <Image src={CheckIcon} alt="Copied" width={15} height={15} />
              </>
            ) : (
              <>
                Copy
                <Image src={CopyIcon} alt="Copy" width={15} height={15} />
              </>
            )}
          </button>

          {copied && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 flex flex-col items-center">
              <span className="bg-black text-white text-xs px-2 py-1 rounded shadow-md whitespace-nowrap">
                Copied!
              </span>
              <span className="w-2 h-2 bg-black rotate-45 -mt-7"></span>
            </div>
          )}
        </div>

        <button className="bg-white text-xs px-3 py-1 h-8 flex justify-center items-center font-medium rounded-full gap-2 cursor-pointer">
          Resume
          <Image src={DownloadIcon} alt="" width={15} height={15} />
        </button>
      </div>

      <div className="text-sm font-medium">
        <Link href={linkedin} target="_blank">
          LinkedIn
        </Link>{" "}
        /{" "}
        <Link href={github} target="_blank">
          GitHub
        </Link>
      </div>
    </nav>
  );
};
