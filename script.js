let beers = [];
let beerName = $('.beer-input').val();
let beerCategory = $('.category-input').val();

function addBeer(name, category) {
    let beerObj = {
        name,
        category
    }
    beers.push(beerObj);
}

function renderBeers() {
    $(".beers-list").find("li").remove();
    for (let ind = 0; ind < beers.length; ind++) {
        $(".beers-list").append(beers[ind])
        
    }
}

$('.post-beer').on('click', function () {
    addBeer(beerName, beerCategory);
    renderBeers();
  });

//function postBeer() {}






/*  Questions
    1. can I pass a global function1 local variable as an argument to invoke another global function?
    2. Correct order - global array on top, middle, bottom?
    3. 

*/


