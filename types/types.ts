type AllStudents = HTMLElement;
type Gryffindor = HTMLElement;
type Slytherin = HTMLElement;
type Hufflepuff = HTMLElement;
type Ravenclaw = HTMLElement;
type Favorites = HTMLElement;

export type NavButtons =
  | AllStudents
  | Gryffindor
  | Slytherin
  | Hufflepuff
  | Ravenclaw
  | Favorites;

export type HarryPotterHouses =
  | "gryffindor"
  | "slytherin"
  | "hufflepuff"
  | "ravenclaw";

export type ButtonsNames = "AllStudents" | HarryPotterHouses | "Favorites";

export type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};
