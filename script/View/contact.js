contactView()
function contactView(){
    document.getElementById("app").innerHTML = /*HTML*/ `
    ${makeHeader()}
    <div id="mainButtonContainer">
        <button class="mainButton, activeButton" onclick = "contactView()">Kontakt oss</button>
        <button class="mainButton" onclick = "adoptableDogView()">Tilgjengelige Hunder</button>
        <button class="mainButton" onclick = "adoptedView()">Adopterte Hunder</button>
    </div>
    <div id="titleContainer">
        <h1>Kontakt oss</h1>
        </div>
        <div id="topContainer">
        <div>
        ${contactSheet()}
        </div>
        <div id="ContactUs"><h2>Lokalavdelinger</h2></div>
        </div>
        <div id="bottomContainers">
        </div>


        ${makeContactFooter()}
    `; 
}

function makeContactFooter(){
    let html = /*html*/ `
    <div class ="contactFooter">
    <h3 class="footertitle">Annen Kontaktinformasjon</h3><br/>
         <p class="footerInfo">   ${extraContact()}</p>
        
    </div>
    `;
    return html;
}

function extraContact(){
    return `  
       
        Dyrebeskyttelsen Norge<br/>
        Øvre gate 7<br/>
        0551 Oslo<br/>
        Telefon: 23139259<br/>
        <br/>
        Telefontiden vår er mandag til fredag 09.00 til 15.00<br/>
        I juli er telefontid fra 10.00 til 14.00
    `;
}

function contactSheet(){
    return `
    <div id="infoSheet">
        <h2>Før du kontakter oss</h2>
        <br/>
        <p>Våre nettsider inneholder mye informasjon. vet å undersøke om du får svar på spørsmålet ditt her. 
        Sparer du pss for å bruke tid som vi kan bruke på å hjelpe flere dyr. </P>

        <b>Har du et annet spørsmål?</b>
        <br/>
        Fyll ut kontaktskjemaet under:<br/>
        <br/>
        <input class="contactsheet" type="text" placeholder="Ditt Navn"><input class="contactsheet" type="text" placeholder="Din E-postadresse">
        <br/>
        <textarea class="contactsheet2" type="text" placeholder="Skriv din melding her..."></textarea>
        <br/>
        <button id="sendEmailButton">Send</button>
    </div>
    `;
}