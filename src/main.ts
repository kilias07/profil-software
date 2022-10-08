import "./sass/main.scss";
import { getData, getHouseData, getSortedData } from "./getData";
import { extractData } from "./getData";
import { drawTable } from "./table";
import { HarryPotterHouses } from "../types/types";
import { allStudents, arrHousesBtn } from "./constans";
import { waitForElement } from "./helper";

(async function updateTree() {
  //FETCH ALL DATA
  const allData = await getData();

  //EXTRACT DATA TO ONLY NEEDED COLUMNS
  const extractedData = extractData(allData);

  //INITIAL DRAW TABLE
  drawTable(extractedData);

  //ALL STUDENT BTN HANDLER
  allStudents.addEventListener("click", () => {
    drawTable(extractedData);
  });

  //HOUSES BTNS HANDLERS
  arrHousesBtn.map((houseBtn) =>
    houseBtn.addEventListener("click", () => {
      const houseData = getHouseData(
        houseBtn.id as HarryPotterHouses,
        extractedData
      );
      drawTable(houseData);
    })
  );

  //ADD LISTENERS TO SORTING BTNS
  const sortBtns = await waitForElement('[id^="sort"]');
  sortBtns.forEach((btn) => btn.addEventListener("click", getSortedData));
})();
