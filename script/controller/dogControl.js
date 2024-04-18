function viewDog(id){
    model.app.dogToAdopt = id;
    model.app.currentPage = 'dogPage';
    adoptableDogView()
}


function returnButton(){
    return `<button class="mainButton" onclick="adoptableDogView()">Tilbake til Hundene</button>`
}