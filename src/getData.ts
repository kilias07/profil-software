import { ExtractedHarryPotterData, HarryPotterData } from "../types/api types";
import { HarryPotterHouses } from "../types/types";
import { drawTable } from "./table";

export async function getData(): Promise<HarryPotterData[]> {
  const url = "https://hp-api.onrender.com/api/characters/students";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}

export function getHouseData(
  harryPotterHouse: HarryPotterHouses,
  data: HarryPotterData[]
) {
  return data.filter((el) => el.house.toLowerCase() === harryPotterHouse);
}

export function sortData() {}

export function extractData(
  data: HarryPotterData[]
): void | ExtractedHarryPotterData[] {
  const extractedData = data.map(
    ({
      name,
      dateOfBirth,
      house,
      wizard,
      ancestry,
      hogwartsStudent,
      hogwartsStaff,
    }) => {
      return {
        name,
        dateOfBirth,
        house,
        wizard,
        ancestry,
        "student/staff": hogwartsStudent ? hogwartsStudent : hogwartsStaff,
      };
    }
  );
  drawTable(extractedData);
  return extractedData;
}
