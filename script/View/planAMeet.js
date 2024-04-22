function planMeetView(){
    let choosenDog = model.data.availibleDogs.find((Dog) => Dog.id == model.app.dogToAdopt)
    document.getElementById("app").innerHTML = /*HTML*/ `
    ${makeHeader()}
    <button class="mainButton" onclick="adoptableDogView()">Tilbake</button>

    <h1>Vil du møte ${choosenDog.name}</h1>
    <br/>
    <br/>
    <input placeholder="Navn">
    <input placeholder="Telefon nr">
    <input placeholder ="Epost">
    <input type="calendar">
    <br/>
    <button></Button>


    ${makeFooter()}
    `; 
}