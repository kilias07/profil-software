import { HarryPotterData } from "../types/api types";

export function createCard(data: HarryPotterData[]) {
  if (data.length) {
    const cardContainer = document.getElementById("card-container");
    data.forEach((el) => {
      const card = document.createElement("li");
      card.className = "card";
      card.innerHTML = `<div>
            ${el.name}
            </div>
`;
      cardContainer!.appendChild(card);
    });
  }
}
