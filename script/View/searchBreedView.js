
function searchBreedView(){ 
    document.getElementById('app').innerHTML = /*HTML*/`
    ${makeHeader()}
    ${makeMainButtons()}
    <div class="BreedInfoContainer">
        <input class="SearchBreed" placeholder="Skriv inn hunderase" onchange="setSearchBreed(this.value)" value="${model.app.breedToSearch ?? ''}">
    </div>
    ${makeBreedInfoHtml()}
    `
}


function makeBreedInfoHtml(){
return /*HTML*/`
    <div class="BreedInfoContainer">
        <div><h1>Rasenavn:</h1> ${model.data.breedInfo.name ?? ''}</div>
        <img src="${model.data.breedInfo.img ?? ''}" >

        <div id="dogBreedInfo">
            <div>
            <h3>Energi-nivå:</h3> 
                <div>${makeStar(model.data.breedInfo.energy) ?? ''}</div>
            </div>

            <div>
            <h3>Siklemengde:</h3> 
                <div>${makeStar(model.data.breedInfo.drooling) ?? ''}</div>
            </div>

            <div>
            <h3>Røytemengde:</h3> 
                <div>${makeStar(model.data.breedInfo.shedding) ?? ''}</div>
            </div>

            <div>
            <h3>Støy-nivå:</h3> 
                <div>${makeStar(model.data.breedInfo.barking) ?? ''}</div>
            </div>

            <div>
            <h3>Flink med Barn:</h3> 
                <div>${makeStar(model.data.breedInfo.good_with_children) ?? ''}</div>
            </div>

            <div>
            <h3>Flink med andre Hunder:</h3> 
                <div>${makeStar(model.data.breedInfo.good_with_other_dogs) ?? ''}</div>
            </div>

            <div>
            <h3>Treningsvillighet:</h3> 
                <div>${makeStar(model.data.breedInfo.trainability) ?? ''}</div>
            </div>
        </div>
    </div>
<br/>
<br/>
<br/>
    ${makeFooter()}
`
}

function makeStar(amount){
    let html = "";
    html += "⭐".repeat(amount)
    return html
}
