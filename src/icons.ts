export const arrowDown = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" id="sort-btn" >
  <path fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clip-rule="evenodd" />
</svg>
`;

export function createElement(htmlString: string, id: string): HTMLElement {
  const div = document.createElement("div");
  div.innerHTML = htmlString.trim();
  const element = div.firstElementChild;
  element!.id = id;
  return <HTMLElement>element;
}
