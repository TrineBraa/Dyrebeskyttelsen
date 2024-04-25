function setSearchTerm(input){
    model.inputs.searchbar = input.value;
    console.log(model.inputs.searchbar)
    getSearchResults()
}