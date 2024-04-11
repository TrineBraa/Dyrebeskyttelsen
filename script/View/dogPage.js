function adoptableDogView(){
    document.getElementById("app").innerHTML = /*HTML*/ `
    ${makeHeader()}
    <div id="mainButtonContainer">
        <button class="mainButton" onclick = "contactView()">Kontakt oss</button>
        <button class="mainButton, activeButton" onclick = "adoptableDogView()">Tilgjengelige Hunder</button>
        <button class="mainButton" onclick = "adoptedView()">Adopterte Hunder</button>
    </div>
    <div id="titleContainer">
    <h1>Tilgjengelige for Adopsjon</h1>
    </div>
    `; 
}