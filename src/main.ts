import "./sass/main.scss";
import "./components/Layout/navBar";
import { getData } from "./getData";
import { extractData } from "./getData";
import "./eventListeners";

//ALL DATA ONCE FETCHED ON FIRST LOADING PAGE
export const allData = await getData();
//RENDER ALL DATA AS DEFAULT
extractData(allData);
