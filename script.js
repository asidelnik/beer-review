let beers = [];
let sorted = false;

function addBeer(name, category, rate) {
    let beerObj = {};
    beerObj.name = name;
    beerObj.category = category;
    beerObj.rate = rate;
    beers.push(beerObj);
}

function renderBeers() {
    $(".beers-list").find("li").remove();
    for (let ind = 0; ind < beers.length; ind++) {
        // var allNames = beers[ind].name;
        $(".beers-list").append("<li>" +
        beers[ind].name + 
        " - " + beers[ind].category + 
        " - " + beers[ind].rate + " " +
        "<span class='fa fa-star yellowStar'></span>" +
        "</li>");  
    }
}

$('.post-beer').on('click', function () {
    let beerName = $('.beer-input').val();
    let beerCategory = $('.category-input').val();
    let selectRate = $('.select-rate').val();
    
    addBeer(beerName, beerCategory, selectRate);
    renderBeers();
});

$('.sort-by-rate').on('click', function () {
    if(!sorted) {
        beers.sort(function(a, b){
            return a.rate - b.rate
        })
        sorted = true;
    } else {
        beers.sort(function(a, b){
            return b.rate - a.rate
        })
        sorted = false;
    }
    renderBeers();
});