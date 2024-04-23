
function searchBreedView(){ 
    document.getElementById('app').innerHTML = /*HTML*/`
    ${makeHeader()}
    ${makeMainButtons()}
    <br/>
    
    <br/>
    <div id="BreedInfoContainer">
    Her kan du søke om ekstra informasjon om en hunderase. Søkeordet må være på Engelsk.
    <br/>
    <br/>
        <input class="SearchBreed" placeholder="Skriv inn hunderase" onchange="setSearchBreed(this.value)" value="${model.app.breedToSearch ?? ''}">
    </div>
    ${makeBreedInfoHtml()}
    `
}


function makeBreedInfoHtml(){
return /*HTML*/`
    <br/>
    <div id="BreedInfoContainer">
        <div><h1>Rasenavn:</h1> <h2>${model.data.breedInfo.name ?? ''}</h2></div>
        <img src="${model.data.breedInfo.img ?? ''}" >

        <div id="dogBreedInfo">
                <div class="infoAboutBreed">
                    <h3>Energi-nivå:</h3> 
                    <div>${makeStar(model.data.breedInfo.energy) ?? ''}</div>
                </div>
                <br/>
                <div  class="infoAboutBreed">
                    <h3>Siklemengde:</h3> 
                    <div>${makeStar(model.data.breedInfo.drooling) ?? ''}</div>
                </div>
                <br/>
                <div  class="infoAboutBreed">
                    <h3>Røytemengde:</h3> 
                    <div>${makeStar(model.data.breedInfo.shedding) ?? ''}</div>
                </div>
                <br/>
                <div  class="infoAboutBreed">
                    <h3>Støy-nivå:</h3> 
                    <div>${makeStar(model.data.breedInfo.barking) ?? ''}</div>
                </div>
                <br/>
                <div  class="infoAboutBreed">
                    <h3>Flink med Barn:</h3> 
                    <div>${makeStar(model.data.breedInfo.good_with_children) ?? ''}</div>
                </div>
                <br/>
                <div  class="infoAboutBreed">
                    <h3>Flink med andre Hunder:</h3> 
                    <div>${makeStar(model.data.breedInfo.good_with_other_dogs) ?? ''}</div>
                </div>
                <br/>
                <div  class="infoAboutBreed">
                    <h3>Treningsvillighet:</h3> 
                    <div>${makeStar(model.data.breedInfo.trainability) ?? ''}</div>
                </div>
            </div>
        <br/>
        <br/>
        <br/>
        <br/>
        </div>
    </div>

    ${makeFooter()}
`
}

function makeStar(amount){
    let html = "";
    html += "⭐".repeat(amount)
    return html
}
