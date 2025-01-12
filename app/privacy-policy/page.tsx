import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Explore the Privacy Policy of DSA Tracker to understand how we protect your data and respect your privacy. Learn about our commitment to transparency and security.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="container items-center justify-center mx-auto mt-4 shadow rounded-2xl mb-4 pb-4">
      <div className="my-4 flex-col flex lg:grid lg:grid-cols-12 sm:mx-4 lg:mx-0">
        <div className="text-muted-foreground col-span-4">
          <h1 className="mb-8 lg:pl-8 tracking-tighter text-6xl">
            Privacy <span className="text-brand"> Policy</span>
          </h1>
        </div>
        <div className="col-start-6 col-span-5 text-2xl leading-[130%] text-muted-foreground font-medium space-y-7">
          <p className="space-y-4 flex flex-col">
            <span>
              Welcome to DSA Tracker! We value your privacy and are committed to
              protecting your personal information. This Privacy Policy outlines
              how we collect, use, and safeguard your data when you use our web
              app. Please take a moment to review our privacy policy:
            </span>
            <span>
              <span className="text-brand">Information Collection:</span> When
              you use our platform, we may collect certain information, such as
              your browser type, and usage patterns. This data helps us improve
              our services and enhance your experience.
            </span>
            <span>
              <span className="text-brand">Cookies:</span> We dont use cookies
              to track user interactions and provide personalized content.
            </span>
            <span>
              <span className="text-brand">Data Security:</span> We implement
              industry-standard security measures to safeguard your data.
              However, please be aware that no system is entirely foolproof, and
              we encourage you to take precautions when sharing personal
              information online.
            </span>
            <span>
              <span className="text-brand">Third-Party Services:</span> DSA
              Stats may link to external websites or services such as Codolio.
              Our privacy policy does not cover these third-party sites, so
              review their policies separately.
            </span>
            <span>
              <span className="text-brand">Children’s Privacy:</span> Our
              platform is safe for children.
            </span>
            <span>
              <span className="text-brand">Updates:</span> We may update this
              privacy policy periodically. Check back regularly to stay informed
              about any changes.
            </span>
            <span>
              If you have any questions or concerns, feel free to reach out to
              our team. Thank you for trusting DSA Tracker!
            </span>
          </p>
          <p className="text-sm">
            Last Updated on 16<sup>th</sup> September 2024
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
            <div className="text-black dark:text-white text-base xl:text-xl 2xl:text-2xl font-medium flex flex-col">
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
