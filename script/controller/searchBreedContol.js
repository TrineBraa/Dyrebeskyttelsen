
function setSearchBreed(breed){
    model.app.breedToSearch = breed
    console.log(breed)
    setBreedData()
    setTimeout(1000)
    
}

async function setBreedData(){
const response = fetch('https://api.api-ninjas.com/v1/dogs?name=' + model.app.breedToSearch, {
        headers: {'X-Api-Key': model.app.APIKey},
    }).then(res => res.json()).then(data => {
        console.log('https://api.api-ninjas.com/v1/dogs?name=' + model.app.breedToSearch)
        console.log(data[0])
        model.data.breedInfo.name = data[0].name
        model.data.breedInfo.img = data[0].image_link
        model.data.breedInfo.energy = data[0].energy
        model.data.breedInfo.drooling = data[0].drooling
        model.data.breedInfo.shedding = data[0].shedding
        model.data.breedInfo.barking = data[0].barking
        model.data.breedInfo.good_with_children = data[0].good_with_children
        model.data.breedInfo.good_with_other_dogs = data[0].good_with_other_dogs
        model.data.breedInfo.trainability = data[0].trainability
        searchBreedView()
    })

}