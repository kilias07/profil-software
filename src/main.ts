import "./sass/main.scss";
import "./components/Layout/navBar";
import { getData } from "./getData";
import { extractData } from "./getData";

export const allData = await getData();

extractData(allData);
