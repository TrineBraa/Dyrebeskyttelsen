function adoptedView(){
    document.getElementById("app").innerHTML = /*HTML*/ `
    ${makeHeader()}
    <div id="mainButtonContainer">
        <button class="mainButton" onclick = "contactView()">Kontakt oss</button>
        <button class="mainButton" onclick = "adoptableDogView()">Tilgjengelige Hunder</button>
        <button class="mainButton, activeButton" onclick = "adoptedView()">Adopterte Hunder</button>
    </div>
   `;
}