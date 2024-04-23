function dogOnHoldView(){
    let choosenDog = model.data.availibleDogs.find((Dog) => Dog.id == model.app.dogToAdopt)
    document.getElementById("app").innerHTML = /*HTML*/ `
    ${makeHeader()}
    <button class="mainButton" onclick="adoptableDogView()">Tilbake</button>
    <div class="meetTopContainer">
        <h1>Vil du reservere ${choosenDog.name}</h1>
        <br/>
        <span>Når du har møtt en hund og tenker den hunden er den rette for din familie kan du reservere den.
        <br/> Dette er for at ikke du skal miste en hund du tror du vil adoptere, og samtidig ønsker vi ikke at flere skal ha et håp om å få en hund noen andre er ute etter.
        Vi har dermed satt reservasjon på hunder så når noen planlegger et møte kan se at denne hunden muligens er i ferd med å bli adoptert. 
        <br/>En reservasjon står i en ukes tid og om hunden ikke er adoptert innen den tid vil reservasjonen fjernes og hunden vil være åpen for andre reservasjoner.
        <br/>Du vil måtte betale litt for å reservere en hund. </span> 
        <br/>
        <div class="meetInputs">
        <input class="inputForMeet" placeholder="Navn">
        <input class="inputForMeet" placeholder="Telefon Nr">
        <input class="inputForMeet" placeholder="Epost">
        </div>
        
        <span>Det koster 500 kr for å reservere ${choosenDog.name}</span>
    <br/>
    <br/>
    <br/>
        <button class="mainButton">Reserver ${choosenDog.name}</button>
    </div>
    ${makeFooter()}
    `; 
}