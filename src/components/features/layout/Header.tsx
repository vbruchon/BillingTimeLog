"use client";
import { Typography } from "@/components/ui/Typography";
import Link from "next/link";
import { ThemeToggleButton } from "../theme/ThemeToggleButton";
import Image from "next/image";
import { useTheme } from "next-themes";

export function Header() {
  const { theme } = useTheme();
  console.log(theme);

  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-4 items-center">
          <Image
            src={
              theme === "dark"
                ? "/images/logo_billingTimeLog_white.png"
                : "/images/logo_billingTimeLog_blue.png"
            }
            width={40}
            height={30}
            alt="app logo"
          />
          <Typography variant="h3" as={Link} href="/">
            BilligTimeLog
          </Typography>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggleButton />
          </nav>
        </div>
      </div>
    </header>
  );
}
