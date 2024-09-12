"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Contact, MessageSquareWarning, StoreIcon, Users2 } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export function SidebarLayout() {
  const links = [
    {
      label: "Home",
      href: "/",
      icon: (
        <StoreIcon className="flex-shrink-0 w-6 h-6 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "About Us",
      href: "/about",
      icon: (
        <Users2 className="flex-shrink-0 w-6 h-6 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Usage",
      href: "/usage",
      icon: (
        <MessageSquareWarning className="flex-shrink-0 w-6 h-6 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Contact",
      href: "/contact",
      icon: (
        <Contact className="flex-shrink-0 w-6 h-6 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="flex flex-col gap-2 mt-8">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "",
                href: "#",
                icon: <ModeToggle />,
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 flex items-center py-1 space-x-2 text-xl font-normal text-brand"
    >
      <Image src="/logo.png" alt="DSA Stats Logo" height={38} width={38} />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-black whitespace-pre text-brand"
      >
        DSA Stats
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="/"
      className="relative z-20 flex items-center py-1 space-x-2 text-sm font-black text-brand"
    >
      <Image src="/logo.png" alt="DSA Stats Logo" height={38} width={38} />
    </Link>
  );
};
