import { ExtractedHarryPotterData } from "../types/api types";
import { arrowDown, createElement } from "./icons";

const tableHead: HTMLElement = document.getElementById("data-thead")!;
const tableBody: HTMLElement = document.getElementById("data-tbody")!;

export function drawTable(extractedData: ExtractedHarryPotterData[]) {
  //THEAD
  if (tableHead.childElementCount === 0) drawTHead(extractedData);

  //TBODY
  if (
    extractedData.length !== tableBody.childElementCount &&
    tableBody.childElementCount > 0
  ) {
    clearTable();
  }
  if (tableBody.childElementCount === 0) drawTBody(extractedData);
}

function drawTHead(extractedData: ExtractedHarryPotterData[]): void {
  if (extractedData.length > 0) {
    const rowHeaderElement = document.createElement("tr");
    for (const cellHeadText in extractedData[0]) {
      const cellHeadElement = document.createElement("th");
      cellHeadElement.textContent = cellHeadText;
      rowHeaderElement.appendChild(cellHeadElement);
    }
    tableHead.appendChild(rowHeaderElement);

    //SORT ICONS
    rowHeaderElement.childNodes.forEach((nodeEl, i) => {
      if (i < 3) {
        const svgSortIcon = createElement(
          arrowDown,
          "sort-" + nodeEl.textContent!
        );
        nodeEl.appendChild(svgSortIcon);
      }
    });
  }
}

function drawTBody(extractedData: ExtractedHarryPotterData[]): void {
  if (extractedData.length > 0) {
    for (const char of extractedData) {
      const rowBodyElement = document.createElement("tr");
      for (const cellText in char) {
        const cellElement = document.createElement("td");
        cellElement.textContent =
          char[cellText as keyof typeof char].toString();
        rowBodyElement.appendChild(cellElement);
      }
      tableBody.appendChild(rowBodyElement);
    }
  }
}

function clearTable(): void {
  tableBody.innerHTML = "";
}
