import { createCard } from "./favoriteCard";
import { getAllFavorites } from "./localStorage";

(async function updateTree() {
  const allData = getAllFavorites();
  createCard(allData);
})();
