//NAV BUTTONS
import { NavButtons } from "../types/types";

export const allStudents: NavButtons = document.getElementById("all-students")!;
export const favorites: NavButtons = document.getElementById("favorites")!;
const gryffindor: NavButtons = document.getElementById("gryffindor")!;
const slytherin: NavButtons = document.getElementById("slytherin")!;
const hufflepuff: NavButtons = document.getElementById("hufflepuff")!;
const ravenclaw: NavButtons = document.getElementById("ravenclaw")!;

//HOUSES BTNS
//TODO FIXME CHANGE THIS INTO ENUM ITERATOR
export const arrHousesBtn = [gryffindor, slytherin, hufflepuff, ravenclaw];

//TABLE
export const tableHead: HTMLElement = document.getElementById("data-thead")!;
export const tableBody: HTMLElement = document.getElementById("data-tbody")!;

//LOADER
export const loader: HTMLElement = document.getElementById("loader")!;
