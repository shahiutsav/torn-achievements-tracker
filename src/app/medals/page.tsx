import React from "react";
import MedalsList from "./medals-list";

const TORN_API_KEY = process.env.API_KEY;

async function getMedals() {
  const response = await fetch(
    `https://api.torn.com/torn/?selections=medals&key=${TORN_API_KEY}`,
  );

  const data = await response.json();
  return data.medals;
}
async function getAchievedMedals() {
  const response = await fetch(
    `https://api.torn.com/user/?selections=medals&key=${TORN_API_KEY}`,
  );

  const data = await response.json();
  return data.medals_awarded;
}

export default async function MedalsPage() {
  const medalsObject: MedalsObject = await getMedals();

  const achievedMedals = await getAchievedMedals();

  const medalsList = Object.entries(medalsObject).map(([key, value]) => {
    return {
      id: parseInt(key),
      name: value.name,
      description: value.description,
      type: value.type,
    };
  });

  return (
    <div className="pt-12 lg:pt-9">
      <MedalsList medals={medalsList} achievedMedals={achievedMedals} />
    </div>
  );
}
