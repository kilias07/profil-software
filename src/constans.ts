//NAV BUTTONS
import { NavButtons } from "../types/types";

export const allStudents: NavButtons = document.getElementById("all-students")!;
const gryffindor: NavButtons = document.getElementById("gryffindor")!;
const slytherin: NavButtons = document.getElementById("slytherin")!;
const hufflepuff: NavButtons = document.getElementById("hufflepuff")!;
const ravenclaw: NavButtons = document.getElementById("ravenclaw")!;

//HOUSES BTNS
//FIXME CHANGE THIS INTO ENUM ITERATOR
export const arrHousesBtn = [gryffindor, slytherin, hufflepuff, ravenclaw];
