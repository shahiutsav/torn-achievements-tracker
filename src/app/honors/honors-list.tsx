"use client";

import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSearchParams } from "next/navigation";
import { HonorType, getHonorTypeIndex } from "@/definitions/enums/honor-type";

export default function HonorsList({ honors }: { honors: Honor[] }) {
  const filterParams = useSearchParams();
  const type = filterParams.get("type");

  let honorsOfType: Honor[] = honors;

  if (type) {
    const honorType = type as keyof typeof HonorType;
    const valueOfHonorType = getHonorTypeIndex(HonorType[honorType]);
    honorsOfType = honors.filter(
      (honor: Honor) => honor.type === valueOfHonorType,
    );
  }

  return (
    <React.Fragment>
      <ul className="space-y-4 px-4 py-4">
        {honorsOfType.map((singleHonor: any, index: number) => {
          const honor = singleHonor as Honor;
          return (
            <li key={index}>
              <Card>
                <CardHeader>
                  <CardTitle>{honor.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{honor.description}</CardDescription>
                </CardContent>
              </Card>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}
