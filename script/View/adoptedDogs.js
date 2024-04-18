function adoptedView(){
    document.getElementById("app").innerHTML = /*HTML*/ `
    ${makeHeader()}
    <div id="mainButtonContainer">
        <button class="mainButton" onclick = "contactView()">Kontakt oss</button>
        <button class="mainButton" onclick = "adoptableDogView()">Tilgjengelige Hunder</button>
        <button class="mainButton, activeButton" onclick = "adoptedView()">Adopterte Hunder</button>
    </div>
    <div id="titleContainer">
    <h1>Adopterte Hunder</h1>
    <br/>
    <br/>
    ${drawAdoptedDogs()}
    </div>
    <br/>
    <br/>
    <br/>


    ${makeFooter()}
   `;
}


function drawAdoptedDogs(){
    let html ='';
    for(let i = 0; i<model.data.adoptedDogs.length; i++){
        let adopted = model.data.adoptedDogs[i]
        html += `
        <div id="adoptedProfile">
        <h2>${adopted.name}</h2>
        <img id="adoptedDogImg" src="${adopted.img}">
            <div id="textBoxAdopted">
                <div><b>Kjønn:</b> ${adopted.gender}</div>
                <div><b>Alder:</b> ${adopted.age}</div>
                <div><b>Rase:</b> ${adopted.breed}</div>
                <div>${adopted.aboutDog}</div>
            </div>
            <div id="lineSplit"></div>
        </div>
       
        `;
    }
    return html;
}