export const arrowIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-sorted="false">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
</svg>

`;

export function createElement(htmlString: string, id: string): HTMLElement {
  const div = document.createElement("div");
  div.innerHTML = htmlString.trim();
  const element = div.firstElementChild;
  element!.id = id;
  return <HTMLElement>element;
}
