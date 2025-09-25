import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { DownloadIcon, CopyIcon, CheckIcon } from "@/assets/images";
import { envConfig } from "@/utils/envConfig";

export const Header = () => {
  const { email, linkedin, github } = envConfig;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (email) {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 5000);
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 w-full px-4 sm:px-6 lg:px-10 flex items-center justify-between backdrop-blur-md">
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="hidden sm:flex items-center gap-2">
          <h1 className="text-xs sm:text-sm">{email ?? "No email provided"}</h1>

          <div className="relative">
            <button
              onClick={handleCopy}
              disabled={!email}
              className="bg-[var(--color-primary)] text-xs sm:text-sm px-3 py-1 h-8 flex justify-center items-center font-medium rounded-full gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {copied ? (
                <>
                  Copied
                  <Image
                    src={CheckIcon}
                    alt="Copied"
                    width={12}
                    height={12}
                    className="sm:w-[15px] sm:h-[15px]"
                  />
                </>
              ) : (
                <>
                  Copy
                  <Image
                    src={CopyIcon}
                    alt="Copy"
                    width={12}
                    height={12}
                    className="sm:w-[15px] sm:h-[15px]"
                  />
                </>
              )}
            </button>

            {copied && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 flex flex-col items-center">
                <span className="text-[var(--color-btn-bg-primary)] bg-[var(--color-secondary)] text-xs px-2 py-1 rounded shadow-md whitespace-nowrap">
                  Copied!
                </span>
                <span className="w-2 h-2 bg-[var(--color-secondary)] rotate-45 -mt-7"></span>
              </div>
            )}
          </div>

          <Link
            href="/resume.pdf"
            download
            className="hidden sm:flex bg-[var(--color-primary)] text-xs sm:text-sm px-3 py-1 h-8 justify-center items-center font-medium rounded-full gap-2 cursor-pointer"
          >
            Resume
            <Image
              src={DownloadIcon}
              alt="Download Resume"
              width={12}
              height={12}
              className="sm:w-[15px] sm:h-[15px]"
            />
          </Link>
        </div>

        <div className="sm:hidden flex items-center justify-center">
          <h1 className="text-[10px] truncate">
            {email ?? "No email provided"}
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs md:text-sm font-medium">
        <Link
          href={linkedin ?? "#"}
          target="_blank"
          className="hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
          aria-disabled={!linkedin}
        >
          LinkedIn
        </Link>
        <span className="inline">/</span>
        <Link
          href={github ?? "#"}
          target="_blank"
          className="hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
          aria-disabled={!github}
        >
          GitHub
        </Link>
      </div>
    </nav>
  );
};
