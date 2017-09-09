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

//create list of cat names
function createNameLi () {
  for(var i = 0; i < cats.length; i++){
    var li = document.createElement('li');
    anchor = document.createElement('a');
    var catListImg = cats[i].img;
    var catListName = cats[i].name;
    anchor.href = catListImg;
    anchor.innerText = catListName;
    li.appendChild(anchor);
    document.getElementById('cat-list').appendChild(li);
    makeClickHandler(li, cats);
  };
};
createNameLi(cats);

//creats click handler
function makeClickHandler (liElement, cat) {
  liElement.addEventListener('click', function(){
    document.getElementById('current-cat').setAttribute('src', this.img);
    //counterElement.innerHTML = Number(counterElement.innerHTML)+ 1;
    this.count++;
    getElementById('count').value = new Number(this.count);
    console.log(this.count);
    console.log(this.id);
    console.log(this.img);
  });
};


/*
var catCount = cats.count;

var catDisplay = function (){
  //creates div to hold each "cat block"(name, image, counter)
  var catElem = document.createElement('div');
  catElem.className = ("catElem");

  //adds cat name to document
  var catName = document.createElement('h3');
  catName.innerHTML = cats.name;
  catElem.appendChild(catName);

  //adds counter to document
  var catCounter = document.createElement('h4');
  catCounter.id = "counter-" + cats.id;
  catCounter.innerHTML = cats.count;
  catElem.appendChild(catCounter);

  //adds cat image to document
  var catImage = document.createElement('img');
  catImage.src = cats.img;
  catImage.style.width = '200px';
  catImage.className = ("catImg");
  catElem.appendChild(catImage);
  catImage.id = "image-" + cats.id;
  document.body.appendChild(catElem);
};
*/

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
