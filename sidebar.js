
// class SideBar extends HTMLElement {
//   connectedCallback() {
//     this.innerHTML = `
//       <nav>
//         <h2>Navigation</h2>
//         <ul>
//           <li><a href="index.html">Home</a></li>
//           <li><a href="photos.html">Photos</a></li>
//           <li><a href="counter.html">Counter</a></li>
//         </ul>
//       </nav>
//     `;
//   }
// }
// customElements.define('side-bar', SideBar);

class SideBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>
        <h2>Navigation</h2>
        <div class="sidebar-buttons">
          <a href="index.html" class="sidebar-btn">Home</a>
          <a href="photos.html" class="sidebar-btn">Photos</a>
          <a href="counter.html" class="sidebar-btn">Counter</a>
          <a href="kelvinconverter.html" class="sidebar-btn">Kelvin Converter</a>
          <a href="rockpaperscissor.html" class="sidebar-btn">Rock Paper Scissors</a>
        </div>
      </nav>
    `;
  }
}
customElements.define('side-bar', SideBar);