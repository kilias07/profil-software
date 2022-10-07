import "./sass/main.scss";
import "./components/Layout/NavBar";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="dupa">
    <nav-bar>
    </nav-bar>
  </div>
`;
