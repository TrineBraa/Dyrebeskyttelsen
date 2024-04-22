function viewSwitcher(){
    if (currentPage == 'mainPage') mainView();
    if (currentPage == 'dogPage') adoptableDogView();
    if (currentPage == 'infoDogPage') infoDogView();
    if (currentPage == 'infoBreedPage') infoBreedView();
    if (currentPage == 'adoptDogPage') adoptView();
    if (currentPage == 'putDogOnHold') dogOnHoldView(choosenDog);
    if (currentPage == 'planAMeet') planMeetView(choosenDog);
    if (currentPage == 'contact') contactView();
    if (currentPage == 'adoptedPage') adoptedView();
    if (currentPage == 'searchBreedPage') searchBreedView();
}