import "./sass/main.scss";
import { getData, getHouseData, getSortedData } from "./getData";
import { extractData } from "./getData";
import { drawTable } from "./table";
import { HarryPotterHouses, State } from "../types/types";
import { allStudents, arrHousesBtn } from "./constans";
import { waitForElement } from "./helper";
import { openModal } from "./modal";

(async function updateTree() {
  //FETCH ALL DATA
  const allData = await getData();

  //EXTRACT DATA TO ONLY THE NEEDED COLUMNS
  const extractedData = extractData(allData);

  //INITIAL DRAW TABLE
  drawTable(extractedData);
  //INITIAL TURN ON MODAL ON EVERY ROW
  await rowListener();

  //STATE
  const state: State = {
    sort: null,
    actualDataHouse: null,
  };
  //INITIAL STATE DECLARATION WITH ALL DATA
  state.actualDataHouse = extractedData;

  //ALL STUDENT BTN HANDLER
  allStudents.addEventListener("click", () => {
    state.actualDataHouse = extractedData;
    drawTable(extractedData);
    rowListener();
  });

  //HOUSES BTNS HANDLERS
  arrHousesBtn.map((houseBtn) =>
    houseBtn.addEventListener("click", () => {
      const houseData = getHouseData(
        houseBtn.id as HarryPotterHouses,
        extractedData
      );
      state.actualDataHouse = houseData;
      drawTable(houseData);
      rowListener();
    })
  );

  //ADD LISTENERS TO SORTING BTNS
  const sortBtns = await waitForElement('[id^="sort"]');
  sortBtns.forEach((btn) => {
    btn.addEventListener(
      "click",
      (event) => {
        getSortedData.bind({ sortBtns, state })(event);
        rowListener();
      },
      false
    );
  });

  //ADD LISTENERS TO EACH ROW IN TABLE
  async function rowListener() {
    const tableRow = await waitForElement("#data-tbody > tr");
    tableRow.forEach(
      (row) => row.addEventListener("click", openModal.bind({ allData })),
      false
    );
  }
})();
