import React from "react";
import HonorsList from "./honors-list";

const TORN_API_KEY = process.env.API_KEY;

async function getHonors() {
  const response = await fetch(
    `https://api.torn.com/torn/?selections=honors&key=${TORN_API_KEY}`,
  );

  const data = await response.json();
  return data.honors;
}
async function getAchievedHonors() {
  const response = await fetch(
    `https://api.torn.com/user/?selections=honors&key=${TORN_API_KEY}`,
  );

  const data = await response.json();
  return data.honors_awarded;
}

export default async function HonorsPage() {
  const honorsObject: HonorsObject = await getHonors();

  const achievedHonors = await getAchievedHonors();

  const honorsList = Object.entries(honorsObject).map(([key, value]) => {
    return {
      id: parseInt(key),
      name: value.name,
      description: value.description,
      type: value.type,
    };
  });

  return (
    <div className="pt-12 lg:pt-9">
      <HonorsList honors={honorsList} achievedHonors={achievedHonors} />
    </div>
  );
}
