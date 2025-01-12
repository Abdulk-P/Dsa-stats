import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-orange-50/90 dark:bg-neutral-800/90 py-6 rounded-2xl ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Image
              src="/logo.png"
              alt="DSA Tracker Readme Github Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-xl font-semibold text-brand">
              DSA Tracker
            </span>
          </div>

          <div className="text-center mb-4 md:mb-0">
            <p className="text-sm">
              <span className="w-fit flex-nowrap whitespace-nowrap">
                &copy; {new Date().getFullYear()}{" "}
              </span>
              <Link
                className="relative w-full overflow-y-hidden hover:underline hover:underline-offset-2 "
                target="_blank"
                rel="noopener noreferrer"
                href="https://kmaar.vercel.app/"
              >
                <span className="font-bold tracking-wider hover:underline hover:underline-offset-2 text-brand">
                  Abhishek Kumar
                </span>
              </Link>
            </p>
            <p className="text-sm">
              <p className="w-fit flex-nowrap whitespace-nowrap">
                All rights reserved | Powered by
              </p>
              <Link
                className="relative w-full overflow-y-hidden hover:underline hover:underline-offset-2 "
                target="_blank"
                rel="noopener noreferrer"
                href="https://kmstudio.vercel.app/"
              >
                <span className="font-bold tracking-wider hover:underline hover:underline-offset-2 text-brand">
                  KMaar Miscellaneous Studio
                </span>
              </Link>
              <Link
                className="relative w-full overflow-y-hidden hover:underline hover:underline-offset-2 "
                target="_blank"
                rel="noopener noreferrer"
                href="https://dsastats.site/"
              >
                <span className="font-bold tracking-wider hover:underline hover:underline-offset-2 text-brand">
                  dsaStats
                </span>
              </Link>
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="/privacy-policy"
              className="text-sm text-black hover:text-brand dark:text-white dark:hover:text-brand hover:underline hover:underline-offset-2"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://github.com/SudoKMaar/dsa-stats-github-readme"
              className="text-sm text-black hover:text-brand dark:text-white dark:hover:text-brand hover:underline hover:underline-offset-2"
            >
              Contribute on GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
