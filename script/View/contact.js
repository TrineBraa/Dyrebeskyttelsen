function contactView(){
    document.getElementById("app").innerHTML = /*HTML*/ `
    ${makeHeader()}
    <div id="mainButtonContainer">
    <button class="mainButton, activeButton" onclick = "contactView()">Kontakt oss</button>
    <button class="mainButton" onclick = "adoptableDogView()">Tilgjengelige Hunder</button>
    <button class="mainButton" onclick = "adoptedView()">Adopterte Hunder</button>
</div>
    `; 
}