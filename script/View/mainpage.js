// mainView()
function mainView(){
    document.getElementById("app").innerHTML = /*HTML*/`
    ${makeHeader()}
    ${makeMainButtons()}
    <div id="titleContainer">
        <h1>Dyrebeskyttelsen Norge</h1>
    </div>
    <br/>
    <div id="topContainer">
        <div id="aboutUsContainer">
            <h3>Om organisasjonen:</h3>
            <br/>
            <div>${aboutOrg()}</div>
        </div>
            <div id="frontPageImgContainer">
            <img id="frontPageImg" src="./images/frontpageimg.jpg">
        </div>
    </div>
    <div id="bottomContainers">
        <div>
            <button class="mainButton" onclick="searchBreedView()">Her kan du søke om hunderaser</button>
        </div>
        <div id="aboutPageContainer">
            ${thisWebpage()}
        </div>
    </div>
    <br/>
    <br/>
    <br/>


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


function makeMainButtons(){
    return `<div id="mainButtonContainer">
    <button class="mainButton" onclick = "contactView()">Kontakt oss</button>
    <button class="mainButton" onclick = "adoptableDogView()">Tilgjengelige Hunder</button>
    <button class="mainButton" onclick = "adoptedView()">Adopterte Hunder</button>
</div>`
}

function makeFooter(){
    let html = /*html*/ `
    <div class ="footer">
    </div>
    `;
    return html;
}

function aboutOrg(){
    let html= '';
    html = `<p>Siden 1859 har vi arbeidet for at dyr skal bli behandlet med respekt og medfølelse. 
    Med flere tusen medlemmer i ryggen taler vi dyrenes sak overfor publikum, myndigheter og media. 
    Vi sprer nye tanker der man ikke lenger ser verdien av et dyrs liv. Vi griper inn der dyr blir utsatt for urett.</p>
    <p>Dyrebeskyttelsen Norge er en landsdekkende dyrevernorganisasjon med 25 lokalavdelinger spredt fra nord til sør. 
    Med over 8500 medlemmer, er vi en av landets største og eneste landsdekkende dyrevernorganisasjon som gir praktisk hjelp til dyr i nød. 
    Siden 1859 har vi arbeidet for at dyr skal bli behandlet med respekt og medfølelse. 
    Dette gjør oss til en av verdens eldste dyrevernorganisasjoner.</p>
    <p>I 2019 var det 160 år siden Dyrebeskyttelsen Norge startet sitt arbeid med å verne om dyrenes velferd. 
    Siden begynnelsen har organisasjonen klart å bedre arbeidshestens velferd, 
    påvirket politikerne til å legge ned pelsdyrnæringen og hjulpet hundretusenvis av hjemløse dyr.</p>
    <p>Med flere tusen medlemmer i ryggen taler vi dyrenes sak overfor publikum, myndigheter og media. 
    Vi sprer nye tanker der man ikke lenger ser verdien av et dyrs liv. 
    Vi griper inn der dyr blir utsatt for urett.</p>
    <p>Dyrebeskyttelsen Norge er en pådriver for et styrket dyrevern på en rekke arenaer, 
    uansett om dyrene lever i sjø, luft eller på land. Dette gjør våre arbeidsområder mange og varierte.</p>
    <p>Dyr er uten stemme, uten rettigheter og uten muligheter til å forsvare seg selv. 
    Dyrebeskyttelsen Norge arbeider for at dyr ikke skal defineres som «ting», men få grunnleggende rettigheter og anerkjennes som følende vesener.</p>
    <p>Dyr utnyttes på utallige måter, også i Norge: i industrier som produserer pels eller kjøtt, i dyreforsøk eller som sirkusdyr. 
    I havet og skogen utsettes de for jakt og fangst. Og som hjemløse lider de under sykdom, skader og kulde.</p>

    `;

    return html;
}

function thisWebpage(){
    let html= '';
    html = `<p>Vi ønsker at flest mulig av de firbente skal finne nye hjem, dermed har vi her samlet hunder som leter etter nye hjem.
    Du kan lære mer om de forskjellige hundene og planlegge et møte for å finne din neste bestevenn.</p>
    <p>Du vil finne hunder som er på jakt etter et nytt hjem, men du kan også se de som har funnet sine nye hjem her.
    Vi ønsker at du skal ha mest mulig informasjon før du velger og adoptere fra oss, 
    derfor har vi også inkludert informasjon dom de forskjellige rasene av hunder. 
    På denne måten kan du gjøre et valg med mest mulig infromasjon for å finne det riktige familie medlemmet for deg. </p>
    
    `;

    return html;
}