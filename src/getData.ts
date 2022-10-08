import {
  ExtractedHarryPotterData,
  HarryPotterData,
  SortedTableData,
} from "../types/api types";
import { HarryPotterHouses } from "../types/types";

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
  data: ExtractedHarryPotterData[]
) {
  return data.filter((el) => el.house.toLowerCase() === harryPotterHouse);
}

export function extractData(
  data: HarryPotterData[]
): ExtractedHarryPotterData[] {
  return data.map(
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
}

export function sortData(
  data: ExtractedHarryPotterData[],
  prop: keyof SortedTableData,
  isAsc: boolean
) {
  return data.sort((a, b) => (a[prop] < b[prop] ? -1 : 1) * (isAsc ? 1 : -1));
}

//TODO FINISH THIS FUNC
export function getSortedData(event: Event) {
  (event.currentTarget as HTMLElement).classList.toggle("active");
  // const id = (event.currentTarget as HTMLElement).id;
  // resetState(id);
}

// function resetState(exclude: string): void {
// sortBtns.forEach((el) => el.id !== exclude && el.classList.remove("active"));
// }
