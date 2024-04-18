function viewDog(id){
    console.log(id)
    model.app.dogToAdopt = id;
    model.app.currentPage = 'dogPage';
    adoptableDogView()
}


function backToAdoptableDogs(){
    model.app.dogToAdopt = null;
    adoptableDogView()
}