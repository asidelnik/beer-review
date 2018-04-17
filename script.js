
let beers = [];

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


// unicode star - u+2b50  "&#xf005" +


/*  Improve
    1. append categories as <li>
    2. append sub <li> to main categories
    Nested Html List
    <ul>
  <li>Coffee</li>
  <li>Tea
    <ul>
    <li>Black tea</li>
    <li>Green tea</li>
    </ul>
  </li>
  <li>Milk</li>
</ul>

*/



/*
function addBeer(name, category) {
    let beerObj = {
        name,
        category,
        pushIt : function() {
            beers.push(this);
        }
    }
}
*/





/*  Questions
    1. can I pass a global function1 local variable as an argument to invoke another global function?
    2. Correct order - global array on top, middle, bottom?
    3. Creating an object with properties vs creating an object & pushing properties into it
        The first returned the object as undefined
    4. Why use & get inputs by class rather than id?
*/