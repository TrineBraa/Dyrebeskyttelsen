function infoDogView(){
    model.app.currentPage = 'infoDogPage';
    document.getElementById("app").innerHTML = /*HTML*/ `
    ${makeHeader()}
    ${makeMainButtons()}
  
${makeFooter()}
    `; 
}

