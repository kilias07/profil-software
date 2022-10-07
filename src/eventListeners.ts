import { extractData, getHouseData, sortData } from "./getData";
import { HarryPotterHouses, NavButtons } from "../types/types";
import { allData } from "./main";
import { drawTable } from "./table";

const allStudents: NavButtons = document.getElementById("all-students")!;
const gryffindor: NavButtons = document.getElementById("gryffindor")!;
const slytherin: NavButtons = document.getElementById("slytherin")!;
const hufflepuff: NavButtons = document.getElementById("hufflepuff")!;
const ravenclaw: NavButtons = document.getElementById("ravenclaw")!;

//ALL STUDENTS BTN
allStudents.addEventListener("click", () => {
  const extractedData = extractData(allData);
  drawTable(extractedData);
});

//HOUSES BTN
//FIXME CHANGE THIS INTO ENUM ITERATOR
const arrHousesBtn = [gryffindor, slytherin, hufflepuff, ravenclaw];

arrHousesBtn.map((houseBtn) =>
  houseBtn.addEventListener("click", () => {
    const houseData = getHouseData(houseBtn.id as HarryPotterHouses, allData);
    sortData(houseData, "name", true);
  })
);
