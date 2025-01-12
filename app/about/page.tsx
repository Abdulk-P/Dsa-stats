import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover DSA Tracker, the ultimate tool for showcasing your Data Structures and Algorithms skills on GitHub. Highlight your achievements, contest participation, and problem-solving stats with customizable themes. Join the community and let your coding skills shine!",
};

export default function AboutPage() {
  return (
    <main className="container items-center justify-center mx-auto mt-4 shadow rounded-2xl mb-4 pb-4">
      <div className="my-4 flex-col flex lg:grid lg:grid-cols-12 sm:mx-4 lg:mx-0">
        <div className="text-muted-foreground col-span-4">
          <h1 className="mb-8 lg:pl-8 tracking-tighter text-6xl">
            Welcome to <span className="text-brand">DSA Tracker</span>
          </h1>
        </div>
        <div className="col-start-6 col-span-5 text-2xl leading-[130%] text-muted-foreground font-medium space-y-7">
          <p className="space-y-4 flex flex-col">
            <span>
              DSA Tracker is your ultimate companion for showcasing your Data
              Structures and Algorithms (DSA) skills directly on your GitHub
              profile README. Whether you’re a competitive programmer, a coding
              enthusiast, or someone looking to highlight their problem-solving
              prowess, DSA Tracker provides a visually appealing and interactive
              way to display your achievements and progress.{" "}
            </span>
            <span>
              <span className="text-brand">Comprehensive Skill Display:</span>{" "}
              Showcase your DSA skills across multiple platforms including
              LeetCode, Codeforces, InterviewBit, HackerRank, GeeksforGeeks, and
              CodeChef.
            </span>
            <span>
              <span className="text-brand">Awards and Achievements:</span>{" "}
              Highlight the awards and recognitions you’ve earned through
              various contests and challenges.
            </span>
            <span>
              <span className="text-brand">Contest Participation:</span>Display
              the contests you’ve participated in, along with your rankings and
              performance.
            </span>
            <span>
              <span className="text-brand">Problem-Solving Stats:</span>Show the
              number of questions you’ve solved on different platforms, giving a
              clear picture of your dedication and expertise.
            </span>
            <span>
              <span className="text-brand">Customizable Themes:</span> Choose
              from a variety of predefined themes to match your personal style
              or customize your own theme through an interactive menu.
            </span>
            <span>
              <span className="text-brand">Interactive and User-Friendly:</span>
              Our intuitive interface makes it easy to set up and update your
              stats, ensuring your profile always reflects your latest
              achievements.
            </span>
            <span>
              Thank you to Pranjal Pratap Singh for inspiring this project.
              While DSA Tracker builds upon his original concept, it introduces
              several enhancements, including extensive customization options
              and additional features to better showcase your DSA skills. Thank
              you to Codolio for providing a platform that aggregates these
              stats into a single, public-friendly format.
            </span>
            <span>
              Thank you for choosing DSA Tracker! We are excited to be a part of
              your journey towards mastering Data Structures and Algorithms.
              Together, let’s showcase your skills and achievements, and make
              your profile shine. We look forward to supporting you every step
              of the way on your path to success.
            </span>
          </p>
          <div className="flex items-center gap-x-3">
            <div className="">
              <Image
                width={50}
                height={50}
                className="h-10 w-10 rounded-full"
                src="/KMaar.png"
                alt="Profile Headshot of Abhishek KMaar Kumar"
              />
            </div>
            <div className="text-balck dark:text-white text-base xl:text-xl 2xl:text-2xl font-medium flex flex-col">
              <p className="leading-tight">Abhishek Kumar</p>
              <span className="">
                <Link
                  className="leading-tight text-muted-foreground font-normal cursor-pointer hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://kmaar.vercel.app/"
                >
                  KMaar.vercel.app
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
