import { HarryPotterData } from "../types/api types";
import { removeFavorite } from "./localStorage";

export function createCard(data: HarryPotterData[]) {
  if (data.length) {
    const cardContainer = document.getElementById("card-container");
    data.forEach((el, i) => {
      const card = document.createElement("li");
      card.className = `card`;
      card.id = `card-${i}`;
      card.innerHTML = `
           <div class='card-inner'>
           <img  alt='${el.name}' src='${el.image}'/>
                <div>
                    <h2> ${el.name} </h2>
                    <button id="fav-remove-${i}">remove from favorites</button>
                </div>
            </div>
`;
      cardContainer!.appendChild(card);
      const removeBtn = document.getElementById(`fav-remove-${i}`)!;
      removeBtn!.addEventListener("click", () => {
        document.getElementById(`card-${i}`)!.remove();
        removeFavorite(el.name);
      });
    });
  }
}

export function changeNumberInRow() {
  const selector = document.getElementById(
    "change-row-number"
  ) as HTMLSelectElement;

  selector.addEventListener("change", () => {
    const containerCard = document.getElementById("card-container");
    let fraction = [];
    for (let i = 0; i < +selector.value; i++) {
      fraction.push("1fr");
    }
    containerCard!.style.gridTemplateColumns = fraction.join(" ");
  });
}
