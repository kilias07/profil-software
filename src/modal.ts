import { HarryPotterData } from "../types/api types";
import { waitForElement } from "./helper";

export async function openModal(
  this: { allData: HarryPotterData[] },
  event: Event
) {
  event.preventDefault();
  const name = (event.currentTarget as HTMLElement)!.firstElementChild!
    .textContent;
  const charData = this.allData.find((el) => el.name === name);
  const modal = createModal(charData!);
  await exitModal(modal);
}

function createModal(charData: HarryPotterData): HTMLElement {
  const modal = document.createElement("div");
  modal.innerHTML = modalTemplate(charData);
  modal.className = "modal open";
  document.querySelector("main")!.appendChild(modal);
  return modal;
}

async function exitModal(modal: HTMLElement): Promise<void> {
  const exists = await waitForElement(".modal-exit");
  exists.forEach((exit) => {
    exit.addEventListener("click", (event: Event) => {
      event.preventDefault();
      modal.classList.remove("open");
    });
  });
}

function modalTemplate(charData: HarryPotterData): string {
  return `
    <div class="${charData.house}">
        <h1>${charData.name}</h1>
    <div>
    <p>Personal Data</p>
    <ul>
        <li>species: ${charData.species ? charData.species : "N/A"}</li>
        <li>gender: ${charData.gender ? charData.species : "N/A"}</li>
        <li>date of birth: ${
          charData.dateOfBirth ? charData.dateOfBirth : "N/A"
        }</li>
        <li>year of birth: ${
          charData.yearOfBirth ? charData.yearOfBirth : "N/A"
        }</li>
        <li>ancestry: ${charData.ancestry ? charData.ancestry : "N/A"}</li>
        <li>eye color: ${charData.eyeColour ? charData.eyeColour : "N/A"}</li>
        <li>hair color: ${
          charData.hairColour ? charData.hairColour : "N/A"
        }</li>
        <li>wizard ${charData.wizard ? charData.wizard : "N/A"}</li>
        <li>patronus: ${charData.patronus ? charData.patronus : "N/A"}</li>
        <li>hogwartsStudent: ${
          charData.hogwartsStudent ? charData.hogwartsStudent : "N/A"
        }</li>
        <li>hogwartsStaff: ${
          charData.hogwartsStaff ? charData.hogwartsStaff : "N/A"
        }</li>
        <li>actor: ${charData.actor ? charData.actor : "N/A"}</li>
        <li>alive: ${charData.alive ? charData.alive : "N/A"}</li>
        <li>wand: 
            <ul>
                <li>wood ${
                  charData.wand?.wood ? charData.wand.wood : "N/A"
                }</li>
                <li>core ${
                  charData.wand?.core ? charData.wand.core : "N/A"
                }</li>
                <li>length ${
                  charData.wand?.length ? charData.wand.length : "N/A"
                }</li>
            </ul>
        </li>
    </ul>
    </div>
    <div>
    <img alt="${charData.name}" src="${charData.image}"/>
</div>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="modal-exit">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

</div>`;
}
