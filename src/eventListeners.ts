import { getHouseData } from "./getData";
import { NavButtons } from "../types/types";
import { allData } from "./main";

const allStudents: NavButtons = document.getElementById("all-students")!;
const gryffindor: NavButtons = document.getElementById("gryffindor")!;
const slytherin: NavButtons = document.getElementById("slytherin")!;
const hufflepuff: NavButtons = document.getElementById("hufflepuff")!;
const ravenclaw: NavButtons = document.getElementById("ravenclaw")!;

allStudents.addEventListener("click", () => {
  console.log(allData);
});

gryffindor.addEventListener("click", () => {
  console.log(getHouseData("gryffindor", allData));
});

slytherin.addEventListener("click", () => {
  console.log(getHouseData("slytherin", allData));
});

hufflepuff.addEventListener("click", () => {
  console.log(getHouseData("hufflepuff", allData));
});

ravenclaw.addEventListener("click", () => {
  console.log(getHouseData("ravenclaw", allData));
});
