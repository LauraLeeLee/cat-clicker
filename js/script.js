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
listDiv.setAttribute('id', 'listDiv');

//create ul for cat menu
var ul = document.createElement('ul');
ul.setAttribute('id', 'mainList');
listDiv.appendChild(ul);

document.body.appendChild(listDiv);

//create list of cat names on side for selection
function createNameUl () {
  for(var i = 0; i < cats.length; i++){
    var anchor = document.createElement('a');
    var catListImg = cats[i].img;
    //anchor.href = catListImg;
    var catListName = cats[i].name;
    anchor.innerText = catListName;
    var li = document.createElement('li');
    li.appendChild(anchor);
    ul.appendChild(li);
  };
  console.log(ul);
};
createNameUl(cats);

var catCount = cats.count;

//creats click handler
function makeClickHandler (listElement, counterElement) {
  listElement.addEventListener('click', function(){
    //creates div to hold each "cat block"(name, image, counter)
    var catElem = document.createElement('div');
    catElem.className = ("catElem");

    //adds cat name to document
    var catName = document.createElement('h3');
    catName.innerHTML = this.name;
    catElem.appendChild(catName);

    //adds counter to document
    var catCounter = document.createElement('h4');
    catCounter.id = "counter-" + this.id;
    catCounter.innerHTML = this.count;
    catElem.appendChild(catCounter);

    //adds cat image to document
    var catImage = document.createElement('img');
    catImage.src = this.img;
    catImage.style.width = '200px';
    catImage.className = ("catImg");
    catElem.appendChild(catImage);
    catImage.id = "image-" + this.id;
    console.log('Click handler fired! Here is the catImage element reference: ', listElement)
    console.log('...and here is the currentCat element reference: ', counterElement)
    counterElement.innerHTML = Number(counterElement.innerHTML)+ 1;
    this.count++;
  });
  makeClickHandler(catListName, catCount);
  document.body.appendChild(catElem);
}



/*
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


    //adds cat chosen from list to display

    //adds counter to document
    var catCounter = document.createElement('h4');
    catCounter.id = "counter-" + cats[i].id;
    catCounter.innerHTML = cats[i].count;
    catElem.appendChild(catCounter);

    // use closure principal to "save" the current references of catImage & catCounter before
    // the next loop iteration redefines them
    // this time we are just defining a function, not even bothering to give it a name because
    // we don't plan to reuse it, AND then invoking it immediateley, passing in what we want to preserve
    (function makeClickHandler(listName, counterElem){
      listName.addEventListener('click', function(){
        console.log("catListName" , listName);
        console.log("catCounter id #", counterElem);
        counterElem.innerHTML = Number(counterElem.innerHTML)+1;
        var selectedCat = document.createElement('img');
        selectedCat.src = catListImg;
        selectedCat.appendChild(body);

      });
    })(catImage, catCounter)
    document.body.appendChild(catElem);
  };
};   */
//addCats(cats);
