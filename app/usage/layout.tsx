import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usage",
  description:
    "Learn how to use DSA Stats to showcase your Data Structures and Algorithms skills on your GitHub profile. Follow our step-by-step guide to set up GitHub Actions for automated updates and customize your stats card with ease.",
};

export default function UsageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
