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
},
{ img: "images/catclicker3.jpg",
  name: "FraidyCat",
  count: 0,
  id: 3
},
{ img: "images/catclicker4.jpg",
  name: "MsClawz",
  count: 0,
  id: 4
},
{ img: "images/catclicker5.jpg",
  name: "ZsaZsa",
  count: 0,
  id:5
}];

//create div to hold list of cat menu
var listDiv = document.createElement('div');
listDiv.id = "listDiv";
//create ul for cat menu
var ul = document.createElement('ul');
listDiv.appendChild(ul);

//create list of cat names on side for selection
function createNameUl () {
  for(var i = 0; i < cats.length; i++){
    var anchor = document.createElement('a');
    anchor.href = cats[i].img;
    anchor.innerText = cats[i].name;
    var li = document.createElement('li');
    li.appendChild(anchor);
    ul.appendChild(li);
  };
  console.log(ul);
};
createNameUl(cats);

//creates cat elements and block to hold photo, name, counter
function addCats(cats) {
  for(var i = 0; i < cats.length; i++) {
    //creates div to hold each "cat block"(name, image, counter)
    var catElem = document.createElement('div');
    catElem.className = ("catElem");
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
    catImage.id = "image-" + cats[i].id;

    //adds counter to document
    var catCounter = document.createElement('h4');
    catCounter.id = "counter-" + cats[i].id;
    catCounter.innerHTML = cats[i].count;
    catElem.appendChild(catCounter);

    // use closure principal to "save" the current references of catImage & catCounter before
    // the next loop iteration redefines them
    // this time we are just defining a function, not even bothering to give it a name because
    // we don't plan to reuse it, AND then invoking it immediateley, passing in what we want to preserve
    (function makeClickHandler(imgElem, counterElem){
      imgElem.addEventListener('click', function(){
        console.log("catImage" , imgElem);
        console.log("catCounter id #", counterElem);
        counterElem.innerHTML = Number(counterElem.innerHTML)+1;
      });
    })(catImage, catCounter)
    document.body.appendChild(catElem);
  };
};
addCats(cats);
