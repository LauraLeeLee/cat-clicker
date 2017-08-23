//var counter = 0;

//vanilla JS code, adds event listener to image,
/*var elem = document.getElementById('catpic');
elem.addEventListener('click',function(){
  counter++;
  document.getElementById('tally').innerHTML = counter;
  console.log(counter);
}); */

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
}]


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
    catCounter.innerHTML = cats[i].count;
    catElem.appendChild(catCounter);

    //adds counter tally from clicks to document
    catImage.addEventListener('click', function(currentCat){
      return function(){
        catCounter.innerHTML = Number(catCounter.innerHTML)+ 1;
      };
      console.log(catCounter.innerHTML);
      //console.log(event.target);
    }) (catCounter);
    document.body.appendChild(catElem);
  };
};
addCats(cats);
