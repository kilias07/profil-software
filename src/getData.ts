import {
  ExtractedHarryPotterData,
  HarryPotterData,
  SortedTableData,
} from "../types/api types";
import { HarryPotterHouses } from "../types/types";
import { drawTable } from "./table";

export async function getData(): Promise<HarryPotterData[]> {
  const url = "https://hp-api.herokuapp.com/api/characters/students";
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

export function extractData(
  data: HarryPotterData[]
): ExtractedHarryPotterData[] {
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

export function sortData(
  data: HarryPotterData[],
  prop: keyof SortedTableData,
  isAsc: boolean
) {
  const sortedData = data.sort(
    (a, b) => (a[prop] < b[prop] ? -1 : 1) * (isAsc ? 1 : -1)
  );
  extractData(sortedData);
}
