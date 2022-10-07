import { ExtractedHarryPotterData } from "../types/api types";

const tableHead: HTMLElement = document.getElementById("data-thead")!;
const tableBody: HTMLElement = document.getElementById("data-tbody")!;

export function drawTable(extractedData: ExtractedHarryPotterData[]) {
  //THEAD
  if (tableHead.childElementCount === 0) {
    const rowHeaderElement = document.createElement("tr");
    for (const cellHeadText in extractedData[0]) {
      const cellHeadElement = document.createElement("th");
      cellHeadElement.textContent = cellHeadText;
      rowHeaderElement.appendChild(cellHeadElement);
    }
    tableHead.appendChild(rowHeaderElement);
  }

  //TBODY
  for (const char of extractedData) {
    const rowBodyElement = document.createElement("tr");
    for (const cellText in char) {
      const cellElement = document.createElement("td");
      cellElement.textContent = char[cellText as keyof typeof char].toString();
      rowBodyElement.appendChild(cellElement);
    }
    tableBody.appendChild(rowBodyElement);
  }
}

export function clearTable() {
  tableBody.innerHTML = "";
}
