export interface HarryPotterData {
  name: string;
  alternate_names: [];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: Record<string, Wand>;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: [];
  alive: boolean;
  image: string;
}

type Wand = {
  wood: string;
  core: string;
  length: number;
};

export interface ExtractedHarryPotterData {
  name: string;
  dateOfBirth: string;
  house: string;
  wizard: boolean;
  ancestry: string;
  "student/staff": boolean;
}

export type SortedTableData = Omit<
  ExtractedHarryPotterData,
  "wizard" | "ancestry" | "student/staff"
>;
