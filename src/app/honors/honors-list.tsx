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
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export default function HonorsList({
  honors,
  achievedHonors,
}: {
  honors: Honor[];
  achievedHonors: number[];
}) {
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
      <div className="container mx-auto">
        <ul className="grid gap-4 px-4 py-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {honorsOfType.map((singleHonor: any, index: number) => {
            const honor = singleHonor as Honor;

            const isHonorAwarded = achievedHonors.includes(honor.id);

            return (
              <li key={index}>
                <Card className={cn("h-full", isHonorAwarded && "opacity-50")}>
                  <CardHeader>
                    <CardTitle className={"flex justify-between"}>
                      <div
                        className={cn(
                          isHonorAwarded && "text-slate-500 line-through",
                        )}
                      >
                        {honor.name}
                      </div>
                      {isHonorAwarded && <Badge>Awarded</Badge>}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{honor.description}</CardDescription>
                  </CardContent>
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
}
