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
    
    <div id="titleContainer">
    <h1>Tilgjengelige for Adopsjon</h1>
    ${model.app.dogToAdopt != null ? `<button class="mainButton" onclick="backToAdoptableDogs()">Tilbake til Hundene</button>` : ``}
    ${model.app.dogToAdopt != null ? `` : `<span>Trykk på bildene for mer informasjon om hunden.</span>`}
        <div id="dogContainer">
            ${model.app.dogToAdopt != null ? drawChoosenDog() : drawAvailibleDogs()}
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
        <img id="profileDogImg" onclick="viewDog(${dog.id})" src="${dog.img}">
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

function drawChoosenDog(){
    let choosenDog = model.data.availibleDogs.find((Dog) => Dog.id == model.app.dogToAdopt)
    let html = ``;
    html = `<div> 
                <h1>${choosenDog.name}</h1>
                <img src="${choosenDog.img}"></img>
                <div id="">
                    <div>Kjønn: ${choosenDog.gender} Alder: ${choosenDog.age} Rase: ${choosenDog.breed}</div>
                </div>
            </div>
    `;
    return html;
}