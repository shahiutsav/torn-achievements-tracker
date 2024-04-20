"use client";

import React from "react";
import Link from "next/link";

import { HonorType } from "@/definitions/enums/honor-type";

import { MenuIcon, XIcon } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";

export default function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed top-0 flex h-12 w-full ">
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

function NavigationItems({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <nav className="max-h-[calc(100dvh-64px)] overflow-y-auto px-6">
      <ol>
        <li>
          <Button
            asChild
            onClick={() => setIsOpen(false)}
            variant={"ghost"}
            className="w-full"
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
                    onClick={() => setIsOpen(false)}
                    variant={"ghost"}
                    className="w-full justify-start"
                  >
                    <Link href={`?type=${key}`}>{value}</Link>
                  </Button>
                </li>
              );
            })}
          </ul>
        </li>
        <li>Medals</li>
      </ol>
    </nav>
  );
}
