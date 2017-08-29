//var counter = 0;

//jQuery code
//adds click listener to image
/*$('#catpic').click(function(e){
  counter++;
  $('#tally').text(counter);
  console.log(counter);
});*/


//array for crazy lady cat collection
var cats = [{
  img: "images/catclicker.jpg",
  name: "Kitty",
  count: 0,
  id: 1
},
{ img: "images/catclicker2.jpg",
  name: "Mr. Tipps",
  count: 0,
  id: 2
}];

//make helper function for click
function makeClickHandler(imgElem, counterElem){
  imgElem.addEventListener('click', function(){
    console.log('Click triggered--Here is the catImage elem reference: ', imgElem);
    console.log('the currentCat elem: ',counterElem);
    counterElem.innerHTML = Number(counterElem.innerHTML)+1;
  });
}


function addCats(cats) {
  for(var i = 0; i < cats.length; i++) {
    //creates div to hold each "cat block"(name, image, counter)
    var catElem = document.createElement('div');
    //adds cat name to document
    var catName = document.createElement('h3');
    catName.innerHTML = cats[i].name;
    catElem.appendChild(catName);

    //adds cat image to document
    var catImage = document.createElement('img');
    catImage.src = cats[i].img;
    catImage.style.width = '200px';
    catImage.className = ("catImg");
    catElem.appendChild(catImage);
    console.log("cat image");

    //adds counter to document
    var catCounter = document.createElement('h4');
    catCounter.id = "counter-" + cats[i].id;
    catCounter.innerHTML = cats[i].count;
    catElem.appendChild(catCounter);

    // use closure principal to "save" the current references of catImage & catCounter before
    // the next loop iteration redefines them
    makeClickHandler(catImage, catCounter);

    document.body.appendChild(catElem);
  };
};
addCats(cats);

/*
$(document).ready(function() {
  $('img').click(function(){
    var tally = parseInt($(this).next("h4").text());
    tally++;
    console.log(tally);
    console.log(this);
  });
});




/*cat.addEventListener('click', (function countClicks(i) {
 var clickCount = 0;
 return function() {
   clickCount++;
   var score = document.getElementById('score-' + i);
   score.innerHTML = clickCount;
  };
})(i));*/
