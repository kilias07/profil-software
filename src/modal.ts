import { HarryPotterData } from "../types/api types";

export function openModal(this: { allData: HarryPotterData[] }, event: Event) {
  const name = (event.currentTarget as HTMLElement)!.firstElementChild!
    .textContent;
  const charData = this.allData.find((el) => el.name === name);
  createModal(charData!);
}

function createModal(charData: HarryPotterData): void {
  const modal = document.createElement("div");
  // console.log(Object.entries(charData));console.log(test);

  modal.innerHTML = `
    <div>
        <h1>${charData.name}</h1>
    <div>
    <p>Personal Data</p>
    <ul>
        <li>species: ${charData.species}</li>
        
        <li>gender: ${charData.gender}</li>
        <li>date of birth: ${charData.dateOfBirth}</li>
        <li>year of birth: ${
          charData.yearOfBirth ? charData.yearOfBirth : "N/A"
        }</li>
        <li>ancestry: ${charData.ancestry}</li>
        <li>eye color: ${charData.eyeColour}</li>
        <li>hair color: ${charData.hairColour}</li>
        <li>wizard ${charData.wizard}</li>
        <li>patronus: ${charData.patronus}</li>
        <li>hogwartsStudent: ${charData.hogwartsStudent}</li>
        <li>hogwartsStaff: ${charData.hogwartsStaff}</li>
        <li>actor: ${charData.actor}</li>
        <li>alive: ${charData.alive}</li>
        <li>wand: 
            <ul>
                <li>wood ${charData.wand?.wood}</li>
                <li>core ${charData.wand?.core}</li>
                <li>length ${charData.wand.length}</li>
            </ul>
        </li>
    </ul>
    </div>
</div>`;
  modal.className = "modal";

  document.querySelector("main")!.appendChild(modal);
}
