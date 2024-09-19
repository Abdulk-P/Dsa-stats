import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { SidebarLayout } from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import BlindContextProvider from "@/lib/blind-context-provider";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
  title: {
    default: "DSA Stats for GitHub Readme Codolio",
    template: "%s - DSA Stats for GitHub Readme Codolio",
  },
  description:
    "Stand out in the competitive programming world with DSA Stats. Showcase your DSA skills, achievements, and contest participation on your GitHub profile. Perfect for job applications, hackathons, and sharing progress with the community.",
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "w3roI87t-dIyKe7ReAdSWUVpWCe7K1pP_EXUidsZ3xI",
    me: "KMaar",
  },
  authors: [{ name: "Abhishek Kumar", url: "https://kmaar.vercel.app" }],
  keywords: [
    "DSA Stats",
    "Data Structures and Algorithms",
    "DSA skills",
    "Abhishek Kumar",
    "Abhishek KMaar",
    "KMaar",
    "kmaar miscellaneous studio",
    "GitHub profile",
    "coding achievements",
    "contest participation",
    "problem-solving stats",
    "LeetCode",
    "Codeforces",
    "InterviewBit",
    "HackerRank",
    "GeeksforGeeks",
    "CodeChef",
    "customizable themes",
    "competitive programming",
    "coding profile",
    "programming portfolio",
    "showcase coding skills",
    "coding contests",
    "developer tools",
    "programming achievements",
    "coding progress",
    "interactive coding stats",
    "coding awards",
    "job applications",
    "hackathons",
    "coding community",
    "visualize coding skills",
    "embed GitHub profile",
    "coding stats display",
    "developer portfolio",
    "coding profile customization",
    "DSA progress tracking",
    "programming skill showcase",
    "GitHub README integration",
    "coding challenge stats",
    "algorithm skills display",
    "coding competition results",
    "programming contest tracker",
    "developer achievements",
    "coding milestones",
    "interactive coding dashboard",
    "visual coding portfolio",
    "developer profile enhancement",
    "coding journey visualization",
    "programming expertise",
    "coding performance metrics",
    "developer community",
    "coding profile themes",
    "DSA leaderboard",
    "coding profile badges",
    "programming accolades",
    "coding profile widgets",
    "developer recognition",
    "coding profile highlights",
    "programming profile badges",
    "coding profile awards",
    "developer profile stats",
    "coding profile customization",
    "programming profile themes",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BlindContextProvider>
            <div className="flex flex-col flex-1 w-full h-screen mx-auto md:flex-row max-w-screen-2xl">
              <SidebarLayout />
              <div className="flex flex-1">
                <BackgroundBeamsWithCollision>
                  <div className="flex flex-col flex-1 w-full h-full gap-2 p-2 border md:p-10 rounded-tl-2xl border-brand/50 dark:border-neutral-700 bg-background overflow-auto">
                    {children}
                    <Footer />
                  </div>
                </BackgroundBeamsWithCollision>
              </div>
            </div>
          </BlindContextProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
