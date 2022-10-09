import {
  ExtractedHarryPotterData,
  HarryPotterData,
  SortedTableData,
} from "../types/api types";
import { HarryPotterHouses, State } from "../types/types";
import { sortTBody } from "./table";

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
): ExtractedHarryPotterData[] {
  return data.filter((el) => el.house.toLowerCase() === harryPotterHouse);
}

export function extractData(
  data: HarryPotterData[]
): ExtractedHarryPotterData[] {
  return data.map(
    ({ name, dateOfBirth, house, wizard, ancestry, hogwartsStudent }) => {
      return {
        name,
        dateOfBirth,
        house,
        wizard,
        ancestry,
        "student/staff": hogwartsStudent ? "Student" : "Staff",
      };
    }
  );
}
//TODO FIX SORTING INCLUDING EMPTY CELLS
export function sortData(
  data: ExtractedHarryPotterData[],
  prop: keyof SortedTableData,
  isAsc: boolean
): void {
  if (prop === "dateOfBirth") {
    const sortData = data.sort((a, b) => {
      // if (a[prop].length > 0) {
      //
      // }
      return (a[prop] < b[prop] ? -1 : 1) * (isAsc ? 1 : -1);
    });
    sortTBody(sortData);
    return;
  }

  const sortedData = data.sort(
    (a, b) => (a[prop] < b[prop] ? -1 : 1) * (isAsc ? 1 : -1)
  );
  sortTBody(sortedData);
}

export function getSortedData(
  this: { sortBtns: NodeList; state: State },
  event: Event
) {
  const { currentTarget } = event;
  const { sortBtns, state } = this;
  const currTarget = currentTarget as HTMLElement;
  const currId = currTarget.id.slice(5) as keyof SortedTableData;
  const currVal = currTarget.getAttribute("data-sorted") === "true";

  sortData(state.actualDataHouse!, currId, currVal);
  resetArrow(sortBtns, currId);
  currTarget.setAttribute("data-sorted", String(!currVal));
}

//TODO ADD CLASS TO STYLES "ACTIVE"
function resetArrow(sortBtns: NodeList, exclude: string): void {
  sortBtns.forEach((el) => {
    //TS CONVERT A NODE ELEMENT INTO HTML ELEMENT
    const htmlEl = el.parentNode!.firstElementChild! as HTMLElement;
    return htmlEl.id !== exclude && htmlEl.classList.remove("active");
  });
}
