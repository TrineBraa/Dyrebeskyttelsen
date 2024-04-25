function planMeetView(){
    model.app.currentPage = 'planAMeet';
    let choosenDog = model.data.availibleDogs.find((Dog) => Dog.id == model.app.dogToAdopt)
    document.getElementById("app").innerHTML = /*HTML*/ `
    ${makeHeader()}
    <button class="mainButton" onclick="adoptableDogView()">Tilbake</button>
    <div class="meetTopContainer">
        <h1>Vil du møte ${choosenDog.name}</h1>
        <br/>
        <span>Vi ønsker gjerne at du skal møte en hund før du bestemmer deg for å adoptere. 
        <br/>Dette er for å sjekke kjemien mellom deg og hunden og samtidig kunne lære mer om hunden før du velger ditt nye familiemedlem.
        <br/></span>
        <br/>
        <div class="meetInputs">
            <input class="inputForMeet" placeholder="Navn">
            <input class="inputForMeet" placeholder="Telefon nr">
            <input class="inputForMeet" placeholder ="Epost">
            <input class="inputForMeet" type="date">
            <br/>
            <button class="mainButton">Sett Møtetid</Button>
        </div>
    </div>


    ${makeFooter()}
    `; 
}