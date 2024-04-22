function dogOnHoldView(){
    let choosenDog = model.data.availibleDogs.find((Dog) => Dog.id == model.app.dogToAdopt)
    document.getElementById("app").innerHTML = /*HTML*/ `
    ${makeHeader()}
    <button class="mainButton" onclick="adoptableDogView()">Tilbake</button>
    <h1>Vil du reservere ${choosenDog.name}</h1>


    ${makeFooter()}
    `; 
}