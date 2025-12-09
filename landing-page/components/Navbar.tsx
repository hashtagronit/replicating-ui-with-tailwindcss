"use client";
import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { IconLayoutSidebar, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DarkModeToggle } from "./darkModeToggle";

const navlinks: { title: string; href: string }[] = [
  { title: "Features", href: "/" },
  { title: "Product", href: "/" },
  { title: "Socials", href: "/" },
  { title: "Pricing", href: "/" },
];

export const Navbar = () => {
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
};

export const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between px-4 py-2 md:hidden">
      <Logo />
      <div className="flex items-center justify-center gap-2">
        <DarkModeToggle />
        <button onClick={() => setOpen(!open)}>
          <IconLayoutSidebar className="size-4" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 h-full w-full px-4 py-2"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              backdropFilter: "blur(10px)",
            }}
            exit={{
              opacity: 0,
              backdropFilter: "blur(0px)",
            }}
            transition={{ duration: 0.3 }}
          >
            <Logo />
            <button
              className="absolute top-2 right-2"
              onClick={() => setOpen(!open)}
            >
              <IconX className="" />
            </button>
            <div className="my-10 flex flex-col gap-6">
              {navlinks.map((item, index) => (
                <motion.div
                  key={index + item.title}
                  initial={{
                    opacity: 0,
                    x: -8,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.1,
                  }}
                >
                  <Link
                    key={index}
                    href={item.href}
                    className="text-2xl font-medium text-neutral-600 dark:text-neutral-400"
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="absolute right-3 bottom-3">
              <Link
                href="#"
                className="px-4 text-sm font-medium text-neutral-600 dark:text-neutral-400"
              >
                Log in
              </Link>
              <Button>Sign up</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const DesktopNavbar = () => {
  return (
    <Container className="hidden items-center justify-between py-4 lg:flex">
      <Logo />
      <div className="flex items-center gap-10">
        {navlinks.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-sm font-medium text-neutral-600 dark:text-neutral-400"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="relative flex items-center gap-4">
        <DarkModeToggle />
        <Link
          href="#"
          className="px-4 text-sm font-medium text-neutral-600 dark:text-neutral-400"
        >
          Log in
        </Link>
        <Button>Sign up</Button>
      </div>
    </Container>
  );
};
