mainView()
function mainView(){
    document.getElementById("app").innerHTML = /*HTML*/`
    ${makeHeader()}
    <div id="mainButtonContainer">
        <button class="mainButton" onclick = "contactView()">Kontakt oss</button>
        <button class="mainButton" onclick = "adoptableDogView()">Tilgjengelige Hunder</button>
        <button class="mainButton" onclick = "adoptedView()">Adopterte Hunder</button>
    </div>
    <div id="titleContainer">
        <h1>Dyrebeskyttelsen Norge</h1>
    </div>



    ${makeFooter()}
    `;
}



function makeHeader(){
    let html = /*HTML*/`
    <div id="logoContainer">
        <img id="logoMain" onclick="mainView()" src= https://kommunikasjon.ntb.no/data/images/00539/a81ddc71-603d-4af3-a4aa-ec40b5c0ee68.png/>
    </div>
    <div id="searchBarContainer">
        <input id="mainSearch" placeholder="Søk" onchange="">
        <button id="searchButton">Søk</button>
   </div>
  
    `;
    return html;
}

function makeFooter(){
    let html = /*html*/ `
    <div class ="footer">
    </div>
    `;
    return html;
}