export class NavBar extends HTMLElement {
  shadow: ShadowRoot;
  table: boolean;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.table = false;
  }

  async connectedCallback() {
    this.render();
    if (this.table) {
      await this.showTable();
    }
  }

  disconnectedCallback() {
    console.log("disconnected", this);
  }

  async showTable() {
    const data = await fetch(
      "https://hp-api.herokuapp.com/api/characters/students"
    );
    const result = await data.json();
    this.table = true;

    console.log(result);
  }

  render() {
    this.shadow.innerHTML = `
        <ul class="dupa">
            <li>
                <button id="allStudents">
                All students
                </button>
            </li>
             <li>
                <button>
                Gryffindor
                </button>
            </li>
            <li>
                <button>
                Slytherin
                </button>
            </li>
            <li>
                <button>
                Hufflepuff
                </button>
            </li>
            <li>
                <button>
                Ravenclaw
                </button>
            </li>
            <li>
                <button>
                Favorites
                </button>
            </li>
        </ul>
        ${this.table ? <div>test</div> : "loading"}
    `;
  }
}

if ("customElements" in window) {
  customElements.define("nav-bar", NavBar);
}
