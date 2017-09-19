
//--------------Model
  var model = {
     currentCat: null,
     currentCatIndex: 0,
     currentCat: cats.img,
     currentCount: cats.count,
    //array for crazy lady cat collection
      cats: [
      { img: "images/catclicker.jpg",
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
  };


//----------------Octopus
  var octopus = {
    init: function() {
      //sets current cat to the first cat
      model.currentCat = model.
    }

  },


//--------------View






//currently selected cat, changes when mae is clicked


//cache page elements
var catImg = document.getElementById('cat-image');
var countElement = document.getElementById('count');
var catName = document.getElementById('name');

//update the page elements when a new cat is selectedCat
function updatePage(cat) {
  catName.innerHTML = cat.name;
  catImg.setAttribute('src', cat.img);
  countElement.innerHTML = cat.count;
};

//set up click handler
function assignClickHandler(liElement, currentCat, index) {
  liElement.addEventListener('click', function(){
    //adds cat name to document
    document.getElementById('name').innerHTML = currentCat.name;
    //adds current Cat image
    document.getElementById('cat-image').setAttribute('src',currentCat.img);
    console.log('clicked!', currentCat.name, currentCat.img);
    currentCatIndex = index;
    //currentCatIndex = cats.findIndex();
    //TODO update counter and....
    //???
    document.getElementById('count').innerHTML = currentCat.count;
  });
};

//create list of cat names
function createCatList () {
  for(var i = 0; i < cats.length; i++){
    var li = document.createElement('li');
    var catListName = cats[i].name;
    li.innerHTML = catListName;
    document.getElementById('cat-list').appendChild(li);
     assignClickHandler(li, cats[i], i);
  };
};

//initialize function to run on page load
function init() {
  createCatList(cats);
  //set up image click handler
  //set up the cat image click handler
  catImg.addEventListener('click', function(){

    console.log('Image clicked! Current cat index is...', currentCatIndex);
    cats[currentCatIndex].count++;
    console.log('Image clicked- current cat count is ', cats[currentCatIndex].count);
    //logic??
    document.getElementById('count').innerHTML = cats[currentCatIndex].count;
  });
  //render the initial cat info to the page
  updatePage(cats[currentCatIndex]);
};
init();



/*

var catDisplay = function (){
  //adds counter to document
  var catCounter = document.createElement('h4');
  catCounter.id = "counter-" + cats.id;
  catCounter.innerHTML = cats.count;
  catElem.appendChild(catCounter);
};
*/
