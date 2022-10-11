import { HarryPotterData } from "../types/api types";

export function favoriteHandler(charData: HarryPotterData) {
  const addBtn = document.getElementById("fav-add") as HTMLButtonElement;
  const removeBtn = document.getElementById("fav-remove") as HTMLButtonElement;
  addBtn.disabled = checkFavorite(charData.name);
  removeBtn.disabled = !checkFavorite(charData.name);

  addBtn!.addEventListener("click", () => {
    addFavorite(charData);
    addBtn.disabled = checkFavorite(charData.name);
    removeBtn.disabled = !checkFavorite(charData.name);
  });

  removeBtn!.addEventListener("click", () => {
    removeFavorite(charData.name);
    addBtn.disabled = checkFavorite(charData.name);
    removeBtn.disabled = !checkFavorite(charData.name);
  });
}

export function addFavorite(charData: HarryPotterData): void {
  if (!checkFavorite(charData.name)) {
    localStorage.setItem(charData.name, JSON.stringify(charData));
  }
}

export function checkFavorite(key: string): boolean {
  return !!localStorage.getItem(key);
}

export function countAllFavorites(): number {
  return Object.keys(localStorage).length;
}

export function getAllFavorites() {
  const keys = Object.keys(localStorage);
  return keys.reduce<HarryPotterData[]>((acc, key) => {
    const test = JSON.parse(localStorage.getItem(key)!);
    return [...acc, test];
  }, []);
}

export function removeFavorite(key: string): void {
  checkFavorite(key) && localStorage.removeItem(key);
}

// function removeAllFavorites(): void {
//     localStorage.clear();
// }
