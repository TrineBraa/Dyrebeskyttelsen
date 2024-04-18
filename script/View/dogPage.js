adoptableDogView()
function adoptableDogView(){
    let choosenDog = model.data.availibleDogs.find((Dog) => Dog.id == model.app.dogToAdopt)
    document.getElementById("app").innerHTML = /*HTML*/ `
    ${makeHeader()}
    <div id="mainButtonContainer">
        <button class="mainButton" onclick = "contactView()">Kontakt oss</button>
        <button class="mainButton, activeButton" onclick = "adoptableDogView()">Tilgjengelige Hunder</button>
        <button class="mainButton" onclick = "adoptedView()">Adopterte Hunder</button>
    </div>
    ${model.data.availibleDogs.id == model.app.dogToAdopt ? `<button class="mainButton" onclick="adoptableDogView()">Tilbake til Hundene</button>` : ``};

    <div id="titleContainer">
    <h1>Tilgjengelige for Adopsjon</h1>
        <div id="dogContainer">
            ${model.data.availibleDogs.id == model.app.dogToAdopt ? `${drawChoosenDog(choosenDog)}`:`${drawAvailibleDogs()}`}
        </div>
    </div>



    ${makeFooter()}
    `; 
}

function drawAvailibleDogs(){
    let html = '';
    for(let i = 0; i<model.data.availibleDogs.length; i++){
        let dog = model.data.availibleDogs[i]
        html += /*HTML*/ `
        <div id="dogMainProfile">
        <img id="profileDogImg" onclick="viewDog(id)" src="${dog.img}">
            <div id="textBoxDog">
                <div><b>Navn:</b> ${dog.name}</div>
                <div><b>Kjønn:</b> ${dog.gender}</div>
                <div><b>Alder:</b> ${dog.age}</div>
                <div><b>Rase:</b> ${dog.breed}</div>
            </div>
            <div id="lineSplit"></div>
        </div>
        
        `;
    }
    return html;
}

function drawChoosenDog(dogToAdopt){
    let html = ``;
    html = `<div> 
                <h1>${dogToAdopt.name}</h1>
                <img src="${dogToAdopt.img}"></img>
                <div id="">
                    <div>Kjønn: ${dogToAdopt.gender} Alder: ${dogToAdopt.age} Rase: ${dogToAdopt.breed}</div>
                </div>
            </div>
`;
return html;
}