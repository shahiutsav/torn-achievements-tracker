export enum HonorType {
  misc = "Misc",
  defaults = "Defaults",
  weapons = "Weapons",
  camo = "Camo",
  education = "Education",
  crimes = "Crimes",
  drugs = "Drugs",
  travel = "Travel",
  attacking = "Attacking",
  casino = "Casino",
  gym = "Gym",
  commitment = "Commitment",
  level = "Level",
  competitions = "Competitions",
  money = "Money",
  jail_hospital = "Jail & Hospital",
  items = "Items",
  missions = "Missions",
}

export function getHonorTypeIndex<T extends string>(value: T): number {
  const keys = Object.keys(HonorType) as Array<keyof typeof HonorType>;
  return keys.findIndex((key) => HonorType[key] === value);
}
