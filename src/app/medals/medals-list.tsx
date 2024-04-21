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
import { MedalType } from "@/definitions/enums/medal-type";

export default function MedalsList({
  medals,
  achievedMedals,
}: {
  medals: Medal[];
  achievedMedals: number[];
}) {
  const filterParams = useSearchParams();
  const type = filterParams.get("type");

  let medalsOfType: Medal[] = medals;

  if (type) {
    const medalType = type as keyof typeof MedalType;
    medalsOfType = medals.filter((medal: Medal) => {
      return medal.type === medalType;
    });
  }

  return (
    <React.Fragment>
      <div className="container mx-auto">
        <ul className="grid gap-4 px-4 py-4 sm:grid-cols-2 lg:pt-0 xl:grid-cols-3 2xl:grid-cols-4">
          {medalsOfType.map((singleHonor: any, index: number) => {
            const honor = singleHonor as Honor;

            const isHonorAwarded = achievedMedals.includes(honor.id);

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
