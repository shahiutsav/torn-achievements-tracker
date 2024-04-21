"use client";

import React from "react";
import Link from "next/link";

import { HonorType } from "@/definitions/enums/honor-type";

import { MenuIcon, XIcon } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { MedalType } from "@/definitions/enums/medal-type";

export default function NavigationBar() {
  return (
    <React.Fragment>
      <TopBar />
      <Sidebar />
    </React.Fragment>
  );
}

function TopBar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed top-0 flex h-12 w-full lg:hidden">
      <div className="flex flex-1 items-center justify-end bg-slate-800/50 px-3 backdrop-blur-md">
        <Drawer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          onOpenChange={setIsOpen}
        >
          <DrawerTrigger>
            <MenuIcon />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerClose>
                <XIcon className="absolute right-4 top-4" />
              </DrawerClose>
            </DrawerHeader>
            <NavigationItems
              className="max-h-[calc(100dvh-64px)] overflow-y-auto"
              setIsOpen={(isOpen: boolean) => {
                setIsOpen(isOpen);
              }}
            />
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="fixed left-0 top-0 hidden h-dvh w-56 overflow-y-auto border-r py-9 lg:block">
      <NavigationItems />
    </div>
  );
}

function NavigationItems({
  setIsOpen,
  className,
}: {
  setIsOpen?: (isOpen: boolean) => void | undefined;
  className?: string;
}) {
  return (
    <nav className={cn(`px-6`, className)}>
      <ol>
        <li>
          <Button
            asChild
            onClick={() => setIsOpen && setIsOpen(false)}
            variant={"ghost"}
            className="w-full lg:justify-start"
          >
            <h1 className="text-xl font-bold">
              <Link href={"/honors"}>Honors</Link>
            </h1>
          </Button>
          <ul className="mt-3">
            {/* Map from the HonorType enum */}
            {Object.entries(HonorType).map(([key, value], index) => {
              return (
                <li key={index}>
                  <Button
                    asChild
                    onClick={() => setIsOpen && setIsOpen(false)}
                    variant={"ghost"}
                    className="w-full justify-start"
                  >
                    <Link href={`/honors?type=${key}`}>{value}</Link>
                  </Button>
                </li>
              );
            })}
          </ul>
        </li>
        <li>
          <Button
            asChild
            onClick={() => setIsOpen && setIsOpen(false)}
            variant={"ghost"}
            className="w-full lg:justify-start"
          >
            <h1 className="mt-6 text-xl font-bold">
              <Link href={"/medals"}>Medals</Link>
            </h1>
          </Button>
          <ul className="mt-3">
            {/* Map from the MedalType enum */}
            {Object.entries(MedalType).map(([key, value], index) => {
              return (
                <li key={index}>
                  <Button
                    asChild
                    onClick={() => setIsOpen && setIsOpen(false)}
                    variant={"ghost"}
                    className="w-full justify-start"
                  >
                    <Link href={`/medals?type=${key}`}>{value}</Link>
                  </Button>
                </li>
              );
            })}
          </ul>
        </li>
      </ol>
    </nav>
  );
}
