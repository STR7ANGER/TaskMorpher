"use client";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { UserMenu } from "./UserMenu";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
    >
      <div className="ml-64 flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-2 font-bold text-xl hover:text-primary transition-colors"
        >
          Task Morpher
        </Link>
        <div className="flex items-center gap-4 mr-34">
          <UserMenu />
          <div className="border-l dark:border-gray-800 pl-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
